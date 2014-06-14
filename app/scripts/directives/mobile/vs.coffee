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
          _local = teams[0].toLowerCase()
          _visit = teams[1].toLowerCase()

          if _local is 'españa'
            _local = 'espana'

          if _visit is 'españa'
            _visit = 'espana'

          $scope.local = _local
          $scope.visit = _visit