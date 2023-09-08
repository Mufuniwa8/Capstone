const express = require('express')
const routes = express.Router()
const bodyParser = require('body-parser')
const path = require('path')
const bcrypt = require("bcrypt")
const {createToken} = require("../middleware/AuthenticateUser")
const user = require('../models/user')

const {
    fetchUser,
    fetchUserByID,
    fetchInsertUser,
    fetchDeleteUser,
    fetchUpdateUser
  } = require("../models/user");
  
  const allUser = (req, res) => {
    fetchUser((error, results) => {
        if (error) {
            res.send(error);
        }
        else{
            res.json(results);
        }
    });
  };

     


  const showAUser = (req, res) => {
    fetchUserByID(req.params.userID, res, (error, results) => {
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
        if (!data.userPassword) {
            return res.status(400).json({ error: "Required password"});
        }
        data.userPassword = bcrypt.hashSync(data.userPassword, 10);

        const User = {
            email: data.email,
            userPassword: data.Password,
        };

        let token = createToken(User);

        fetchInsertUser(data, (error, results) => {
            if (error) {
                res.status(500).json({error: "A error came up while creating a user"});
            }
            else {
                res.status(201).json({token, results});
            }
        });
    }; 



  const removeUser = (req, res) => {
    const userID = req.params.userID;
    fetchDeleteUser(userID, (error,results) => {
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
    fetchUpdateUser(userID, newData, (error, results) => {
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
