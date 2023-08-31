const express = require('express')
const routes = express.Router()
const bodyParser = require('body-parser')
const path = require('path')
const {products} = require('../models/cart')




const {
    fetchCart,
    fetchCartByID,
    fetchInsertCart,
    fetchDeleteCart,
    FetchUpdateCart
  } = require("../models/cart");
  
  const allCart = (req, res) => {
    fetchCart((error, results) => {
        if (error) {
            res.send(error);
        }
        else{
            res.json(results);
        }
    });
  };

     


  const showACart = (req, res) => {
    fetchCartByID(req.params.cartID, (error, results) => {
        if (error) {
            res.send(error);
        }
        else{
            res.json(results);
        }
    });
  };

  const createCart = (req, res) => {
    const data = req.body;
    fetchInsertCart(data, (error, results) => {
        if (error) {
            res.send(error);
        }
        else{
            res.json(results);
        }
    }); 
  };



  const removeCart = (req, res) => {
    const cartID = req.params.cartID;
    fetchDeleteCart(cartID, (error,results) => {
        if (error) {
            res.send(error);
        }
        else{
            res.json(results);
        }
    });
  };

  const updateCartInfo = (req,res) => {
    const cartID = req.params.cartID;
    const newData = req.body;
    FetchUpdateCart(cartID, newData, (error, results) => {
            if (error) {
                    res.send(error);
        }
        else{
            res.json(results);
        }
    });
  };

  module.exports = {
  allCart,
  showACart,
  createCart,
  removeCart,
  updateCartInfo,
};


// routes.length('/products', (req, res) => {
//     products.fetchProducts(req, res)

// })
// routes.length('/products/:id', (req, res) => {
//     products.fetchProducts(req, res)

// })