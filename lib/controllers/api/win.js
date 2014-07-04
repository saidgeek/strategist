'use strict';

var mongoose = require('mongoose'),
    Win = mongoose.model('Win'),
    Strategy = mongoose.model('Strategy'),
    Sweepstake = mongoose.model('Sweepstake');

exports.show = function(req, res) {

  if (!req.params.id) return res.json(204, { err: 'Win id data empty.' });  

  Win.findById(req.params.id)
    .populate('user')
    .populate('sweepstake')
    .populate('vote')
    .exec(function(err, win) {
      if (err) return res.json(500, err);
      return res.json(200, win);
    });

};

exports.select = function(req, res) {

  if (!req.params.sweepstake_id) return res.json(204, { err: 'Win id data empty.' });
  if (!req.params.user_id) return res.json(204, { err: 'Win id data empty.' });

  console.log('req.params.sweepstake_id, req.params.user_id:', req.params.sweepstake_id, req.params.user_id);

  Sweepstake.findById(req.params.sweepstake_id, function(err, sweepstake) {
    if (err) return res.json(500, err);

    console.log('sweepstake:', sweepstake);

    Strategy.find({ sweepstake: req.params.sweepstake_id, user: req.params.user_id })
      .limit(1)
      .sort('votes.count')
      .exec(function(err, strategies) {
        if (err) return res.json(500, err);

        console.log('strategies:', strategies);

        var win = Win();
        win.user = strategies[0].user;
        win.sweepstake = strategies[0].sweepstake;
        win.vote = strategies[0].votes.ref[0].vote;

        win.save(function(err) {
          if (err) return res.json(500, err);

          sweepstake.is_closed = true;
          sweepstake.winner = win._id;
          
          sweepstake.save(function(err) {
            if (err) return res.json(500, err);
            return res.json(200, win);
          });

        });

      });
  });


};