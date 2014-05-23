'use strict';

var mongoose = require('mongoose'),
  Provider = mongoose.model('Provider'),
  User = mongoose.model('User'),
  Library = mongoose.model('Library');

/**
 * Populate database with sample application data
 */

// Clear old users, then add a default user

User.findOne({ email: 'test@test.com' }, function(err, user) {
  if (!err) {
    if (!user) {

      user = new User();
      user.name = 'Test User';
      user.email = 'test@test.com';
      user.role = 'ADMIN';
      user.password = 'test';

      user.save(function(err) {
        if (!err) {

          Provider.findOne({ uid: 'test@test.com', user: user._id }, function(err, provider) {
            if (!err) {
              if (!provider) {

                provider = new Provider();
                provider.type = 'LOCAL';
                provider.uid = 'test@test.com';
                provider.user = user._id;

                provider.save(function(err) {
                  if (!err) {
                    console.log('finished populating users');
                  };
                });

              };

            };
          });

        };

      });

    };
  };
});

// var comparisons = [
//   'culiao',
//   'culiado',
//   'culeado',
//   'maricón',
//   'maricon',
//   'conchetumadre',
//   'conchetumare',
//   'conchesumare',
//   'conchesumadre',
//   'chucha',
//   'xuxa',
//   'hueón',
//   'hueon',
//   'weon',
//   'weón',
//   'huevón',
//   'huevon',
//   'hijo+de+puta',
//   'Sampaoli+conchetumadre',
//   'Sampaoli+conchesumare',
//   'Sampaoli+conchesumadre',
//   'Sampaoli+conchetumare',
//   'selección+culia',
//   'seleccion+culia',
//   'seleccion+culiá',
//   'Sampaoli+culiao',
//   'Vidal+culiao',
//   'LG+culiao',
//   'LG+es+una+mierda',
//   'LG+son+una+mierda',
//   'LG+valen+callampa',
//   'LG+vale+callampa',
//   'LG+valen+pico',
//   'LG+vale+pico',
//   'LG+una+mierda',
//   'LG+una+caca',
//   'LG+como+la+raja',
//   'LG+como+las+weas',
//   'LG+como+las+hueas',
//   'Alexis+culiao',
//   'concurso+culiao',
//   'concurso+conchetumadre',
//   'concurso+conchetumare',
//   'concurso+conchesumare',
//   'estratega+culiao',
//   'estratega+conchesumadre',
//   'estratega+conchesumare',
//   'estratega+conchetumadre',
//   'estratega+conchetumare '
// ];

// for (var i = 0; i < comparisons.length; i++) {
  
//   var _comparison = comparisons[i];
//   Library.findOneAndUpdate({ comparison: _comparison }, { comparison: _comparison }, { upsert: true }).exec();

// };