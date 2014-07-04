'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Provider = mongoose.model('Provider'),
    Strategy = mongoose.model('Strategy'),
    Sweepstake = mongoose.model('Sweepstake'),
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
exports.show = function (req, res) {
  var userId = req.params.id;

  User.findById(userId, function (err, user) {
    if (err) return res.json(500, err);
    if (!user) return res.json(404);

    res.json(200, user);
  });
};

exports.update = function(req, res) {

  if (!req.params.id) res.json(204, { err: 'User id data empty.' });

  User.findById(req.params.id, function (err, user) {
    if (err) return res.json(500, err);
    if (!user) return res.json(404);

    User.findOne({ email: req.body.user.email }, function(err, user_email) {
      if (err) return res.json(500, err);
      if (user_email) {
        Provider.findById(user.provider[req.body.user._provider.toLowerCase()], function(err, provider) {
          if (!err) {

            if (req.body.user._provider === 'FACEBOOK') user_email.provider.facebook = user.provider.facebook;
            if (req.body.user._provider === 'TWITTER') user_email.provider.twitter = user.provider.twitter;

            user_email.save(function(err) {
              if (err) return res.json(500, err);
              provider.user = user_email._id;
              provider.save(function(err) {
                if (err) return res.json(500, err);
                req.logout();
                user.remove();
                req.login(user_email, function(err) {
                  res.json(200, user_email.userInfo);
                });
              });
            });

          };
        });
      } else {
        user.email = req.body.user.email;
        user.save(function(err) {
          if (err) return res.json(500, err);
          res.json(200, user.userInfo);
        });
      };
    });
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

/**
 * Get current user
 */
exports.me = function(req, res) {
  res.json(req.user || null);
};

exports.contestants = function(req, res) {

  if (!req.params.sweepstake_id) res.json(204, { err: 'Sweepstake id data empty.' });

  Sweepstake.findById(req.params.sweepstake_id)
    .exec(function(err, sweepstake) {
    if (!err) {

      var sweepstake_ids = [];
      if (sweepstake.type === 'GROUP') {
        sweepstake_ids = sweepstake.sweepstakes;
      } else {
        sweepstake_ids.push(sweepstake._id);
      };

      Strategy.find({})
        .where({ sweepstake: { $in: sweepstake_ids } })
        .where({ moderating: false })
        .exec(function(err, strategies) {
          if (!err) {

            var ids = [];
            for (var i = 0; i < strategies.length; i++) {
              if (strategies[i].votes.count > 0) {
                ids.push(strategies[i]._id);
              };
            };

            Strategy.getContestant(ids, function(err, contestants) {

              User.find({ _id: { $in: contestants } }, function(err, contestants) {

                res.json(200, contestants);

              });

            });

            
          };
        });

    };
  });

};