const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  features: [
    {
      name: {
        type: String
      },
      categories: [
        {
          name: {
            type: String
          },
          subCategory: [
            {
              name: {
                type: String
              },
              topics: [
                {
                  name: {
                    type: String
                  },
                  text: {
                    type: String
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

module.exports = Products = mongoose.model('products', ProductsSchema);


