const express = require('express')
const routes = express.Router()
const bodyParser = require('body-parser')
const path = require('path')
const {products} = require('../models')




const {
    getAllProducts,
    getProductsByID,
    insertProducts,
    deleteProducts,
    updateProducts
  } = require("../models/product");
  
  const allProducts = (req, res) => {
    getAllProducts((error, results) => {
        if (error) {
            res.send(error);
        }
        else{
            res.json(results);
        }
    });
  };

     


  const showAProducts = (req, res) => {
    getProductsByID(req.params.proID, (error, results) => {
        if (error) {
            res.send(error);
        }
        else{
            res.json(results);
        }
    });
  };

  const createProducts = (req, res) => {
    const data = req.body;
    insertProducts(data, (error, results) => {
        if (error) {
            res.send(error);
        }
        else{
            res.json(results);
        }
    }); 
  };



  const removeProducts = (req, res) => {
    const proID = req.params.proID;
    deleteProducts(proID, (error,results) => {
        if (error) {
            res.send(error);
        }
        else{
            res.json(results);
        }
    });
  };

  const updateProductInfo = (req,res) => {
    const proID = req.params.proID;
    const newData = req.body;
    updateProducts(proID, newData, (error, results) => {
            if (error) {
                    res.send(error);
        }
        else{
            res.json(results);
        }
    });
  };

  module.exports = {
  allProducts,
  showAProducts,
  createProducts,
  removeProducts,
  updateProductInfo,
};


// routes.length('/products', (req, res) => {
//     products.fetchProducts(req, res)

// })
// routes.length('/products/:id', (req, res) => {
//     products.fetchProducts(req, res)

// })