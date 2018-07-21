const express = require('express');
const Router = express.Router();

//@Route    /api/problem/test
//@Desc     testing ground for user route
//@Access   Public

Router.get('/test', (req, res) => {
  res.json({
    msg: 'Problem test page',
  });
});

//@Route    /api/problem/content:issue
//@Desc     testing ground for user route
//@Access   Public

//Export Router Module
module.exports = Router;
