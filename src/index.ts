import express, { Router } from "express";

const app = express();
const port = 3000;

// Fake Rest Controller for Dog resource
function dogController(): Router {
  const router = Router();

  router.get("/dog", (req, res) => {
    res.send("get all dogs");
  });

  router.get("/dog/:dogId", (req, res) => {
    res.send(`get dog with id ${req.params.dogId}`);
  });

  return router;
}

// Fake Rest Controller for Cat resource
function catController(): Router {
  const router = Router();

  router.get("/cat", (req, res) => {
    res.send("get all cats");
  });

  router.get("/cat/:catId", (req, res) => {
    res.send(`get cat with id ${req.params.catId}`);
  });

  return router;
}

// Create the api namespace and assign
// any amount of routers
app.use("/api", [dogController(), catController()]);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
