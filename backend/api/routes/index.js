const express = require('express');
const router = express.Router();

const {
  allProducts,
  showAProducts,
  createProducts,
  removeProducts,
  fetchUpdateProducts
} = require("../controllers/products")

router.get("/products", allProducts);

router.get("/products/:id", showAProducts);

router.post("/products", createProducts);

router.delete("/products/delete/:proID", removeProducts);

router.put("/products/update/:proID", fetchUpdateProducts);

const {
  allUser,
  showAUser,
  createUser,
  removeUser,
  fetchUpdateUser,
  // userRegister
} = require("../controllers/user")
const {loginUser} = require("../models/user");

router.get("/User", allUser);

router.get("/User/:userID", showAUser);

router.post("/User", createUser);

// router.post("/register", userRegister);

router.post("/User/login", loginUser);

router.delete("/User/delete/:userID", removeUser);

router.put("/User/update/:id", fetchUpdateUser);


const {
  allCart,
  showACart,
  createCart,
  removeCart,
  updateCartInfo
} = require("../controllers/cart")

router.get("/Cart", allCart);

router.get("/Cart/:cartID", showACart);

router.post("/Cart", createCart);


router.delete("/Cart/delete/:cartID", removeCart);

router.put("/Cart/update/:cartID", updateCartInfo);

module.exports = router;