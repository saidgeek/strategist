'use strict';

var Strategy = require('mongoose').model('Strategy');

exports.index = function(req, res) {

  var _sort = "";
  var _query = "{";

  if (typeof(req.params.sort_by) !== 'undefined') {

    if (req.params.sort_by === 'votes') {
      _sort = 'votes.count created_at _id';
    };

    if (req.params.sort_by === 'user') {
      _sort = 'user created_at _id';
    };

    if (req.params.sort_by === 'match') {
      _sort = 'match created_at _id';
    };

  };

  if (typeof(req.params.match) !== 'undefined') {
    _query += "match: "+req.params.match;
  };

  _query += "}";

  Strategy.find(_query)
    .sort(_sort)
    .populate('user')
    .populate('match')
    .exec(function(err, strategies) {

      if (err) return res.json(500, err);
      if (!strategies) return res.json(404, { err: 'Strategies not exists' } );

      return res.json(200, strategies);

    });

};

exports.create = function(req, res) {

  if (!req.body.strategy) return res.json(204, { err: 'Strategy data is empty' });
  if (!req.body.strategy.user) return res.json(204, { err: 'Strategy data user is empty' });
  if (!req.body.strategy.match) return res.json(204, { err: 'Strategy data match is empty' });

  var _s = req.body.strategy;

  var strategy = new Strategy();

  strategy.user = _s.user;
  strategy.match = _s.match;
  strategy.content = _s.content;

  strategy.save(function(err) {
    if (err) return res.json(500, err);
    // NO DEVUELVO STRATEGY YA QUE NO SOCKET.IO SE ARA EL REFERSCO EN LA PAGINA
    return res.json(200);
  });

};