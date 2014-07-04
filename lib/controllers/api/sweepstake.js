'use strict';

var Sweepstake = require('mongoose').model('Sweepstake');

exports.index = function(req, res) {
  Sweepstake.find({})
    .populate('sweepstakes')
    .sort('_id winner')
    .exec(function(err, sweepstakes) {
      if (err) return res.json(500, err);
      return res.json(200, sweepstakes);
    });
};

exports.show = function(req, res) {

  if (!req.params.id) return res.json(204, { err: 'Sweepstake id data empty.' });  

  Sweepstake.findById(req.params.id, function(err, sweepstake) {
    if (err) return res.json(500, err);
    return res.json(200, sweepstake);
  });

};

exports.current = function(req, res) {

  Sweepstake.findOne({ is_active: true } ,function(err, sweepstake) {
    if (err) return res.json(500, err);
    if (!sweepstake) res.json(500, { errr: 'Sweepstake not exist.' });
    return res.json(200, sweepstake);
  });

};

exports.create = function(req, res) {

  if (!req.body.sweepstake) return res.json(204, { err: 'Sweepstake data empty.' });

  var sweepstake = new Sweepstake();
  sweepstake.type = req.body.sweepstake.type;
  sweepstake.init_at = req.body.sweepstake.init_at;
  sweepstake.match = req.body.sweepstake.match;
  sweepstake.sweepstakes = req.body.sweepstake.sweepstakes;
  sweepstake.is_active = req.body.sweepstake.is_active;

  sweepstake.save(function(err) {
    if (err) return res.json(500, err);
    return res.json(200, sweepstake);
  });

};

exports.update = function(req, res) {

  if (!req.params.id) return res.json(204, { err: 'Sweepstake id data empty.' });
  if (!req.body.sweepstake) return res.json(204, { err: 'Sweepstake data empty.' });

  Sweepstake.findById(req.params.id, function(err, sweepstake) {
    if (err) return res.json(500, err);
    
    // sweepstake.init_at = req.body.sweepstake.init_at;
    // sweepstake.teams = req.body.sweepstake.teams;
    sweepstake.match = req.body.sweepstake.match;
    sweepstake.sweepstakes = req.body.sweepstake.sweepstakes;

    sweepstake.save(function(err) {
      if (err) return res.json(500, err);
      return res.json(200, sweepstake);
    });
    
  });

};

exports.remove = function(req, res) {

  if (!req.params.id) return res.json(204, { err: 'Sweepstake id data empty.' });

  Sweepstake.findById(req.params.id, function(err, sweepstake) {
    if (err) return res.json(500, err);
    sweepstake.remove(function(err) {
      if (err) return res.json(500, err);
      return res.json(200);
    });
  });

};