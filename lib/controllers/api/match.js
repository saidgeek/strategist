'use strict';

var Match = require('mongoose').model('Match');

exports.index = function(req, res) {
  Match.find({})
    .sort('match_at')
    .exec(function(err, match) {

      if (err) return res.json(404, err);
      if (!match) return res.json(304, 'No existen partidos');

      return res.json(200, match);

    });
};

exports.create = function(req, res) {
  if (!req.body.match) res.json(404, 'No existen datos para crear el partido');
  
  var match = new Match();
  match.team_one = req.body.match.team_one
  match.team_two = req.body.match.team_two
  match.match_at = req.body.match.match_at

  match.save(function(err) {
    if (err) return res.json(304, 'Error al momento de guardar un nuevo partido.');
    return res.json(200, match);
  });
};

// exports.remove = function(req, res) {
//   console.log('req.params:', req.params);
//   console.log('req.body:', req.body);
//   console.log('req.query:', req.query);
//   if (!req.params.id) return res.json(404, 'Sin id de comparación.');

//   Library.findById(req.params.id, function(err, library) {
//     if (err) return res.json(404, err);
//     if (!library) return res.json(304, 'No existen la libreria');

//     library.remove(function(err) {
//       if (err) return res.json(404, err);
//       return res.json(200, true);
//     });

//   });
// };