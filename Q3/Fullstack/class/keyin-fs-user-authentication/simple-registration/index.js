const express = require('express');
const session = require('express-session');
const path = require('path');
const bcrypt = require('bcrypt');

const saltRounds = 10;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // to parse form data
app.use(session({
  secret: 'supersecretkey',
  resave: false,
  saveUninitialized: false,
}));

const users = [];

app.get('/register', (request, response) => {
    const errorMessage = request.query.error;
    return response.render('register', { errorMessage })
});

app.post('/register', (request, response) => {
    const { username, password } = request.body;

    if (!username) {
        return response.redirect('/register?error=Username is required');
    }

    if (!password) {
        return response.redirect('/register?error=Password is required');
    }

    const cleanedUsername = username.trim();
    if (!cleanedUsername) {
        return response.redirect('/register?error=Username canot be empty');
    }

    const isUsernameTaken = users.some((user) => user.username === cleanedUsername);
    if (isUsernameTaken) {
        return response.redirect('/register?error=Username already in use.');
    }

    if (password.length < 8) {
        return response.redirect('/register?error=Password must be at least 8 characters in length.');
    }

    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    users.push({
        username: cleanedUsername,
        password: hashedPassword,
    });

    return response.redirect('/');
});

app.get('/login', (request, response) => {
    const errorMessage = request.query.error;
    return response.render('login', { errorMessage })
});

app.post('/login', (request, response) => {
    const { username, password } = request.body;
    const user = users.find((user) => user.username === username);
    if (!user || !bcrypt.compareSync(password, user.password)) {
        return response.redirect('/login?error=Invalid credentials entered.');
    }

    request.session.username = username;
    return response.redirect('/');
});

app.get('/', (request, response) => {
    const username = request.session.username;
    const errorMessage = request.session.errorMessage;
    request.session.errorMessage = null;

    if (!!username) {
        return response.redirect('/authenticatedIndex');
    }

    response.render('index', { errorMessage });
});

app.get('/authenticatedIndex', (request, response) => {
    const username = request.session.username;

    if (!username) {
        request.session.errorMessage = 'You must be logged in to do that.'
        return response.redirect('/');
    }

    response.render('authenticatedIndex', { username });
});

app.post('/logout', (request, response) => {
    request.session.destroy((error) => {
        if (!error) {
            console.error(error);
        }

        return response.redirect('/');
    });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

