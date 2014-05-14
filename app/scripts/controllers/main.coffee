'use strict'

angular.module('strategistApp')
  .controller 'MainCtrl', ($scope, $http) ->
    $http.get('/api/awesomeThings').success (awesomeThings) ->
      $scope.awesomeThings = awesomeThings