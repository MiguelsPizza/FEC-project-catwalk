const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  //maybe add keyword new
  // _idDB: {
  //   type: Schema.Types.ObjectId,
  //   required: true
  // },
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  slogan: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  default_price: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);

const FeaturesSchema = new Schema(
  {
    _id: {
      type: Number,
      required: true,
    },
    product_id: {
      type: Number,
      required: true,
    },
    features: {
      feature: {
        type: String,
        required: true,
      },
      value: {
        type: String,
        required: true,
      },
    },
  },
  { collection: "groupFeatures" }
);
const groupFeatures = mongoose.model("groupFeatures", FeaturesSchema);

const StylesSchema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  results: [{
    style_id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    original_price: {
      type: String,
      required: true
    },
    sale_price: {
      type: String,
      required: true
    },
    default_style: {
      type: Boolean,
      required: true
    },
    photos: {
      _id: {
        type: Number,

      },
      product_id: {
        type: Number,

      },
      related: [{
        thumbnail_url: {
          type: String,

        },
        url: {
          type: String,

        }
      }]

    },
    skus: [{
      id: {
        type: Number,

      },

        quantity: {
          type: Number,

        },
        size: {
          type: String,

        }

    }]
  }]
},
  { collection: "Combined_Styles" }
);

const groupedStyles = mongoose.model("Combined_Styles", StylesSchema, "Combined_Styles");



// const SkusSchema = new Schema(
//   {
//     _id: {
//       type: Number,
//
//     },
//     related: [{
//     size: {
//       type: Number,
//       required: true,
//     },
//     size: {
//       quantity: {
//         type: Number,
//         required: true,
//       },
//     },
//   }],
//   },
//   { collection: "groupedSkus" }
// );

// const groupedSkus = mongoose.model("groupedSkus", SkusSchema);

module.exports = {
  Product,
  groupFeatures,
  groupedStyles

};

//   skus: {
//     size: {
//       quantity: {
//         type: Number,
//         required: true
//       },
//       size: {
//         type: String,
//         required: true
//       }
//     }
//   }
// }]
