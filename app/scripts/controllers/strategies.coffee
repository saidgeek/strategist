'use strict'

angular.module('strategistApp')
  .controller 'StrategiesCtrl', ($rootScope, $scope, _my, _data, _voted, Vote, Strategy) ->
    $scope.my = _my
    $scope.strategies = _data.strategies
    $scope.voted_ids = _voted.ids

    $scope.vote = (user_id, sweepstake_id, strategy_id) ->
      if $rootScope.currentUser?.id? and $scope.voted_ids.indexOf(strategy_id) < 0
        Vote user_id, sweepstake_id, strategy_id, $rootScope.currentUser.id, (err, voted) ->
          if !err
            Strategy.voted (err, data) ->
              if !err
                $scope.voted_ids = data.ids

    $scope.voted = (id) ->
      if $scope.voted_ids?
        $scope.voted_ids.indexOf(id) > -1

    $rootScope.$on 'search', (e, q) ->
      if q?
        Strategy.search q, (err, strategies) ->
          if !err
            if strategies.length > 0
              $scope.strategies = strategies
            else
              $scope.strategies = null
      else
        Strategy.index 10, 0, (err, data) ->
          if !err
            $scope.strategies = data
