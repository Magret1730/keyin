const express = require('express');
const session = require('express-session');
const path = require('path');
const bcrypt = require('bcrypt');
const { request } = require('http');

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

    console.log(`Username: ${username}, Password: ${password}`);
    const cleanedUsername = username.trim();
    console.log(`cleanedUsername: ${cleanedUsername}, Password: ${password}`);
    if (!cleanedUsername) {
        return response.redirect('/register?error=Username cannot be empty');
    }

    const isUsernameTaken = users.some((user) => user.username4 === username);
    if (isUsernameTaken) {
        return response.redirect('/register?error=Username already in user.');
    }

    // Password is minimum 8 characters
    if (password.length < 8) {
        return response.redirect('/register?error=Password must be at least 8 characters.');
    }


    // CREATE TABLE IF NOT EXISTS users (
    //  username TEXT UNIQUE NOT NULL,
    //  password TEXT NOT NULL
    // );

    // INSERT INTO users (username, password) VALUESS ($1, $2) RETURNING *;

    users.push({
        username: cleanedUsername,
        password: bcrypt.hashSync(password, saltRounds),
    });
    console.log(`Password: ${bcrypt.hashSync(password, saltRounds)}`)
    console.log(`Users: ${JSON.stringify(users)}`);

    return response.redirect('/login');
});

app.get('/login', (request, response) => {
    const errorMessage = request.query.error;
    return response.render('login', { errorMessage })
});

app.post('/login', (request, response) => {
    const { username, password } = request.body;

    const user = users.find((user) => user.username === username);
    // if (!user || user.password !== password) {
    if (!user || !bcrypt.compareSync(password, user.password)) { // THIS PART
        return response.redirect('/login?error=Invalid credentials entered. ');
    }

    request.session.username = username;
    return response.redirect('/');
});

app.get('/', (request, response) => {
    const username = request.session.username;
    const errorMessage = request.session.errorMessage;
    request.session.errorMessage = null;
    // response.render('index', { username, errorMessage });

    if (!!username) {
        return response.render('login', {errorMessage})
    }
});

app.get('/authenticatedIndex', (request, response) => {
    const username = request.session.username;

    if (!username) {
        request.session.errorMessage = "YOu must be logged in"
        return response.redirect('/');
        // return response.redirect('/?error=YOu must be logged in');
    }

    return response.render('authenticatedIndex', { username })
})

app.post('/logout', (request, response) => {
    request.session.destroy((error) => {
        if (!error) {
            console.error(error);
        }
    });
    return response.redirect('/');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});