'use strict';

var mongoose = require('mongoose'),
    Sweepstake = mongoose.model('Sweepstake'),
    Strategy = mongoose.model('Strategy'),
    Vote = mongoose.model('Vote'),
    moment = require('moment');

module.exports = function(kue, jobs) {

  var create_process = function(job, done) {

    var time = moment(job.data.init_at).millisecond();
    var _job = jobs.create('init_sweepstake', {
      id: job.data.id,
      sweepstakes: job.data.sweepstakes
    })
    .delay(time)
    .priority('high')
    .save(function() {
      Sweepstake.findById(job.data.id, function(err, sweepstake) {
        if (!err) {

          sweepstake.job_id = _job.id;
          sweepstake.save();

        };
      });
    });

  };

  var init_process = function(job, done) {

    var sweepstake_ids = [];
    if (job.data.type === 'MATCH') {
      sweepstake_ids.push(job.data.id);
    };
    if (job.data.type === 'GROUP') {
      sweepstake_ids = job.data.sweepstakes;
    };

    Strategy.selectStrategyForDraw(sweepstake_ids, function(err, ids) {
      if (!err) {

        Sweepstake.initProcess(job.data.id, function(err) {

          // SOCKET.IO PARA CAMBIAR A LA TOMBOLA

          Strategy.getContestant(ids, function(err, contestants) {
            if (!err) {

              jobs.create('sweepstake_init', { users: this.contestants }).priority('high').save();

              // SE CREA EL FINALLY JOB, DANDOLE UN DELAY DE 15 MIN
              jobs.create('finally_sweepstake', {
                ids: ids
              })
              .delay(900000)
              .priority('high')
              .save();

            };
          });

        });

      };
    });

    done();
  };

  var finally_process = function(job, done) {

    Vote.winByMatch(job.data.ids, job.data.sweepstake_id);

    done();
  };

  var remove_process = function(job, done) {
    Sweepstake.findById(job.data.id)
      .select('job_id')
      .exec(function(err, sweepstake) {
        if (!err) {

          kue.Job.get(sweepstake.job_id, function(err, job) {
            if (!err) {
              job.remove();
            };
          });

        };
      });
  };

  jobs.process('create_sweepstake', 50, create_process);
  jobs.process('init_sweepstake', 50, init_process);
  jobs.process('finally_sweepstake', 50, finally_process);
  jobs.process('remove_sweepstake', 50, remove_process);

};



