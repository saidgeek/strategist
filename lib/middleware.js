'use strict';

var uuid = require('node-uuid'),
    User = require('mongoose').model('User'),
    UAParser = require('ua-parser-js');

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

  detect_browser: function(req, res, next) {
    var parser = new UAParser();
    var device = parser.getDevice();
    var browser = parser.getBrowser();

    if (['phone', 'tablet'].indexOf(req.device.type) > -1) {
      if (typeof(req.originalUrl) !== 'undefined' &&  req.originalUrl !== '') {
        res.redirect('/mobile'+req.originalUrl);
      } else {
        res.redirect('/mobile');
      };
    };

    if (['mobile', 'tablet'].indexOf(device.type) < 0 && browser.name === 'IE' && browser.version < 8) {
      res.redirect('/IE7'); 
    };
    return next();
  },

  auth_site: function(req, res, next) {
    if (typeof(req.session.passport.user) !== 'undefined') {
      User.findById(req.session.passport.user, function(err, user) {
        if (!err) {
          if (['ADMIN', 'MODERATOR'].indexOf(user.role) > -1) res.redirect('/admin');
          return next();
        };
      });
    } else {
      return next();
    };
  },

  auth_admin: function(req, res, next) {
    var parser = new UAParser();
    var device = parser.getDevice();
    if (['phone', 'tablet'].indexOf(req.device.type) > -1) res.redirect('/mobile');
    if (typeof(req.session.passport.user) !== 'undefined') {
      User.findById(req.session.passport.user, function(err, user) {
        if (!err) {
          if (['CONTESTANT'].indexOf(user.role) > -1) res.redirect('/');
          return next();
        };
      });
    } else {
      return next();
    };
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