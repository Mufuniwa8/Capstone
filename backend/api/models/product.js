// require('dotenv').config();
// const cors = require("cors");
// const express = require("express");
// const app = express();
const database = require("../config/index.js");
// const path = require("path");
// // const port = +process.env.PORT || 3300;
// const bodyParser = require("body-parser");

// app.use(express.static("./static"));
// app.use(bodyParser.json());
// app.use(cors());


//user

const getProducts = (result) => {
    const query = "SELECT * FROM products";
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



// app.listen(port, () => {
//     console.log(`server is running at http://localhost:${port}`);
// });
const fetchProductsByID = (req, res) => {
    const query = `select proID, proImage, proName, proColor, proPrice, proStock, proCategory from products where proID = ${req.params.id};`;
    database.query(query, (error, data) => {
        if (error) throw error;
        res.json({status: res.statusCode, results: data});

    });
};



const fetchInsertProducts = (req,res) => {
 const query = `update products set? where proID = ?;`;
 database.query(query, [req.body, req.params.id], (error) => {
    if (error) throw error
    res.json(
        {status: res.statusCode,
        message:"The user record is update."}
    )
 })   
};

const fetchDeleteProducts = (req, res) => {
    const query = `delete from products where proID = ${req.params.id};`
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
module.exports = {
    getProducts,
    fetchProductsByID,
    fetchInsertProducts,
    fetchDeleteProducts,
};