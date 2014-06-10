(function() {
  'use strict';
  angular.module('strategistApp').controller('LoginCtrl', function($scope, Auth, $location) {
    $scope.user = {};
    $scope.errors = {};
    return $scope.login = function(form) {
      $scope.submitted = true;
      if (form.$valid) {
        return Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        }).then(function() {
          return $location.path('/');
        })["catch"](function(err) {
          err = err.data;
          return $scope.errors.other = err.message;
        });
      }
    };
  });

}).call(this);

/*
//@ sourceMappingURL=login.js.map
*/