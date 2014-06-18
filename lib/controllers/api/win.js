'use strict';

var Win = require('mongoose').model('Win');

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