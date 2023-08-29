require('dotenv').config();
const cor = require("cors");
const express = require("express");
const app = express();
const database = require("../config/index.js");
const path = require("path");
const port = +process.env.PORT || 3300;
const bodyParser = require("body-parser");

app.use(express.static("./static"));
app.use(bodyParser.json());
app.use(cors());


//user

user.get('/User', (req,res) => {
    const query = `select userID, firstName, lastName, userRole,userPassword,userProfile  from User;`;
    database.query(query, (error, data) => {
     
      if (error) {
        res.status(404).json({ message: "Error try again" });
      }
      else {
       res.status(200).json({ results: data });
      }
    });
});



app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});
app.get("/User/:id", (req, res) => {
    const query = `select proID, proImage, proName, proColor, proPrice, proStock, proCategory from products;`;
    database.query(query, (error, data) => {
        if (error) throw error;
        res.json({status: res.statusCode, results: data});
    });
});

app.patch('/User/:id', (req,res) => {
 const query = `update user set? where userID = ?;`;
 database.query(query, [req.body, req.params.id], (error) => {
    if (error) throw error
    res.json(
        {status: res.statusCode,
        message:"The user record is update."}
    )
 })   
});

app.delete('/User/:id', (req, res) => {
    const query = `delete from User wher userID = ${req.params.id};`
    database.query(query, (error) => {
        if (error) throw error;
        res.json(
            {
                status: res.statusCode,
                message: "The user record has been deleted."
            }
        )
    })
})


//end of user 

//products

products.get('/products', (req,res) => {
    const query = `select proID, proImage, proName, proColor, proPrice, proStock, proCategory from products;`;
    database.query(query, (error, data) => {
        if (error) {
            res.status(404).json({message: "Error! try again"});
        }
        else {
            res.status(200).json({results: data});
        }
    });
});