const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String
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
          subCategories: [
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

module.exports = Product = mongoose.model('Product', ProductSchema);


