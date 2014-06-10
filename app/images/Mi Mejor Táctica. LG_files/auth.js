(function() {
  'use strict';
  angular.module('strategistApp').factory('Auth', function($location, $rootScope, Session, User, $cookieStore) {
    $rootScope.currentUser = $cookieStore.get('user') || null;
    $cookieStore.remove('user');
    return {
      /*
      Authenticate user
      
      @param  {Object}   user     - login info
      @param  {Function} callback - optional
      @return {Promise}
      */

      login: function(user, callback) {
        var cb;
        cb = callback || angular.noop;
        return Session.save({
          email: user.email,
          password: user.password
        }, function(user) {
          $rootScope.currentUser = user;
          return cb();
        }, function(err) {
          return cb(err);
        }).$promise;
      },
      /*
      Unauthenticate user
      
      @param  {Function} callback - optional
      @return {Promise}
      */

      logout: function(callback) {
        var cb;
        cb = callback || angular.noop;
        return Session["delete"](function() {
          $rootScope.currentUser = null;
          return cb();
        }, function(err) {
          return cb(err);
        }).$promise;
      },
      /*
      Create a new user
      
      @param  {Object}   user     - user info
      @param  {Function} callback - optional
      @return {Promise}
      */

      /*
      Change password
      
      @param  {String}   oldPassword
      @param  {String}   newPassword
      @param  {Function} callback    - optional
      @return {Promise}
      */

      changePassword: function(oldPassword, newPassword, callback) {
        var cb;
        cb = callback || angular.noop;
        return User.update({
          oldPassword: oldPassword,
          newPassword: newPassword
        }, function(user) {
          return cb(user);
        }, function(err) {
          return cb(err);
        }).$promise;
      },
      /*
      Gets all available info on authenticated user
      
      @return {Object} user
      */

      currentUser: function() {
        return User.get();
      },
      /*
      Simple check to see if a user is logged in
      
      @return {Boolean}
      */

      isLoggedIn: function() {
        var user;
        user = $rootScope.currentUser;
        return !!user;
      }
    };
  });

}).call(this);

/*
//@ sourceMappingURL=auth.js.map
*/