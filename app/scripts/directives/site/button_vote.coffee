'use strict'

angular.module('strategistApp')
  .directive 'sgkButtonVote', ($timeout) ->
    restrict: 'A'
    template: """
      <a href="javascript:{}" ng-click="addVote(user_id, strategy_id, match_id)"><span>Me Gusta</span>Votar</a>
    """
    scope: {}
    replace: true
    controller: ($scope, $rootScope, Vote) ->
      
      $scope.addVote = (user_id, strategy_id, match_id) ->
        console.log user_id, strategy_id, match_id
        Vote user_id, match_id, strategy_id, (err) ->
          if !err
            console.log 'ya voto'

    link: ($scope, $element, $attrs) ->
      $scope.user_id = $attrs.sgkUserId
      $scope.strategy_id = $attrs.sgkStrategyId
      $scope.match_id = $attrs.sgkMatchId