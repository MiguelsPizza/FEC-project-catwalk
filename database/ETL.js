const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
// const ProductSchema = require("./mongoDBschema");
const csv = require("csvtojson");
const bodyParser = require("body-parser");
const testData = require("./testdata.js");
const products = testData.products;
const features = testData.features;
const styles = testData.styles;
const skus = testData.skus;
const related = testData.related;
const photos = testData.photos;

// mongoose.connect('mongodb://localhost/SDC');

// const csvFilePath = "/Users/alexmnahas/Downloads/photos.csv";
// for(let i = 0; i <= 56; i++){
const csvFilePath = `/Users/alexmnahas/FEC-project-catwalk/database/output/${0}.csv`;
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
})
// }

// mongoose.connect("mongodb://localhost:27017/SDCtest2");

// get reference to database
// var db = mongoose.connection;

// db.on("error", console.error.bind(console, "connection error:"));

// db.once("open", function () {
//   console.log("Connection Successful!");
//   const Schema = mongoose.Schema;
//   const ProductSchema = Schema({
//     //maybe add keyword new
//     // _idDB: {
//     //   type: Schema.Types.ObjectId,
//     //   required: true
//     // },
//     id: {
//       type: Number,
//       required: true,
//     },
//     name: {
//       type: String,
//       required: true,
//     },
//     slogan: {
//       type: String,
//       required: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     category: {
//       type: String,
//       required: true,
//     },
//     default_price: {
//       type: String,
//       required: true,
//     },
//     features: [
//       {
//         feature: {
//           type: String,
//           required: true,
//         },
//         value: {
//           type: String,
//           required: true,
//         },
//       },
//     ],
//     results: [
//       {
//         style_id: {
//           type: Number,
//           required: true,
//         },
//         name: {
//           type: String,
//           required: true,
//         },
//         original_price: {
//           type: String,
//           required: true,
//         },
//         sale_price: {
//           type: String,
//           required: true,
//         },
//         default: {
//           type: Boolean,
//           required: true,
//         },
//         photos: {
//           thumbnail_url: {
//             type: String,
//             required: true,
//           },
//           url: {
//             type: String,
//             required: true,
//           },
//         },
//         skus: {
//           size: {
//             quantity: {
//               type: Number,
//               required: true,
//             },
//             size: {
//               type: String,
//               required: true,
//             },
//           },
//         },
//       },
//     ],
//   });

//   const Product = mongoose.model("Product", ProductSchema);

//   // })

//   async function test() {
//     const jsonArray = await csv().fromFile(csvFilePath);
//     await console.log("here");
//       Product.bulkSave(
//         jsonArray,
//         (err, res) => {
//           if (err) throw err;
//           console.log("it worked");
//         }
//       );
//   }
//   test();
// });

// //for every product
// //add the styles
// //add the skus
// //add the features
// // add related

// //add that product to the dbs

// // async function main() {
// //     await mongoose.connect('mongodb://localhost:27017/testSDC3');
// //     const jsonArray = await csv().fromFile(csvFilePath);
// //     for(let product of jsonArray){
// //         const prod = new ProductSchema({id: product.id, name: product.name, slogan: product.slogan, description: product.description, category: product.category, default_price: product.default_price})

// //         prod.save((err)=> {
// //             if (err) throw err
// //             console.log('it worked')
// //         })
// //     }

// //   }
// // main()




