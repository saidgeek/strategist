'use strict';

var Log = require('mongoose').model('Log');

module.exports = function(kue, jobs) {

  var log_process = function(job, done) {

    var log = new Log();

    log.user = { type: Types.ObjectId, ref: 'user' },
    log.action = job.data.action;
    log.referre = {
      id: job.data.referer.id,
      class_name: job.data.referer.class_name
    };

    log.save();

    done();
  };

  jobs.process('log', 50, log_process);

};