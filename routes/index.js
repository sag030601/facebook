var express = require('express');
var router = express.Router();
const usermodel = require('./users')




//-----------------this file require when you want to login logout register work ----

const passport = require('passport');
const LocalStrategy = require("passport-local");

passport.use(new LocalStrategy(usermodel.authenticate()));




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/register', function (req, res) {
  // Create a new user instance with actual values from the request body
  var userdata = new usermodel({
    username: req.body.username,
    password: req.body.password,
    
  });

// //   // Register the user using the passport-local-mongoose register method
  usermodel.register(userdata, req.body.password, function (err, registeredUser) {
    if (err) {
      console.error(err);
      return res.redirect('/register'); // Handle registration error, redirect to the home page for simplicity
    }

// //     // Authenticate the user after successful registration
    passport.authenticate('local')(req, res, function () {
      res.redirect('/');
    });
  });
});





module.exports = router;
