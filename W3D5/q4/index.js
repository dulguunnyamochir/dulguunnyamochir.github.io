const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: true }));

app.use("/public", express.static(path.join(__dirname, "../q3", "public")));
app.use("/css", express.static(path.join(__dirname, "../q2", "css")));

app.get("/", (req, res) => {
  const date = new Date();
  const hour = date.getHours();
  console.log(path.join(__dirname, "../q3", "public"));
  let resFile = path.join(__dirname, "../q3/public", "index-night.html");
  if (6 <= hour && hour <= 18) {
    resFile = path.join(__dirname, "../q3/public", "index-day.html");
  }
  res.sendFile(resFile);
});

app.get("/output", (req, res) => {
  let { name, age } = req.query;
  if (!name) {
    name = "person";
  }
  if (!age) {
    age = "100";
  }
  res.send(`Welcome ${name}. Is your age ${age}?`);
});

app.post("/result", (req, res) => {
  let { name, age } = req.body;
  res.redirect(`/output?name=${name}&age=${age}`);
});

app.listen(3000);
