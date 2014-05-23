'use strict';

var Library = require('mongoose').model('Library');

exports.index = function(req, res) {
  Library.find({})
    .sort('-created_at, -_id')
    .exec(function(err, libreries) {

      if (err) return res.json(404, err);
      if (!libreries) return res.json(304, 'No existen librerias');

      return res.json(200, libreries);

    });
};

exports.create = function(req, res) {
  if (!req.body.library) res.json(404, 'No existen datos para crear la libreria');
  
  var library = new Library();
  library.comparison = req.body.library.comparison.replace(/\s+/g, '+');
  library.created_by = typeof(req.session.passport.user) !== 'undefined' ?  req.session.passport.user : null

  library.save(function(err) {
    if (err) return res.json(304, 'Error al momento de guardar la nueva libreria.');
    return res.json(200, library);
  });
};

exports.remove = function(req, res) {
  console.log('req.params:', req.params);
  console.log('req.body:', req.body);
  console.log('req.query:', req.query);
  if (!req.params.id) return res.json(404, 'Sin id de comparación.');

  Library.findById(req.params.id, function(err, library) {
    if (err) return res.json(404, err);
    if (!library) return res.json(304, 'No existen la libreria');

    library.remove(function(err) {
      if (err) return res.json(404, err);
      return res.json(200, true);
    });

  });
};