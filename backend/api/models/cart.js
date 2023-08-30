require('dotenv').config();
const cors = require("cors");
const express = require("express");
const app = express();
const database = require("../config/index.js");
const path = require("path");
const port = +process.env.PORT || 3302;
const bodyParser = require("body-parser");

app.use(express.static("./static"));
app.use(bodyParser.json());
app.use(cors());


//user

 const fetchCart = app.get('/cart', (req,res) => {
    const query = `select cartID, cartImage, cartName, cartColor, cartPrice from cart;`;
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
app.get("/cart/:id", (req, res) => {
    const query = `select cartID, cartImage, cartName, cartColor, cartPrice from cart where cartID = ${req.params.id};`;
    database.query(query, (error, data) => {
        if (error) throw error;
        res.json({status: res.statusCode, results: data});
    });
});



app.patch('/cart/:id', (req,res) => {
 const query = `update cart set? where cartID = ?;`;
 database.query(query, [req.body, req.params.id], (error) => {
    if (error) throw error
    res.json(
        {status: res.statusCode,
        message:"The user record is update."}
    )
 })   
});

app.delete('/cart/:id', (req, res) => {
    const query = `delete from cart where cartID = ${req.params.id};`
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


// //end of user 

// //products

// products.get('/products', (req,res) => {
//     const query = `select proID, proImage, proName, proColor, proPrice, proStock, proCategory from products;`;
//     database.query(query, (error, data) => {
//         if (error) {
//             res.status(404).json({message: "Error! try again"});
//         }
//         else {
//             res.status(200).json({results: data});
//         }
//     });
// });
module.exports = fetchCart