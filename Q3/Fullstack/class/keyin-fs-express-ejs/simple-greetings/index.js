const express = require('express');
const path = require('path');
const { getRandomGreeting } = require('./utils/greetingGenerator');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.get('/', (request, response) => {
    const greeting = getRandomGreeting();
    console.log(`Greeting is: "${greeting}"`);

    response.render("index.ejs", {
        ejsGreeting: greeting,
        ejsDate: new Date().toDateString(),
    });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
