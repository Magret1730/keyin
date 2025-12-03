const express = require("express");
const path = require("path");
const app = express();

const pets = [];

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.get('/api/pets', (req, res) => {

});

app.post('/api/pets', (req, res) => {

});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
