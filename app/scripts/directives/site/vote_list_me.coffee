'use strict'

angular.module('strategistApp')
  .directive 'sgkStrategyListMe', ($rootScope, $timeout, IO, Strategy) ->
    restrict: 'A'
    scope: {}
    templateUrl: 'directives/site/votes_me'
    controller: ($scope, $rootScope, Strategy) ->
      $scope.strategy = null

      if $rootScope.currentUser?.id?
        Strategy.last_published $rootScope.currentUser.id, (err, strategy) ->
          if !err
            strategy.content = strategy.content.replace(/\+/g, ' ')
            $scope.strategy = strategy

    link: ($scope, $element, $attrs) ->

      IO.on 'my.last.strategy', (id) ->
        Strategy.show id, (err, strategy) ->
          if !err and $rootScope.currentUser?
            Strategy.last_published $rootScope.currentUser.id, (err, strategy) ->
              if !err
                strategy.content = strategy.content.replace(/\+/g, ' ')
                $scope.strategy = strategy