(function() {
  'use strict';
  angular.module('strategistApp').controller('MainCtrl', function($scope, $http) {
    return $http.get('/api/awesomeThings').success(function(awesomeThings) {
      return $scope.awesomeThings = awesomeThings;
    });
  });

}).call(this);

/*
//@ sourceMappingURL=main.js.map
*/