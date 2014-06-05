'use strict';

var Log = require('mongoose').model('Log');

module.exports = function(kue, jobs) {

  var log_process = function(job, done) {

    var log = new Log();

    log.action = job.data.action;
    log.data = job.data.data;

    log.save();

    done();
  };

  jobs.process('log', 50, log_process);

};