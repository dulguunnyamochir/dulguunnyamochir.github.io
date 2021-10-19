const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("secure123"));

app.get("/", (req, res) => {
  res.render("index", { cookies: req.cookies });
});

app.post("/add-cookie", (req, res) => {
  const tmp = 10000;
  let { key, value } = req.body;

  if (key && value) res.cookie(key, value, { maxAge: tmp });

  res.redirect(303, "/");
});

app.listen(3000);
