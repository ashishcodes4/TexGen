const express = require('express');
const Router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');

//@Route    /api/user/test
//@Desc     testing ground for user route
//@Access   Public

Router.get('/test', (req, res) => {
  res.json({ msg: 'This is the test page for user profile' });
});

Router.post('/register', (req, res) => {});

//@Route    /api/user/login
//@Desc     get any user logged in
//@Access   Private

Router.post(
  '/login',
  passport.authenticate('jwt', { session: false }, (req, res) => {
    const errors = {};
    User.findOne({ user: req.user.id }).then(user => {
      res.json(user);
    });
  })
);

module.exports = Router;
