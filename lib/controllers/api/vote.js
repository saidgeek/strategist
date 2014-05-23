'use strict';

var Vote = require('mongoose').model('Vote');

exports.create = function(req, res) {

  if (!req.params.user_id) return res.json(204, { err: 'User id data is empty' });
  if (!req.params.strategy_id) return res.json(204, { err: 'Strategy id data is empty' });
  if (!req.params.match_id) return res.json(204, { err: 'Match id data is empty' });

  var vote = new Vote();
  vote.user = req.params.user_id;
  vote.match = req.params.match_id;
  vote.strategy = req.params.strategy_id;

  vote.save(function(err) {
    if (err) return res.json(500, err);
    res.json(200)
  });

};