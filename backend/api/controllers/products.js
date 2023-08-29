const {
    allProducts,
    showAProducts,
    createProducts,
    removeProducts,
    updateProductInfo
  } = require("../model/user");
  
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
    getProductsByID(req.params.productID, (error, results) => {
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