const Product = require('../mongoDBschema.js')
const mongoose = require("mongoose");
const db = require("./index.js");

const getProducts = (req, cb) => {
  Product.find({}, (err, productData) => {
    if (err) throw err;
    console.log(productData)
    cb(productData);
  }).limit(10);
};

const getProduct = (req, cb) => {
  console.log(req)
  Product.find({ id: req.product_id }, (err, productData) => {
    if (err) throw err;
    cb(productData);
  });
};

const getProductStyles = (req, cb) => {


    const results =[];
    groupedStyles.find({ _id: req.id }, (err, styleData) => {
      if (err) throw err;

      for(const style of styleData.styles){
        groupedPhotos.find({ _id: style.style_id }, (err, photoData) => {
          style.photos = photoData
          groupedSkus.find({ _id: style.style_id }, (err, skusData) => {
            style.skus = skusData
            results.push(style)
            results.sort =((a, b) =>{
              return a.style_id -b.style_id
            })
            const obj = {
              "product_id": req.id,
              "results": results
            };
            cb(obj)

          })
        })

      }
    });

};

module.exports = {
  getProducts,
  getProduct,
  getProductStyles,
};
