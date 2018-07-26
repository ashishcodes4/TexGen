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

// Router.post('/add', (req, res) => {
//   const errors = {};
//   let newProduct = {};
//   let features = {};
//   if (req.body.name) newProduct.name = req.body.name;
//   newProduct.feature = [];
//   if (req.body.features !== 'undefined') {
//     features = req.body.features.split(',');
//   }
//   newProduct.features.unshift(features);
//   new Product(newProduct)
//     .save()
//     .then(product => {
//       res.json(product);
//     })
//     .catch(err => {
//       errors.error = err;
//       res.status(400).json(errors);
//     });
// });

Router.post('/add', (req, res) => {
  const str = req.body.features;
  const features = str.split(',');
  console.log(str);
  console.log(features);
  const newProd = {
    name: req.body.name,
    features: features
  };
  console.log(newProd);

  // Add to prod array
  new Product(newProd)
    .save()
    .then(product => {
      res.status(200).json(product);
    })
    .catch(err => {
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

// })    testing route for adding products, please don't comment out.

//Export Router Module
module.exports = Router;
