'use strict'

angular.module('strategistApp')
  .controller 'UserUpdateCtrl', ($scope, $rootScope, $state, Match, Strategy) ->

    $scope.update = (form) ->
      console.log '$scope.user', $scope.user
      # if form.$valid

  .controller 'ContestantsCtrl', ($scope, User, Sweepstake) ->
    $scope.contestants = null
    $scope.sweepstakes = []
    $scope.sweepstake = null
    console.log 'kajsbdkasndjn'

    Sweepstake.index (err, sweepstakes) ->
      if !err
        console.log 'sweepstakes:', sweepstakes
        $scope.sweepstakes = sweepstakes

    $scope.change = () ->
      console.log 'sweepstake_id:', $scope.sweepstake
      User.contestants $scope.sweepstake, (err, contestants) ->
        if !err
          console.log 'contestants:', contestants
          $scope.contestants = contestants