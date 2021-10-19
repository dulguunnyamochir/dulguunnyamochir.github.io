const express = require("express");
const path = require("path");
const session = require("express-session");
const app = express();
app.use("/css", express.static(path.join(__dirname, "./", "css")));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "secret123",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  const date = new Date();
  const hour = date.getHours();
  let html = path.join(__dirname, "./", "night.html");
  if (6 <= hour && hour <= 18) {
    html = path.join(__dirname, "./", "day.html");
  }

  res.sendFile(html);
});

app.post("/result", (req, res) => {
  let { name, age } = req.body;

  if (!req.session.views) {
    req.session.views = {};
  }

  req.session.views[name] = age;
  res.redirect("/output");
});

app.get("/output", (req, res) => {
  let person = req.session.views;

  for (var i in person) {
    if (!i) {
      i = "person";
    }
    if (!person[i]) {
      person[i] = "100";
    }
    res.send(`Welcome ${i}.your age ${person[i]}`);
  }
});

app.listen(3000);
