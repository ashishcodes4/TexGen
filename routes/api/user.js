const express = require('express');
const Router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const gravatar = require('gravatar');

//Load user Model
const User = require('../../models/User');

//Load Register input valdation
const validateRegisterInput = require('../../Validator/register');
//Load Login input validation
const validateLoginInput = require('../../Validator/login');

//@Route    /api/user/test
//@Desc     testing ground for user route
//@Access   Public

Router.get('/test', (req, res) => {
  res.json({ msg: 'This is the test page for user profile' });
});

//@Route    /api/user/resgister
//@Desc     register user in database
//@Access   Public
Router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = 'email already exists';
      res.status(400).json({ errors });
    } else {
      const avatar = gravatar.url('req.body.email', {
        s: 200, //size
        r: 'pg', //rating
        d: 'mm', //default
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        password2: req.body.password2,
        avatar: avatar,
        username: req.body.username,
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then(user => {
            res.json(user);
          });
        });
      });
    }
  });
});

//@Route    /api/user/login
//@Desc     get any user logged in
//@Access   Private

Router.post('/login', (req, res) => {
  // Validate Input...
  const { isValid, errors } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // check if user exists
  User.findOne({ email }).then(user => {
    //check for user
    if (!user) {
      errors.email = 'email not found';
      return res.status(404).json(errors);
    }
    //check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //User matched.....
        const payload = {
          id: user.id,
          name: user.name,
          avatar: user.avatar,
          username: user.username,
        }; // JWT Payload

        //Sign Token....
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer  ' + token,
            });
          }
        );
      } else {
        errors.password = 'password is incorrect';
        return res.status(404).json(errors);
      }
    });
  });
});

module.exports = Router;
