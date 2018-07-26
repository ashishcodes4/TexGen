const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  features: [
    {
      name: {
        type: String
      }
    }
  ]
});

module.exports = Product = mongoose.model('Product', ProductSchema);


