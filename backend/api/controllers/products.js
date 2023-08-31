const express = require('express')
const bcrypt = require('bcrypt')
const routes = express.Router()
const bodyParser = require('body-parser')
const path = require('path')
const products = require('../models/product')




const {
    fetchProducts,
    fetchProductsByID,
    fetchInsertProducts,
    fetchDeleteProducts,
  } = require("../models/product");
  
  const allProducts = (req, res) => {
    fetchProducts((error, results) => {
        if (error) {
            res.status(500).json({error: "internal error"});
        }
        else{
            res.status(200).json(results);
        }
    });
  };

     


  const showAProducts = (req, res) => {
    fetchProductsByID(req.params.proID, (error, results) => {
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
    fetchInsertProducts(data, (error, results) => {
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
    fetchDeleteProducts(proID, (error,results) => {
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
    fetchUpdateProducts(proID, newData, (error, results) => {
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