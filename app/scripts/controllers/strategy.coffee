'use strict'

angular.module('strategistApp')
  .controller 'StrategyCtrl', ($scope, $rootScope, $state, Match, Strategy) ->
    $scope.match = null
    $scope.strategy = null
    $scope.error = null
    $scope.submitted = false

    Match.current (err, match) ->
      if !err
        $scope.match = match

    $scope.create = (form, match_id) ->
      if form.$valid
        $state.transitionTo 'votes'
        $scope.strategy.match = $scope.match._id
        $scope.strategy.user = $rootScope.currentUser.id
        Strategy.create $scope.strategy, (err) ->
          if err
            $scope.error = err
          $scope.strategy.content = ''
          $scope.strategy.match = null
          $scope.strategy.user = null
          $scope.submitted = false

