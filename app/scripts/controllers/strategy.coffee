'use strict'

angular.module('strategistApp')
  .controller 'StrategyCtrl', ($scope, $rootScope, $state, Sweepstake, Strategy) ->
    $scope.sweepstake = null
    $scope.strategy = null
    $scope.error = null
    $scope.submitted = false

    Sweepstake.current (err, sweepstake) ->
      if !err
        $scope.sweepstake = sweepstake

    $scope.create = (form, match_id) ->
      if form.$valid
        $state.transitionTo 'votes'
        $scope.strategy.sweepstake = $scope.sweepstake._id
        $scope.strategy.user = $rootScope.currentUser.id
        Strategy.create $scope.strategy, (err) ->
          if err
            $scope.error = err
          $scope.strategy.content = ''
          $scope.strategy.sweepstake = null
          $scope.strategy.user = null
          $scope.submitted = false

