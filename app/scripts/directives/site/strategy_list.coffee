'use strict'

angular.module('strategistApp')
  .directive 'sgkStrategyList', ($timeout) ->
    restrict: 'A'
    scope: {}
    templateUrl: 'directives/site/votes'
    controller: ($scope, $rootScope, Strategy) ->
      $scope.strategies = null

      Strategy.index (err, strategies) ->
        if !err
          $scope.strategies = strategies
          console.log $scope.strategies

    link: ($scope, $element, $attrs) ->
