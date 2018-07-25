const express = require('express');
const Router = express.Router();

//Load Profile data model
const Problem = require('../../models/Problem');


//@Route    /api/problem/test
//@Desc     testing ground for user route
//@Access   Public

Router.get('/test', (req, res) => {
  res.json({
    msg: 'Problem test page',
  });
});

//@Route    /api/problem/add
//@Desc     testing ground for user route
//@Access   Public

Router.post('/add', (req, res) => {
  const errors = {};
  
})

//Export Router Module
module.exports = Router;
