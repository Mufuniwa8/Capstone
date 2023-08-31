require('dotenv').config();
const cors = require("cors");
const express = require("express");
const app = express();
const database = require("../config/index.js");
const path = require("path");
// const port = +process.env.PORT || 3301;
const bodyParser = require("body-parser");

app.use(express.static("./static"));
app.use(bodyParser.json());
app.use(cors());

const fetchUser = (result) => {
    const query = `SELECT * FROM User;`;
    database.query(query, (error, res) => {
     
        if (error) {
            console.log(error);
            result(error, null);
            return;
        } else {
            result(null, res);
        }
    });
};

const fetchUserByID = (req, res) => {
    const query = `select userID, firstName, lastName, userRole, userPassword, userProfile from User where userID = ${req.params.id};`;
    database.query(query, (error, data) => {
        if (error) throw error;
        res.json({status: res.statusCode, results: data});
    });
};

const fetchInsertUser = (req,res) => {
    const query = `update User set? where userID = ?;`;
    database.query(query, [req.body, req.params.id], (error) => {
       if (error) throw error
       res.json(
           {status: res.statusCode,
           message:"The user record is update."}
       )
    })   
   };

const fetchDeleteUser = (req, res) => {
    const query = `delete from User where userID = ${req.params.id};`
    database.query(query, (error) => {
        if (error) throw error;
        res.json(
            {
                status: res.statusCode,
                message: "The user record has been deleted."
            }
        )
    })
}

// app.listen(port, () => {
//     console.log(`server is running at http://localhost:${port}`);
// });

module.exports = {
    fetchUser,
    fetchUserByID,
    fetchInsertUser,
    fetchDeleteUser,
}