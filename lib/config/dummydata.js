'use strict';

var mongoose = require('mongoose'),
  Provider = mongoose.model('Provider'),
  User = mongoose.model('User'),
  Library = mongoose.model('Library'),
  Token = mongoose.model('Token'),
  Strategy = mongoose.model('Strategy');

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

// var Win = mongoose.model('Win'),
//     Sweepstake = mongoose.model('Sweepstake'),
//     Strategy = mongoose.model('Strategy');



// Sweepstake.findById('53aa2cfb8363178c05811c68', function(err, sweepstake) {
//   if (!err) {

//     if (sweepstake.is_closed === false) {

//       Strategy.findById('53ab031794f8a1c205b7a46a', function(err, strategy) {
//         if (!err) {

//           var win = Win();
//           win.user = strategy.user;
//           win.sweepstake = strategy.sweepstake;
//           win.vote = strategy.votes.ref[0].vote;

//           win.save(function(err) {

//             Sweepstake.findById(strategy.sweepstake, function(err, sweepstake) {
//               if (!err) {

//                 sweepstake.is_closed = true;
//                 sweepstake.winner = win._id;

//                 sweepstake.save(function(err) {

//                 });


//               };
//             });

//           });

//         };
//       });

      
//     };

//   };
// });

// var specialChars = [
//   {val:"a",let:"áàãâä"},
//   {val:"e",let:"éèêë"},
//   {val:"i",let:"íìîï"},
//   {val:"o",let:"óòõôö"},
//   {val:"u",let:"úùûü"},
//   {val:"c",let:"ç"},
//   {val:"A",let:"ÁÀÃÂÄ"},
//   {val:"E",let:"ÉÈÊË"},
//   {val:"I",let:"ÍÌÎÏ"},
//   {val:"O",let:"ÓÒÕÔÖ"},
//   {val:"U",let:"ÚÙÛÜ"},
//   {val:"C",let:"Ç"},
//   {val:"",let:"?!()"}
// ]

// var replaceSpecialChars = function(str) {
//     var regex;
//     var returnString = str

//     for (var i = 0; i < specialChars.length; i++) {
//       specialChars[i]
//       regex = new RegExp("["+specialChars[i].let+"]", "g");
//       returnString = returnString.replace(regex, specialChars[i].val);
//       regex = null;
//     };

//     return returnString.toLowerCase();
// };

// Strategy.find()
//   .populate('user')
//   .exec(function(err, strategies) {
//     if (!err) {

//       for (var i = 0; i < strategies.length; i++) {
//         if (typeof(strategies[i].search) === 'undefined' || strategies[i].search === null) {
//           if (typeof(strategies[i].user.name) !== 'undefined' &&
//             typeof(strategies[i].user.email) !== 'undefined' &&
//             typeof(strategies[i].user.twitter_screen_name) !== 'undefined' &&
//             typeof(strategies[i].content) !== 'undefined') { 

//             strategies[i].search = replaceSpecialChars(strategies[i].user.name+'+'+strategies[i].user.email+'+'+strategies[i].user.twitter_screen_name+'+'+strategies[i].content);
//             strategies[i].save();

//           };
//         };
//       };

//     };
//   });