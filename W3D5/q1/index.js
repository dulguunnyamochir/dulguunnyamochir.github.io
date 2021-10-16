const express = require("express");
const app = express();

app.get("/", (req, res) => {
  let { name, age } = req.query;
  if (!name) {
    name = "person";
  }
  if (!age) {
    age = "100";
  }
  res.send(`Welcome ${name}. Is your age ${age}?`);
});

app.listen(3000);
