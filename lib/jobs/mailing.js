'use strict';

var mongoose = require('mongoose'),
    Email = mongoose.model('Email'),
    User = mongoose.model('User'),
    Sweepstake = mongoose.model('Sweepstake'),
    moment = require('moment');

module.exports = function(kue, jobs) {

  var user_welcome_process = function(job, done) {

    Sweepstake.current(function(err, sweepstake) {
      if (!err) {

        User.findById(job.data.user, function(err, user) {
          if (!err) {

            var to = [];

            to.push({
              email: user.email,
              name: user.name,
              type: 'to'
            });

            var data = {
              type: 'user_welcome',
              logo: global.host+'/images/mimejortactica-logo.png',
              title: 'Bienvenido a Mi mejor táctica',
              user: {
                name: user.name
              },
              sweepstake: {
                date: moment(sweepstake.init_at).format("D/M/YYYY HH:mm")
              },
              link: {
                strategy: global.host+'/mi-mejor-tactica/'
              }
            };

            Email.build(to, 'Bienvenido a Mi mejor táctica', data);

            done();

          };
        });

      };
    });

  };

  var strategy_publish_process = function(job, done) {

    Sweepstake.current(function(err, sweepstake) {
      if (!err) {

        User.findById(job.data.user, function(err, user) {
          if (!err) {

            var to = [];

            to.push({
              email: user.email,
              name: user.name,
              type: 'to'
            });

            var data = {
              type: 'strategy_publish',
              logo: global.host+'/images/mimejortactica-logo.png',
              title: '¡Comienza tu participación en el deporte más lindo del mundo!',
              user: {
                name: user.name
              },
              sweepstake: {
                date: moment(sweepstake.init_at).format("D/M/YYYY HH:mm")
              },
              link: {
                positions: global.host+'/tabla-de-posiciones/'
              }
            };

            Email.build(to, '¡Comienza tu participación en el deporte más lindo del mundo!', data);

            done();

          };
        });

      };
    });

  };

  var strategy_moderate_process = function(job, done) {

    Sweepstake.current(function(err, sweepstake) {
      if (!err) {

        User.findById(job.data.user, function(err, user) {
          if (!err) {

            var to = [];

            to.push({
              email: user.email,
              name: user.name,
              type: 'to'
            });

            var data = {
              type: 'strategy_moderate',
              logo: global.host+'/images/mimejortactica-logo.png',
              title: 'Alto, ¡off side!',
              user: {
                name: user.name
              },
              sweepstake: {
                date: moment(sweepstake.init_at).format("D/M/YYYY HH:mm")
              },
              link: {
                terms: global.host+'/terms',
                strategy: global.host+'/mi-mejor-tactica/'
              }
            };

            Email.build(to, 'Alto, ¡off side!', data);

            done();
 
          };
        });

      };
    });

  };

  var strategy_accepted_process = function(job, done) {

    Sweepstake.current(function(err, sweepstake) {
      if (!err) {

        User.findById(job.data.user, function(err, user) {
          if (!err) {

            var to = [];

            to.push({
              email: user.email,
              name: user.name,
              type: 'to'
            });

            var data = {
              type: 'strategy_accepted',
              logo: global.host+'/images/mimejortactica-logo.png',
              title: 'No hay falta, ¡el juego sigue!',
              user: {
                name: user.name
              },
              sweepstake: {
                date: moment(sweepstake.init_at).format("D/M/YYYY HH:mm")
              },
              link: {
                votes: global.host+'/tacticas/'
              }
            };

            Email.build(to, 'No hay falta, ¡el juego sigue!', data);

            done();
 
          };
        });

      };
    });

  };

  var strategy_rejected_process = function(job, done) {

    Sweepstake.current(function(err, sweepstake) {
      if (!err) {

        User.findById(job.data.user, function(err, user) {
          if (!err) {

            var to = [];

            to.push({
              email: user.email,
              name: user.name,
              type: 'to'
            });

            var data = {
              type: 'strategy_rejected',
              logo: global.host+'/images/mimejortactica-logo.png',
              title: 'Falta, ¡prueba otra táctica!',
              user: {
                name: user.name
              },
              sweepstake: {
                date: moment(sweepstake.init_at).format("D/M/YYYY HH:mm")
              },
              link: {
                terms: global.host+'/terms',
                strategy: global.host+'/mi-mejor-tactica/'
              }
            };

            Email.build(to, 'Falta, ¡prueba otra táctica!', data);

            done();
 
          };
        });

      };
    });

  };

  var sweepstake_init_process = function(job, done) {

    Sweepstake.findById(job.data.sweepstake_id, function(err, sweepstake) {
      if (!err) {
        Sweepstake.hasNext(function(err, next_sweepstake) {
          if (!err) {

            User.find({ _id: { $in: job.data.users } }, function(err, users) {
              if (!err) {

                var next_date = false
                if (next_sweepstake) next_date = moment(next_sweepstake.init_at).format("D/M/YYYY HH:mm");

                for (var i = 0; i < users.length; i++) {
                  var to = [];
                  to.push({
                    email:  users[i].email,
                    name:  users[i].name,
                    type: 'to'
                  });

                  var data = {
                    type: 'sweepstake_init',
                    logo: global.host+'/images/mimejortactica-logo.png',
                    title: 'Ahora se define todo, ¡sólo habrá un vencedor!',
                    user: {
                      name: users[i].name
                    },
                    sweepstake: {
                      date: moment(sweepstake.init_at).format("D/M/YYYY HH:mm"),
                      next: next_date
                    },
                    link: {
                      sweepstake: global.host+'/ganadores/'
                    }
                  };

                  Email.build(to, 'Ahora se define todo, ¡sólo habrá un vencedor!', data);

                };

                done();
 
              };
            });

          };
        });

      };
    });

  };

  jobs.process('user_welcome', 50, user_welcome_process);
  jobs.process('strategy_publish', 50, strategy_publish_process);
  jobs.process('strategy_moderate', 50, strategy_moderate_process);
  jobs.process('strategy_accepted', 50, strategy_accepted_process);
  jobs.process('strategy_rejected', 50, strategy_rejected_process);
  jobs.process('sweepstake_init', 50, sweepstake_init_process);

};

