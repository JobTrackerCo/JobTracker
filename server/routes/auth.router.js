const express = require('express');
const router = express.Router();
const passport = require('passport')

router.get('/linkedin',
  passport.authenticate('linkedin'),
  function(req, res){
    // The request will be redirected to LinkedIn for authentication, so this
    // function will not be called.
  });

router.get('/linkedin/callback', passport.authenticate('linkedin', {
    successRedirect: 'http://localhost:3000/#/dashboard',
    failureRedirect: '/'
}));

module.exports = router