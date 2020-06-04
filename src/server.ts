import express, { response } from "express";

const app = express();

app.use(express.json());
const users = ["Diogo", "Leandro", "Carlos"];

app.get("/users", (req, res) => {
  console.log("Listagem de usuários");

  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users[id];

  res.json(user);
});

app.post("/users", (req, res) => {
  const data = req.body;

  const user = {
    name: data.name,
    email: data.email,
  };

  return res.json(user);
});

app.listen(3333);
