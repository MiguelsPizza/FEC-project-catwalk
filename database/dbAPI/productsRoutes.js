const Schemas = require("../mongoDBschema.js");
const mongoose = require("mongoose");
const db = require("./index.js");

const getProducts = (req, cb) => {
  Schemas.Product.find({}, (err, productData) => {
    if (err) throw err;
    console.log(productData);
    cb(productData);
  }).limit(10);
};

const getProduct = (req, cb) => {
  const id = Number(req.product_id);

  Schemas.Product.find({ id: req.product_id }, (err, productData) => {
    if (err) throw err;
    Schemas.groupFeatures.findById(id, (err, featureData) => {
      if (err) throw err;
      if (!featureData || !productData) {
        cb("not a valid product id");
        return;
      }
      productData.features = featureData.features;

      const obj = {
        id: productData[0].id,
        name: productData[0].name,
        slogan: productData[0].slogan,
        description: productData[0].description,
        category: productData[0].category,
        default_price: productData[0].default_price,
        features: featureData.features,
      };
      cb(obj);
    });
  });
};

const getProductStyles = (req, cb) => {
  const results = [];
  const id = Number(req.product_id);
  Schemas.groupedStyles.findById(id, (err, styleData) => {
    if (err) throw err;
    styleData.results.sort((a, b) => {
      return a.style_id - b.style_id;
    });
    for (const style of styleData.results) {
      console.log('style', style)
      const skusObj = {};
      if (style.skus.length > 1) {

        for (const sku of style.skus) {

          skusObj[sku.id] = {
            quantity: sku.quantity,
            size: sku.size
          }
        }
      }
      const obj = {
        style_id: style.style_id,
        name: style.name,
        original_price: style.original_price,
        sale_price: style.sale_price,
        "default?": style.default_style,
        photos: style.photos.related,
        skus: skusObj
      };
      results.push(obj);
    }
    const returnObj = {
      product_id: "" + id,
      results: results,
    };

    cb(returnObj);
  });
};

module.exports = {
  getProducts,
  getProduct,
  getProductStyles,
};

// // }
// \

//     //console.log('styleData', styleData)
//     for (const style of styleData.styles) {
//       Schemas.groupedPhotos
//         .findById(style.style_id )
//         .exec((err, photoData) => {
//           if (err) throw err;
//           Schemas.groupedSkus
//             .findById( style.style_id )
//             .exec((err, skusData) => {
//               if (err) throw err;
//               // console.log('style', style)
//               // console.log('skusData', skusData)
//               // console.log('photoData', photoData)

//               const obj = {
//                 style_id: style.style_id,
//                 name: style.name,
//                 original_price: style.original_price,
//                 sale_price: style.sale_price,
//                 default: style.default_style,
//                 photos: photoData.related,
//                 skus: skusData.related,
//               };
//               results.push(obj);
//               if(results.length === styleData.styles.length){
//                 console.log(obj)
//                 cb(results)
//               }

//             });
//         });

//     }
//     console.log("line 65", results);
