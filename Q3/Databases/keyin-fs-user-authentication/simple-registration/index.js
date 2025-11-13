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
    const errorMessage = null;
    return response.render('register', { errorMessage })
});

app.post('/register', (request, response) => {
    const { username, password } = request.body;
    console.log(`Username: ${username}, Password: ${password}`);

    users.push({
        username: username,
        password: password,
    });

    console.log(`Users: ${JSON.stringify(users)}`);

    return response.redirect('/');
});

app.get('/login', (request, response) => {
    const errorMessage = request.query.error;
    return response.render('login', { errorMessage })
});

app.post('/login', (request, response) => {
    const { username, password } = request.body;

    const user = users.find((user) => user.username === username);
    if (!user || user.password !== password) {
        return response.redirect('/login?error=Invalid credentials entered. ');
    }

    request.session.username = username;
    return response.redirect('/');
});

app.get('/', (request, response) => {
    const username = request.session.username;
    const errorMessage = null;
    response.render('index', { username, errorMessage });
});

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
