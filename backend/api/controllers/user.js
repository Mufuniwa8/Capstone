const express = require('express')
const routes = express.Router()
const bodyParser = require('body-parser')
const path = require('path')
const {user} = require('../models')

const {
    getAllUser,
    getUserByID,
    insertUser,
    deleteUser,
    updateUser
  } = require("../models/user");
  
  const allUser = (req, res) => {
    getAllUser((error, results) => {
        if (error) {
            res.send(error);
        }
        else{
            res.json(results);
        }
    });
  };

     


  const showAUser = (req, res) => {
    getUserByID(req.params.userID, (error, results) => {
        if (error) {
            res.send(error);
        }
        else{
            res.json(results);
        }
    });
  };

  const createUser = (req, res) => {
    const data = req.body;
    insertUser(data, (error, results) => {
        if (error) {
            res.send(error);
        }
        else{
            res.json(results);
        }
    }); 
  };



  const removeUser = (req, res) => {
    const proID = req.params.userID;
    deleteUser(userID, (error,results) => {
        if (error) {
            res.send(error);
        }
        else{
            res.json(results);
        }
    });
  };

  const updateUserInfo = (req,res) => {
    const userID = req.params.userID;
    const newData = req.body;
    updateUser(userID, newData, (error, results) => {
            if (error) {
                    res.send(error);
        }
        else{
            res.json(results);
        }
    });
  };

  module.exports = {
  allUser,
  showAUser,
  createUser,
  removeUser,
  updateUserInfo,
};
