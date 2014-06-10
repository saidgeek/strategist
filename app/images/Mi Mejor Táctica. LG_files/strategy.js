(function() {
  'use strict';
  angular.module('strategistApp').controller('StrategyCtrl', function($scope, $rootScope, $state, Sweepstake, Strategy) {
    $scope.sweepstake = null;
    $scope.strategy = null;
    $scope.error = null;
    $scope.submitted = false;
    Sweepstake.current(function(err, sweepstake) {
      if (!err) {
        return $scope.sweepstake = sweepstake;
      }
    });
    return $scope.create = function(form, match_id) {
      if (form.$valid) {
        $scope.strategy.sweepstake = $scope.sweepstake._id;
        $scope.strategy.user = $rootScope.currentUser.id;
        return Strategy.create($scope.strategy, function(err) {
          if (err) {
            $scope.error = err;
          }
          $scope.strategy.content = '';
          $scope.strategy.sweepstake = null;
          $scope.strategy.user = null;
          return $scope.submitted = false;
        });
      }
    };
  });

}).call(this);

/*
//@ sourceMappingURL=strategy.js.map
*/