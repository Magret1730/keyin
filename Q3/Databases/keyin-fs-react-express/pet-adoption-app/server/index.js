const express = require("express");
const path = require("path");
const app = express();

const pets = [
  {name: "Express", type: "Turtle", age: 3},
  {name: "Backend", type: "Cat", age: 2}
];

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json());

app.get('/api/pets', (req, res) => {
  return res.send(pets);
});

app.post('/api/pets', (req, res) => {
  const { name, type, age } = req.body;

  const parsedAge = parseInt(age);

  if (isNaN(parsedAge) || parsedAge < 1) {
    return res.status(400).send({error: "Age must be a positive integer value"});
  }

  if (!name || !type || !parsedAge) {
    return res.status(400).send({error: "Name, type and age are required for a pet."});
  }

  const newPet = {
    name: name,
    type: type,
    age: age
  }

  pets.push(newPet);

  return res.status(201).send(newPet);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
