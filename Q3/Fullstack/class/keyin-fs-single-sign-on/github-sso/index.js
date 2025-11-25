const express = require("express");
const passport = require("passport");
const session = require("express-session");
const GitHubStrategy = require("passport-github2").Strategy;
const path = require("path");

const app = express();

const users = [];

passport.use(
    'github',
    new GitHubStrategy(
        {
            clientID: "Ov23liT3MzrYwNF0aCqC",
            clientSecret: "e650d9a03f1e6c9bdc4a4e394b9390f48660ad5f",
            callbackURL: "http://localhost:3000/auth/github/callback",
        },
        (accessToken, refreshToken, profile, done) => {
            let user = users[profile.id];
            if (!user) {
                let email = "No public email";
                // Check if email is public and available
                if (!!profile.emails && !!profile.emails[0]) {
                    email = profile.emails[0].value;
                }
                user = {
                    id: profile.id,
                    username: profile.username,
                    email: profile.emails?.[0]?.value || "No public email",
                    avatar: profile.photos?.[0]?.value || "No photo",
                };

                users[profile.id] = user;

                // let emails = profile.emails;
                // emails?.[0]?.value
            }
            // return done("There is an error", user);
            return done(null, user);
        }
    )
);

// Session configuration
app.use(
    session({
        secret: "secret_key",
        resave: false,
        saveUninitialized: false,
    })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => done(null, user.id)); // When they leave the site
passport.deserializeUser((id, done) => done(null, users[id])); // When they come back

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (request, response) => {
    // console.log(request.failureMessage);
    response.render("index", { user: request.user });
});

app.get("/profile", (request, response) => {
    if (!request.user) {
        return response.redirect("/");
    }
    response.render("profile", { user: request.user });
});

app.get("/logout", (request, response) => {
    request.logout((error) => {
        if (error) {
            return next(error);
        }
        response.redirect("/");
    });
});

app.get('/auth/github', passport.authenticate("github", { scope: ["user:email"] }));
app.get('/auth/github/callback', passport.authenticate("github", { failureRedirect: "/", failureMessage: true, successRedirect: "/profile" })
);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
