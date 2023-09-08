// require('dotenv').config();
// const cors = require("cors");
// const express = require("express");
// const app = express();
const db = require("../config/index.js");
// const path = require("path");
// // const port = +process.env.PORT || 3300;
// const bodyParser = require("body-parser");

// app.use(express.static("./static"));
// app.use(bodyParser.json());
// app.use(cors());

//user

const fetchProducts = (result) => {
  const query = "SELECT * FROM products";
  db.query(query, (error, res) => {
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
const fetchProductsByID = (id, res) => {
    // console.log(req)
  const query = `SELECT proID, proImage, proName, proColor, proPrice, proStock, proCategory FROM products where proID = ${id};`;
  db.query(query, (error, data) => {
    if (error) throw error;
    res.json({ status: res.statusCode, results: data });
  });
};



const fetchInsertProducts = (data, result) => {
  db.query("INSERT INTO products SET ?;", [data], (error,results) => {
    if (error) {
      console.log(error);
      result(error, null);
    }
    else{
      result(null, results);
    }
  });
};
  
const updateProductInfo = (id, data, result) => {
  db.query("UPDATE products SET proImage = ?, proName = ?, proColor = ?, proPrice = ?, proStock = ?, proCategory =?", 
  [
    data.proImage,
    data.proName,
    data.proColor,
    data.proPrice,
    data.proStock,
    data.proCategory,
    id
  ],
  (error, results) => {
    if (error) {
      console.log(error);
      result({ error: "Product not updated"}, null);
    }
    else {
      result(null, results);
    }
  }
  )
}
  // const query = 'UPDATE products SET ? WHERE proID = ?';
  // db.query(query, [req.body, productId], (error) => {
  //   if (error) {
  //     console.error('Database error:', error);
  //     return res.status(500).json({ error: 'An error occurred while updating the product.' });
  //   }
  //   res.json({ status: res.statusCode, message: 'The user record is updated.' });
  // });



const fetchDeleteProducts = (id, result) => {
 db.query("DELETE FROM products WHERE proID = ?", [id], (error, results) => {
  if (error) {
    console.log(error);
    results(error, null);
  }
  else{
    result(null, results);
  }
 });
};

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
  fetchProducts,
  fetchProductsByID,
  fetchInsertProducts,
  fetchDeleteProducts,
  updateProductInfo
};
