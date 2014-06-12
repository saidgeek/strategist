'use strict';

var mongoose = require('mongoose'),
    Vote = mongoose.model('Vote'),
    Strategy = mongoose.model('Strategy'),
    moment = require('moment');

exports.create = function(req, res) {

  if (!req.params.user_id) return res.json(204, { err: 'User id data is empty' });
  if (!req.params.voted_by) return res.json(204, { err: 'User id data is empty' });
  if (!req.params.strategy_id) return res.json(204, { err: 'Strategy id data is empty' });
  if (!req.params.sweepstake_id) return res.json(204, { err: 'Sweepstake id data is empty' });

  Strategy.findById(req.params.strategy_id, function(err, strategy) {
    if (!err) {

      var paso = true;

      for (var i = 0; i < strategy.votes.ref.length; i++) {
        var r = strategy.votes.ref[i];

        var now = moment(Date.now()).format('DD-MM-YYYY');
        var date = moment(r.created_at).format('DD-MM-YYYY');

        if (now === date) {
          paso = false;
          break;
        };

      };

      if (paso) {

        var vote = new Vote();
        vote.user = req.params.user_id;
        vote.voted_by = req.params.voted_by;
        vote.sweepstake = req.params.sweepstake_id;
        vote.strategy = req.params.strategy_id;

        vote.save(function(err) {
          if (err) return res.json(500, err);
          res.json(200, true);
        });

      } else {
        // nada
        res.json(200, false);
      };

    };
  });

};