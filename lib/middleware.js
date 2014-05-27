'use strict';

var uuid = require('node-uuid');

/**
 * Custom middleware used by the application
 */
module.exports = {

  /**
   *  Protect routes on your api from unauthenticated access
   */
  auth: function auth(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.send(401);
  },

  api_auth: function(req, res, next) {

    var isNext = false;

    if (req.headers['token-auth']) {
      var token = req.headers['token-auth'];
      var token_parse = uuid.parse(token);
      if (token_parse.length == 16) {
        for (var i = 0; i < token_parse.length; i++) {
          if (token_parse[i] > 0 && token_parse[i] <= 255) {
            isNext = true;
          } else {
            isNext = false;
          };
        };
      };
    };

    if (isNext) {
      return next();
    };
    res.send(401);
  },

  /**
   * Set a cookie for angular so it knows we have an http session
   */
  setUserCookie: function(req, res, next) {
    if(req.user) {
      res.cookie('user', JSON.stringify(req.user.userInfo));
    }
    next();
  },

  redirectStrategy: function(req, res, next) {
    if (typeof(req.session.passport.user) !== 'undefined') {
      res.redirect('/mi-mejor-tactica/')
    };
    next();
  }

};