const express = require("express");
const path = require("path");
const session = require("express-session");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({ secret: "secret123", resave: false, saveUninitialized: true })
);

const products = [
  { id: 1, name: "product1", price: "1000" },
  { id: 2, name: "product2", price: "2000" },
  { id: 3, name: "product3", price: "3000" },
  { id: 4, name: "product4", price: "4000" },
  { id: 5, name: "product5", price: "5000" },
  { id: 6, name: "product6", price: "6000" },
];

app.get("/", (req, res) => {
  res.render("shop", { products: products });
});
app.get("/product/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((p) => p.id == id);
  res.render("product", { product: product });
});
app.post("/addToCart", (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  if (!req.session.views) {
    req.session.views = {};
  }
  if (!req.session.views[name]) {
    req.session.views[name] = { name: name, price: price, quantity: 1 };
  } else {
    const quantity = req.session.views[name].quantity;
    req.session.views[name].quantity = quantity + 1;
    req.session.views[name].price = (quantity + 1) * price;
  }
  res.redirect(`/shoppingcart`);
});
app.get("/shoppingcart", (req, res) => {
  res.render("shoppingcart", {
    shoppingCart: req.session.views,
  });
});
app.listen(3000);
