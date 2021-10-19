const express = require("express");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "view"));
const localArr = [];
app.get("/", (req, res) => {
  res.render("list", { localArr });
});
app.get("/add", (req, res) => {
  res.render("form");
});
app.post("/add", (req, res) => {
  let item = req.body.item;
  localArr.push(item);
  res.redirect("/");
});
app.listen(3000);
