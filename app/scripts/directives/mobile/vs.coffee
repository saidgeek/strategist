'use strict'

angular.module('strategistApp')
  .directive 'sgkVs', ($timeout) ->
    restrict: 'A'
    scope: {}
    templateUrl: 'directives/mobile/vs'
    replace: true
    controller: ($scope, Sweepstake) ->
      $scope.sweepstake = null
      
      Sweepstake.current (err, sweepstake) ->
        if !err
          $scope.sweepstake = sweepstake

    link: ($scope, $element, $attrs) ->
      
      $scope.$watch 'sweepstake', (sweepstake) =>
        if sweepstake
          teams = sweepstake.match.split '_'
          $scope.local = teams[0].toLowerCase()
          $scope.visit = teams[1].toLowerCase()