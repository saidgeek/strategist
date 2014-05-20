'use strict';

var mongoose = require('mongoose'),
  Provider = mongoose.model('Provider'),
  User = mongoose.model('User');

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
