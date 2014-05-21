'use strict';

var Match = require('mongoose').model('Match');

exports.index = function(req, res) {
  Match.find({})
    .sort('match_at')
    .exec(function(err, match) {

      if (err) return res.json(500, err);
      if (!match) return res.json(404, { err: 'Matches not exists' });

      return res.json(200, match);

    });
};

exports.create = function(req, res) {
  if (!req.body.match) res.json(204, { err: 'Match data is empty' });
  
  var match = new Match();
  match.team_one = req.body.match.team_one
  match.team_two = req.body.match.team_two
  match.match_at = req.body.match.match_at

  match.save(function(err) {
    if (err) return res.json(500, err);
    return res.json(200, match);
  });
};

exports.current = function(req, res) {
  Match.find({})
    .where({ completed: false })
    .sort('match_at')
    .limit(1)
    .exec(function(err, match) {
      if (err) return res.json(500, { err: 'Match not exist' });

      return res.json(200, match[0]);
    });
};

exports.remove = function(req, res) {
  if (!req.params.id) return res.json(204, { err: 'Match id data is empty' });

  Match.findById(req.params.id, function(err, match) {
    if (err) return res.json(500, err);
    if (!match) return res.json(404, { err: 'Match not exist' });

    match.remove(function(err) {
      if (err) return res.json(500, err);
      return res.json(200, true);
    });

  });
};