import express, { response } from "express";

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Hi" });
});

export default routes;
