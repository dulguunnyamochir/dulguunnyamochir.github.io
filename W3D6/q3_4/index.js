const express = require("express");
const app = express();
const path = require("path");
const uid = require("uuid");
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

const products = [
  { id: 1, name: "product1", price: "1000" },
  { id: 2, name: "product2", price: "2000" },
  { id: 3, name: "product3", price: "3000" },
  { id: 4, name: "product4", price: "4000" },
  { id: 5, name: "product5", price: "5000" },
  { id: 6, name: "product6", price: "6000" },
];

const cart = [];

app.get("/", (req, res) => {
  res.render("shop", { products });
});

app.get("/product", (req, res) => {
  let id = req.query.id;
  let prod = products.find((p) => p.id == id);
  //   console.log(prod);
  res.render("product", { prod });
});

app.post("/addToCart", (req, res) => {
  let name = req.body.name;
  let price = req.body.price;
  let a = cart.find( e => e.name == name);
  if (a) {
    a["quantity"]++;
    a["price"] = Number(price) * a["quantity"];
  } else {
    cart.push({
      name: name,
      price: Number(price),
      quantity: 1,
    });
  }
  res.redirect(303, "/shoppingcart");
});

app.get("/shoppingcart", (req, res) => {
  res.render("shoppingcart", { cart });
});

app.listen(3000);
