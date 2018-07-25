const express = require('express');
const Router = express.Router();

//Load Product data model
const Product = require('../../models/Product');


//@Route    /api/problem/test
//@Desc     testing ground for user route
//@Access   Public

Router.get('/test', (req, res) => {
  res.json({
    msg: 'Problem test page',
  });
});

//@Route    /api/product/add
//@Desc     add products
//@Access   Public

Router.post('/add', (req, res) => {
  const errors = {};
  const newProduct = new Product ({
    name: req.body.name,
  });
  newProduct.save()
    .then(product => {
      res.status(200).json(product);
    })
    .catch(err => {
      errors.error = err;
      res.status(404).json(errors);
    })
})


//Export Router Module
module.exports = Router;
