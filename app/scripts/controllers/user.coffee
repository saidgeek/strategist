'use strict'

angular.module('strategistApp')
  .controller 'UserUpdateCtrl', ($scope, $rootScope, $state, Match, Strategy) ->

    $scope.update = (form) ->
      console.log '$scope.user', $scope.user
      # if form.$valid

