import express from "express";

const app = express();

app.get("/users", (req, res) => {
  console.log("Listagem de usuários");

  res.json(["Diogo", "Leandro", "Carlos"]);
});

app.listen(3333);
