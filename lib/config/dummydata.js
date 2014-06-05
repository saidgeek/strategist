'use strict';

var mongoose = require('mongoose'),
  Provider = mongoose.model('Provider'),
  User = mongoose.model('User'),
  Library = mongoose.model('Library'),
  Token = mongoose.model('Token');

/**
 * Populate database with sample application data
 */

// Clear old users, then add a default user

User.findOne({ email: 'admin@admin.com' }, function(err, user) {
  if (!err) {
    if (!user) {

      user = new User();
      user.name = 'Test User';
      user.email = 'admin@admin.com';
      user.role = 'ADMIN';
      user.password = 'admin';

      user.save(function(err) {
        if (!err) {

          Provider.findOne({ uid: 'admin@admin.com', user: user._id }, function(err, provider) {
            if (!err) {
              if (!provider) {

                provider = new Provider();
                provider.type = 'LOCAL';
                provider.uid = 'admin@admin.com';
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
    if (user && typeof(user.token) === 'undefined') {
      Token.genToken(user._id, user.role);
    };
  };
});

User.findOne({ email: 'moderador@mmt.com' }, function(err, user) {
  if (!err) {
    if (!user) {

      user = new User();
      user.name = 'Moderador';
      user.email = 'moderador@mmt.com';
      user.role = 'MODERATOR';
      user.password = 'mmtmoderador';

      user.save(function(err) {
        if (!err) {

          Provider.findOne({ uid: 'moderador@mmt.com', user: user._id }, function(err, provider) {
            if (!err) {
              if (!provider) {

                provider = new Provider();
                provider.type = 'LOCAL';
                provider.uid = 'moderador@mmt.com';
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
    if (user && typeof(user.token) === 'undefined') {
      Token.genToken(user._id, user.role);
    };
  };
});

User.find({}, function(err, users) {
  if (!err) {

    for (var i = 0; i < users.length; i++) {
      if (users[i] && typeof(users[i].token) === 'undefined') {
        Token.genToken(users[i]._id, users[i].role);
      };
    };

  };
});

var comparisons = [
  'culiao',
  'culia',
  'culiado',
  'culeado',
  'maricón',
  'maricona',
  'maricon',
  'conchetumadre',
  'conchetumare',
  'conchesumare',
  'conchesumadre',
  'chucha',
  'xuxa',
  'hueón',
  'hueon',
  'weon',
  'weón',
  'huevón',
  'huevon',
  'pico',
  'raja',
  'culo',
  'marica',
  'joputa',
  'qliao',
  'rqliao',
  'ctm',
  'wn',
  'rqliao',
  'marako',
  'ctm',
  'maraco',
  'guevon',
  'maraka',
  'maraca',
  'indio',
  'chuncho',
  'monja',
  'chúpalo',
  'zorras',
  'hoyo',
  'zarpao',
  'chupabolas',
  'qliao',
  'teta',
  'wn',
  'qlia',
  'zampate',
  'chetumare',
  'chupapi',
  'p.o.t.o',
  'ACM1PT',
  'chuchetumare',
  'chupapico',
  'ahueonao',
  'aweonao',
  'sacowea',
  'weko',
  'pichula',
  'mierda',
  'huea',
  'pichulon',
  'pichulón',
  'xuxetumare',
  'chuchetumadre',
  'raja',
  'hueona',
  'ahueona',
  'ahueoná',
  'chupalo',
  'chupenlo',
  'hueco',
  'chúpenlo',
  'Lonji',
  'Loji',
  'chulapi',
  'nepe',
  'ahueonao',
  'ql',
  'ctm',
  'ssm',
  'csm',
  'chuchetumare',
  'rechuchasdesumadre',
  'hdp',
  'perra',
  'p.i.c.o',
  'chanta',
  'longi',
  'sacowea',
  'sacohuea'
];

for (var i = 0; i < comparisons.length; i++) {
  
  var _comparison = comparisons[i];
  Library.findOneAndUpdate({ comparison: _comparison }, { comparison: _comparison }, { upsert: true }).exec();

};