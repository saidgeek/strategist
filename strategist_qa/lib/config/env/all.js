'use strict';

var path = require('path');

var rootPath = path.normalize(__dirname + '/../../..');

module.exports = {
  root: rootPath,
  port: process.env.PORT || 9000,
  forks: process.env.PROC || 1,
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  }
};