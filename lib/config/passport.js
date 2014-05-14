'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    config = require('../config/config'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    FacebookStrategy = require('passport-facebook').Strategy;

/**
 * Passport configuration
 */
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.findOne({
    _id: id
  }, '-salt -hashedPassword', function(err, user) { // don't ever give out the password or salt
    done(err, user);
  });
});

// add other strategies for more authentication flexibility
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password' // this is the virtual field on the model
  },
  function(email, password, done) {
    User.findOne({
      email: email.toLowerCase()
    }, function(err, user) {
      if (err) return done(err);
      
      if (!user) {
        return done(null, false, {
          message: 'This email is not registered.'
        });
      }
      if (!user.authenticate(password)) {
        return done(null, false, {
          message: 'This password is not correct.'
        });
      }
      return done(null, user);
    });
  }
));

passport.use(new FacebookStrategy({
    clientID: config.facebook.id,
    clientSecret: config.facebook.secret,
    callbackURL: config.facebook.callback
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({ email: profile._json.email }, function(err, user) {
      console.log('err facebook auth:', err, user);
      if (err) return done(err);

      console.log('user:', user);

      if (!user) {

        user = new User();
        user.avatar = 'https://graph.facebook.com/' + profile._json.username + '/picture?type=normal';
        user.first_name = profile._json.first_name;
        user.last_name = profile._json.last_name;
        user.email = profile._json.email;
        user.provider = 'facebook';
        user.facebook = {
          accessToken: accessToken,
          refreshToken: refreshToken,
          profile: profile._json
        }
        
        user.save(function(err) {
          if (err) console.log('error: ' + err)
          return done(err, user);
        });

      } else {

        if (typeof(user.facebook.profile) === 'undefined') {
        
          user.facebook = {
            accessToken: accessToken,
            refreshToken: refreshToken,
            profile: profile._json
          }
          
          user.save();
        };

        return done(err, user);
      };


    });

  }
));



module.exports = passport;
