(function() {
  'use strict';
  angular.module('strategistApp').directive('sgkVs', function($timeout) {
    return {
      restrict: 'A',
      scope: {},
      templateUrl: 'directives/site/vs',
      replace: true,
      controller: function($scope, Sweepstake) {
        $scope.sweepstake = null;
        return Sweepstake.current(function(err, sweepstake) {
          if (!err) {
            return $scope.sweepstake = sweepstake;
          }
        });
      },
      link: function($scope, $element, $attrs) {
        var _this = this;
        return $scope.$watch('sweepstake', function(sweepstake) {
          var teams;
          if (sweepstake) {
            teams = sweepstake.match.split('_');
            $scope.local = teams[0].toLowerCase();
            return $scope.visit = teams[1].toLowerCase();
          }
        });
      }
    };
  });

}).call(this);

/*
//@ sourceMappingURL=vs.js.map
*/