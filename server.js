'use strict';

var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    mongoose = require('mongoose'),
    mandrill = require('mandrill-api/mandrill'),
    io = require('socket.io');


/**
 * Main application file
 */

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./lib/config/config');
var db = mongoose.connect(config.mongo.uri, config.mongo.options);

// Bootstrap models
var modelsPath = path.join(__dirname, 'lib/models');
fs.readdirSync(modelsPath).forEach(function (file) {
  if (/(.*)\.(js$|coffee$)/.test(file)) {
    require(modelsPath + '/' + file);
  }
});

// Populate empty DB with sample data
require('./lib/config/dummydata');

// Passport Configuration
var passport = require('./lib/config/passport');

var app = express(),
    http = require('http'),
    server = http.createServer(app);
// socket.io
require('./lib/config/socket.io')(io, server);
// Setup Express
require('./lib/config/express')(app);
require('./lib/routes')(app, passport);

// starts mandrill
require('./lib/config/mandrill')(mandrill, config.mandrill);
// starts jobs
require('./lib/config/kue')(app, config);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %s:%d, in %s mode', config.ip, config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;
