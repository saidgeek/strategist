'use strict';

var path = require('path'),
    config = require('../config/config');


exports.config = function(req, res) {

  res.json(200, config);

};

/**
 * Send partial, or 404 if it doesn't exist
 */
exports.partials = function(req, res) {
  var stripped = req.url.split('.')[0];
  var requestedView = path.join('./', stripped);
  res.render(requestedView, function(err, html) {
    if(err) {
      console.log("Error rendering partial '" + requestedView + "'\n", err);
      res.status(404);
      res.send(404);
    } else {
      res.send(html);
    }
  });
};

exports.directives = function(req, res) {
  var stripped = req.url.split('.')[0];
  var requestedView = path.join('./', stripped);
  res.render(requestedView, function(err, html) {
    if(err) {
      console.log("Error rendering directive '" + requestedView + "'\n", err);
      res.status(404);
      res.send(404);
    } else {
      res.send(html);
    }
  });
};

/**
 * Send our single page app
 */
exports.index = function(req, res) {
  res.render('index');
};

exports.mobile = function(req, res) {
  res.render('mobile');
};

exports.admin = function(req, res) {
  res.render('admin');
};
