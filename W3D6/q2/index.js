// const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("/index");
});

app.post("/result", (req, res) => {
  let { name, age } = req.body;
  if (!name) {
    name = "person";
  }
  if (!age) {
    age = "100";
  }
  res.render("result", { name, age });
});

app.listen(3000);
