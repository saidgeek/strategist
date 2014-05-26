'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Provider = mongoose.model('Provider'),
    config = require('../config/config'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    FacebookStrategy = require('passport-facebook').Strategy,
    TwitterStratedy = require('passport-twitter').Strategy;

/**
 * Passport configuration
 */
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.findOne({ '_id': id }, '-salt -hashedPassword')
    .exec(function(err, user) { // don't ever give out the password or salt
      done(err, user);
    });
});

// add other strategies for more authentication flexibility
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password' // this is the virtual field on the model
  },
  function(email, password, done) {

    Provider.findOne({ uid: email })
      .populate('user')
      .exec(function(err, provider) {

        if (err) return done(err);

        if (!provider) {
          return done(null, false, {
            message: 'This email is not registered.'
          });
        };

        if (!provider.user.authenticate(password)) {
          return done(null, false, {
            message: 'This password is not correct.'
          });
        };

        return done(null, provider.user);
      });
  }
));

passport.use(new FacebookStrategy({
    clientID: config.facebook.id,
    clientSecret: config.facebook.secret,
    callbackURL: config.facebook.callback
  },
  function(accessToken, refreshToken, profile, done) {

    Provider.findOne({ uid: profile._json.id })
      .populate('user')
      .exec(function(err, provider) {
        if (err) return done(err);
        var user = new User();
        if (!provider) {
          // CREO EL PROVIDER
          provider = new Provider();
          provider.type = 'FACEBOOK';
          provider.uid = profile._json.id;
          provider.profile = profile._json
          provider.tokens = {
            accessToken: accessToken,
            refreshToken: refreshToken
          }

          user = new User();
          user.avatar = 'https://graph.facebook.com/' + provider.profile.id + '/picture?type=square';
          user.name = provider.profile.name;
          user.facebook.email = provider.profile.email;
          user.provider.facebook = provider._id;
          user.save(function(err) {
            provider.user = user._id;
            provider.save(function(err) {
              if (err) return done(err);
              return done(null, provider);
            });
          });

        } else {
          if (!provider.user) {
            return done(null, provider);
          } else {
            return done(null, provider.user);
          };
        };

      });

  }
));


passport.use(new TwitterStratedy({
    consumerKey: config.twitter.key,
    consumerSecret: config.twitter.secret,
    callbackURL: config.twitter.callback
  },
  function(token, tokenSecret, profile, done) {

    Provider.findOne({ uid: profile._json.id })
    .populate('user')
    .exec(function(err, provider) {
      if (err) return done(err);
      var user = new User();
      if (!provider) {
        provider = new Provider();
        provider.type = 'TWITTER';
        provider.uid = profile._json.id;
        provider.profile = profile._json
        provider.tokens = {
          token: token,
          tokenSecret: tokenSecret
        }

        user = new User();
        user.avatar = provider.profile.profile_image_url_https;
        user.twitter_screen_name = '@'+provider.profile.screen_name
        user.name = provider.profile.name;
        user.provider.twitter = provider._id;
        user.save(function(err) {
          provider.user = user._id;
          provider.save(function(err) {
            if (err) return done(err);
            return done(null, provider);
          });
        });

      } else {

        if (!provider.user) {
          return done(null, provider);
        } else {
          return done(null, provider.user);
        };

      };

    });

  }
));



module.exports = passport;
