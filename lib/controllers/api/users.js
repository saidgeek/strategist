'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    passport = require('passport');

/**
 * Create user
 */
exports.create = function (req, res, next) {
  var newUser = new User(req.body);
  newUser.provider = 'local';
  newUser.save(function(err) {
    if (err) return res.json(400, err);
    
    req.logIn(newUser, function(err) {
      if (err) return next(err);

      return res.json(req.user.userInfo);
    });
  });
};

/**
 *  Get profile of specified user
 */
exports.show = function (req, res, next) {
  var userId = req.params.id;

  User.findById(userId, function (err, user) {
    if (err) return next(err);
    if (!user) return res.send(404);

    res.send({ profile: user.profile });
  });
};

/**
 * Change password
 */
exports.changePassword = function(req, res, next) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  User.findById(userId, function (err, user) {
    if(user.authenticate(oldPass)) {
      user.password = newPass;
      user.save(function(err) {
        if (err) return res.send(400);

        res.send(200);
      });
    } else {
      res.send(403);
    }
  });
};

exports.accept_terms = function(req, res) {
  if (!req.params.id) return res.json(404, 'No se especifica usuario.');
  if (!req.body.user) return res.json(404, 'Datos de usuario en blanco.');
  if (!req.body.user.accept_terms) return res.json(404, 'No se a aceptado terminos.');

  User.findById(req.params.id, function(err, user) {
    if (err) return res.json(404, err);
    if (!user) return res.json(404, 'Usuario no existe.');
    
    user.accept_terms = req.body.user.accept_terms;

    user.save(function(err) {
      if (err) return res.json(404, err);
      return res.json(200, user.userInfo);
    });

  });

};

/**
 * Get current user
 */
exports.me = function(req, res) {
  res.json(req.user || null);
};