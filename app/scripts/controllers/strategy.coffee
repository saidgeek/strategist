'use strict'

angular.module('strategistApp')
  .controller 'StrategyCtrl', ($scope, $rootScope, Match, Strategy) ->
    $scope.match = null
    $scope.strategy = null
    $scope.error = null

    Match.current (err, match) ->
      if !err
        $scope.match = match

    $scope.create = (form, match_id) ->
      console.log match_id, $scope.strategy
      if form.$valid
        $scope.strategy.match = match_id
        $scope.strategy.user = $rootScope.currentUser.id
        Strategy.create $scope.strategy, (err) ->
          if err
            $scope.error = err
          $scope.strategy.content = ''
          $scope.strategy.match = null
          $scope.strategy.user = null

