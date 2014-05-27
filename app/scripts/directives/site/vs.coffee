'use strict'

angular.module('strategistApp')
  .directive 'sgkVs', ($timeout) ->
    restrict: 'A'
    scope: {}
    templateUrl: 'directives/site/vs'
    replace: true
    controller: ($scope, Match) ->
      $scope.match = null
      
      Match.current (err, match) ->
        if !err
          $scope.match = match

    link: ($scope, $element, $attrs) ->
      
      $scope.$watch 'match', (match) =>
        if match
          $scope.local = match.team_one.toLowerCase()
          $scope.visit = match.team_two.toLowerCase()