'use strict';

var path = require('path'),
    passport = require('passport');

/**
 * Send partial, or 404 if it doesn't exist
 */
exports.cb = function(req, res, next) {
  passport.authenticate('twitter', function(err, user, info) {

    var redirect_url = "/";
    if (err) {
      redirect_url = '/';
    };

    if (user && typeof(user.type) !== 'undefined' && user.type === 'TWITTER') {
      redirect_url = '/auth/twitter/'+user._id+'';
    } else {
      if (user) {
        req.login(user, function(err) {
          redirect_url = '/mi-mejor-tactica/'; // <----
        });
      };
    };

    res.redirect(redirect_url);

  })(req, res, next);
};

exports.email = function(req, res) {
  res.render('twitter', { provider: req.params.id });
};

exports.create = function(req, res) {
  var User = require('mongoose').model('User');
  var Provider = require('mongoose').model('Provider');
  Provider.findById(req.params.id, function(err, provider) {
    if (err) res.redirect('/');
    User.findOne({ email: req.body.email }, function(err, user) {
      if (!user) {
        user = new User();
        user.avatar = provider.profile.profile_image_url_https;
        user.twitter_screen_name = '@'+provider.profile.screen_name
        user.name = provider.profile.name;
        user.email = req.body.email;
        user.save(function(err) {
          provider.user = user._id;
          provider.save(function(err) {
            req.login(user, function(err) {
              res.redirect('/mi-mejor-tactica/'); // <----
            });
          });
        });
      } else {
        provider.user = user._id;
        provider.save(function(err) {
          req.login(user, function(err) {
            res.redirect('/mi-mejor-tactica/'); // <----
          });
        });
      };
    });
  });

};