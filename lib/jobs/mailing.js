'use strict';

var Email = require('mongoose').model('Email');

module.exports = function(kue, jobs) {

  var user_welcom_process = function(job, done) {

    var user = job.data.user;
    var to = [];

    to.push({
      email: user.email,
      name: user.name,
      type: 'to'
    });

    var data = {
      type: 'user_welcom',
      name: user.name,
      email: user.email,
      link: ''
    };

    Email.build(to, 'Bienvenido a estrategia LG', data);

    done();
  };

  jobs.process('user_welcom', 50, user_welcom_process);

};