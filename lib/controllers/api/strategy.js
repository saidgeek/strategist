'use strict';

var mongoose = require('mongoose'),
    Strategy = mongoose.model('Strategy'),
    User = mongoose.model('User');

var specialChars = [
  {val:"a",let:"áàãâä"},
  {val:"e",let:"éèêë"},
  {val:"i",let:"íìîï"},
  {val:"o",let:"óòõôö"},
  {val:"u",let:"úùûü"},
  {val:"c",let:"ç"},
  {val:"A",let:"ÁÀÃÂÄ"},
  {val:"E",let:"ÉÈÊË"},
  {val:"I",let:"ÍÌÎÏ"},
  {val:"O",let:"ÓÒÕÔÖ"},
  {val:"U",let:"ÚÙÛÜ"},
  {val:"C",let:"Ç"},
  {val:"",let:"?!()"}
]

var replaceSpecialChars = function(str) {
    var regex;
    var returnString = str

    for (var i = 0; i < specialChars.length; i++) {
      specialChars[i]
      regex = new RegExp("["+specialChars[i].let+"]", "g");
      returnString = returnString.replace(regex, specialChars[i].val);
      regex = null;
    };

    return returnString.toLowerCase();
};

exports.index = function(req, res) {

  var _sort = "-created_at -_id";
  var _query = "{";

  if (typeof(req.params.sort_by) !== 'undefined') {

    if (req.params.sort_by === 'votes') {
      _sort = '-votes.count created_at _id';
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

  var perPage = 10;
  if (typeof(req.query.perPage) !== 'undefined') {
    perPage = req.query.perPage;
  };
  var page = 0;
  if (typeof(req.query.page) !== 'undeined') {
    page = req.query.page;
  };

  Strategy.find(JSON.parse(_query))
    .sort(_sort)
    .populate('user')
    .populate('sweepstake')
    .limit(perPage)
    .skip(perPage * page)
    .exec(function(err, strategies) {

      if (err) return res.json(500, err);
      if (!strategies) return res.json(404, { err: 'Strategies not exists' } );
      
      Strategy.count(JSON.parse(_query)).exec(function(err, count) {
        if (!err) {
          return res.json(200, {strategies: strategies, total_items: count});
        };
      });
      

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
    .sort('-votes.count')
    .populate({
      path: 'user',
      match: { _id: req.params.user_id }
    })
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

exports.voted = function(req, res) {

  if (!req.params.user_id) return res.json(204, { err: 'User data id is empty' });

  var start = new Date(new Date().setHours(0,0,0,0));
  var end = new Date();
  end.setDate(start.getDate()+1);
  end = new Date(end.setHours(0,0,0,0));


  console.log('start:', start, 'end:', end);

  Strategy.find({ 'votes.ref.user': req.params.user_id, 'votes.ref.created_at': {"$gte": start, "$lt": end} })
    .exec(function(err, strategies) {
      if (err) return res.json(500, err);

      var ids = [];

      for (var i = 0; i < strategies.length; i++) {
        ids.push(strategies[i]._id)
      };

      return res.json(200, {ids: ids});

    });

};

exports.create = function(req, res) {

  if (!req.body.strategy) return res.json(204, { err: 'Strategy data is empty' });
  if (!req.body.strategy.user) return res.json(204, { err: 'Strategy data user is empty' });
  if (!req.body.strategy.sweepstake) return res.json(204, { err: 'Strategy data sweepstake is empty' });

  var _s = req.body.strategy;

  User.findById(req.body.strategy.user)
    .exec(function(err, user) {
      if (err) return res.json(500, err);

      var strategy = new Strategy();

      strategy.user = _s.user;
      strategy.sweepstake = _s.sweepstake;
      strategy.content = _s.content.replace(/\s/g, '+');
      strategy.search = replaceSpecialChars(user.name+'+'+user.email+'+'+user.twitter_screen_name+'+'+strategy.content);

      strategy.save(function(err) {
        if (err) return res.json(500, err);
        // NO DEVUELVO STRATEGY YA QUE NO SOCKET.IO SE ARA EL REFERSCO EN LA PAGINA
        return res.json(200);
      });

    });

};

exports.search = function(req, res) {

  if (!req.params.q) return res.json(204, { err: 'Q data is empty' });

  var _sort = "-created_at -_id";

  var referer = req.headers.referer.split('/')
  if (referer.indexOf('tabla-de-posiciones') > -1) {
    _sort = '-votes.count created_at _id';
  };

  var q = replaceSpecialChars(req.params.q);

  var re = new RegExp(q, 'g');

  Strategy.find({ close: false, published: true })
    .where({ search: { $regex: re } })
    .populate('user')
    .populate('sweepstake')
    .sort(_sort)
    .exec(function(err, strategies) {
      if (err) return res.json(500, err);

      return res.json(200, strategies);
    });

};