// const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(` 
    <div>
        <form action="/result" method="post">
            <label for="name"> Name: </label>
            <input type="text" id="name" name="name">
            <label for="age"> Age: </label>
            <input type="text" id="age" name="age">
            <button type="submit"> Send </button>
        </form>
    </div> `);
});

app.post("/result", (req, res) => {
  let { name, age } = req.body;
  if (!name) {
    name = "person";
  }
  if (!age) {
    age = "100";
  }
  res.send(`Welcome ${name}. Is your age ${age}?`);
});

app.listen(3000);
