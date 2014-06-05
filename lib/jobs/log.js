'use strict';

var Log = require('mongoose').model('Log');

module.exports = function(kue, jobs) {

  var log_process = function(job, done) {

    var log = new Log();

    log.user = { type: Types.ObjectId, ref: 'user' },
    log.action = job.data.action;
    log.referre = job.data.data;

    log.save();

    done();
  };

  jobs.process('log', 50, log_process);

};