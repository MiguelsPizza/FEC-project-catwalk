const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = new Schema({//maybe add keyword new
  // _idDB: {
  //   type: Schema.Types.ObjectId,
  //   required: true
  // },
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  slogan: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  default_price: {
    type: String,
    required: true
  },
  features: [{
    feature: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  }],
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
    default: {
      type: Boolean,
      required: true
    },
    photos: {
      thumbnail_url: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    },
    skus: {
      size: {
        quantity: {
          type: Number,
          required: true
        },
        size: {
          type: String,
          required: true
        }
      }
    }
  }]
});

const Product = mongoose.model('Product', ProductSchema);


module.exports = Product