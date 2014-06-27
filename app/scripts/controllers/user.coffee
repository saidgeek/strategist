'use strict'

angular.module('strategistApp')
  .controller 'UserUpdateCtrl', ($scope, $rootScope, $state, Match, Strategy) ->

    $scope.update = (form) ->
      console.log '$scope.user', $scope.user
      # if form.$valid

  .controller 'ContestantsCtrl', ($scope, User) ->
    $scope.contestants = null
    console.log 'kajsbdkasndjn'

    User.contestants (err, contestants) ->
      if !err
        console.log 'contestants:', contestants
        $scope.contestants = contestants