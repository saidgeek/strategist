'use strict';

var mongoose = require('mongoose'),
    Vote = mongoose.model('Vote'),
    Strategy = mongoose.model('Strategy'),
    moment = require('moment');

exports.create = function(req, res) {

  if (!req.params.user_id) return res.json(204, { err: 'User id data is empty' });
  if (!req.params.strategy_id) return res.json(204, { err: 'Strategy id data is empty' });
  if (!req.params.sweepstake_id) return res.json(204, { err: 'Sweepstake id data is empty' });

  Strategy.findById(req.params.strategy_id)
    .exec(function(err, strategy) {
      if (err) return res.json(500, err);
      if (!strategy) res.json(404);

      var voted = true;

      for (var i = 0; i < strategy.votes.ref.length; i++) {
        if (strategy.votes.ref[i].user.toString() === req.params.user_id.toString()) {
          var now = moment(Date.now()).format('MM-YYYY');
          var date = moment(strategy.votes.ref[i].created_at).format('DD-MM-YYYY');
          if (now === date) {
            voted = false;
            break;
          };
        };
      };

      if (voted) {

        var vote = new Vote();
        vote.user = req.params.user_id;
        vote.sweepstake = req.params.sweepstake_id;
        vote.strategy = req.params.strategy_id;

        vote.save(function(err) {
          if (err) return res.json(500, err);
          res.json(200, true);
        });

      } else {
        res.json(200, false);
      };

    });

};