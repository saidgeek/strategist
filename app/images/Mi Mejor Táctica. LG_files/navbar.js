(function() {
  'use strict';
  angular.module('strategistApp').controller('NavbarCtrl', function($scope, $location, Auth) {
    $scope.menu = [
      {
        title: 'Home',
        link: '/'
      }, {
        title: 'Settings',
        link: '/settings'
      }
    ];
    $scope.logout = function() {
      return Auth.logout().then(function() {
        return $location.path("/login");
      });
    };
    return $scope.isActive = function(route) {
      return route === $location.path();
    };
  });

}).call(this);

/*
//@ sourceMappingURL=navbar.js.map
*/