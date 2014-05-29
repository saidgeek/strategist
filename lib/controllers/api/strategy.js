'use strict';

var Strategy = require('mongoose').model('Strategy');

exports.index = function(req, res) {

  var _sort = "-created_at -_id";
  var _query = "{";

  if (typeof(req.params.sort_by) !== 'undefined') {

    if (req.params.sort_by === 'votes') {
      _sort = 'votes.count created_at _id';
    };

    if (req.params.sort_by === 'user') {
      _sort = 'user created_at _id';
    };

    if (req.params.sort_by === 'sweepstake') {
      _sort = 'sweepstake created_at _id';
    };

  };

  if (typeof(req.params.sweepstake) !== 'undefined') {
    _query += "\"match\": \""+req.params.sweepstake+"\", ";
  };

  _query += "\"close\": \"false\", \"published\": \"true\" }";

  Strategy.find(JSON.parse(_query))
    .sort(_sort)
    .populate('user')
    .populate('sweepstake')
    .exec(function(err, strategies) {

      if (err) return res.json(500, err);
      if (!strategies) return res.json(404, { err: 'Strategies not exists' } );

      return res.json(200, strategies);

    });

};

exports.last_published = function(req, res) {

  if (!req.params.user_id) return res.json(204, { err: 'User id data empty.' });

  Strategy.find({})
    .sort('-created_at -_id')
    .populate('user')
    .populate({
      path: 'sweepstake',
      match: { is_active: true }
    })
    .where({ user: req.params.user_id, close: false, published: true, moderating: false })
    .limit(1)
    .exec(function(err, strategies) {
      if (err) res.json(500, err);
      res.json(200, strategies[0]);
    });

};

exports.more_votes = function(req, res) {

  if (!req.params.user_id) return res.json(204, { err: 'User id data empty.' });

  Strategy.find({})
    .sort('votes.count')
    .populate('user')
    .populate({
      path: 'sweepstake',
      match: { is_active: true }
    })
    .where({ close: false, published: true, moderationg: false })
    .limit(1)
    .exec(function(err, strategies) {
      if (err) res.json(500, err);
      res.json(200, strategies[0]);
    });

};

exports.moderate = function(req, res) {

  Strategy.find({})
    .sort('-created_at -_id')
    .populate('user')
    .populate({
      path: 'sweepstake',
      match: { is_active: true }
    })
    .where({ moderating: true, 'moderate.rejected': false })
    .exec(function(err, strategies) {
      if (err) res.json(500, err);
      if (!strategies) res.json(404, { err: 'Strategies not exist' });
      res.json(200, strategies);
    });
};

exports.decision = function(req, res) {
  if (!req.params.id) res.json(204, { err: 'Strategy id data empty.' });
  if (!req.params.decision) res.json(204, { err: 'Strategy decision data empty.' });

  Strategy.findById(req.params.id, function(err, strategy) {
    if (err) res.json(500, err);
    
    if (req.params.decision === 'approved') {
      strategy.published = true;
      strategy.moderating = false;
    };
    
    strategy.moderate[req.params.decision] = true;
    strategy.save(function(err) {
      if (err) res.json(500, err);
      res.json(200, strategy);
    });
  });
};

exports.show = function(req, res) {

  if (!req.params.id) return res.json(204, { err: 'Strategy id data is empty' });

  Strategy.findById(req.params.id)
    .populate('user')
    .populate('sweepstake')
    .exec(function(err, strategy) {
      if (err) return res.json(500, err);
      return res.json(200, strategy);
    });

};

exports.create = function(req, res) {

  if (!req.body.strategy) return res.json(204, { err: 'Strategy data is empty' });
  if (!req.body.strategy.user) return res.json(204, { err: 'Strategy data user is empty' });
  if (!req.body.strategy.sweepstake) return res.json(204, { err: 'Strategy data sweepstake is empty' });

  var _s = req.body.strategy;

  var strategy = new Strategy();

  strategy.user = _s.user;
  strategy.sweepstake = _s.sweepstake;
  strategy.content = _s.content.replace(/\s/g, '+');

  strategy.save(function(err) {
    if (err) return res.json(500, err);
    // NO DEVUELVO STRATEGY YA QUE NO SOCKET.IO SE ARA EL REFERSCO EN LA PAGINA
    return res.json(200);
  });

};