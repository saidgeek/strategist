'use strict';

var fs = require('fs'),
    path = require('path');

module.exports = function(app, kue, jobs) {

  jobs.promote();

  var jobs_path = path.join(__dirname, '../jobs');
  fs.readdirSync(jobs_path).forEach(function(file) {
    if (/(.*)\.(js$|coffee$)/.test(file)) {
      require(jobs_path + '/' + file)(kue, jobs);
    }
  });

  if (app.get('env') === 'development') {
    kue.app.listen(3001);
    console.log('kue server monitor satret port 3001');
  };

  // global.kue = kue;
  global.jobs = jobs;

};