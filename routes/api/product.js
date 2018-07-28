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
  debugger;
  const str = req.body.features;

  const newProd = req.body;
  console.log(newProd);

  // Add to prod array
  new Product(newProd)
    .save()
    .then(product => {
      res.status(200).json(product);
    })
    .catch(err => {
      errors.mongoose = 'Error while saving the new product'
      res.status(400).json(err);
    });
});

// Router.post('/add', (req, res) => {
//   const errors = {}
//   const newProd = {
//     name: req.body.name
//   };
//    newprod.features = [];
//    new Product(newProd).save()
//     .then(product => {
//       res.status(400).json(product);
//     })

// })    testing route for adding products, please don't un-comment out.

//Export Router Module
module.exports = Router;
