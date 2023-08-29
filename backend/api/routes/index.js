const express = require('express');
const router = express.Router();

const {
  allProducts,
  showAProducts,
  createProducts,
  removeProducts,
  updateProductInfo
} = require("../controllers/products")

router.get("/products", allProducts);

router.get("/products/:proID", showAProducts);

router.post("/products", createProducts);

router.delete("/products/delete/:proID", removeProducts);

router.put("/products/update/:proID", updateProductInfo);

module.exports = router;