'use strict';

var passport = require('passport'),
    User = require('mongoose').model('User'),
    Provider = require('mongoose').model('Provider');

/**
 * Send partial, or 404 if it doesn't exist
 */
exports.cb = function(req, res, next) {
  passport.authenticate('twitter', function(err, user, info) {

    var redirect_url = "/";
    if (err) {
      res.redirect('/');
    };

    if (user && typeof(user.type) !== 'undefined' && user.type === 'TWITTER') {
      User.findById(user.user, function(err, user) {
        req.login(user, function(err) {
          res.redirect('/mi-mejor-tactica/');
        });
      });
    } else {
      if (user) {
        req.login(user, function(err) {
          res.redirect('/mi-mejor-tactica/');
        });
      };
    };

  })(req, res, next);
};