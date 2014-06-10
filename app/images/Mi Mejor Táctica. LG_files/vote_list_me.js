(function() {
  'use strict';
  angular.module('strategistApp').directive('sgkStrategyListMe', function($rootScope, $timeout, IO, Strategy) {
    return {
      restrict: 'A',
      scope: {},
      templateUrl: 'directives/site/votes_me',
      controller: function($scope, $rootScope, Strategy) {
        var _ref;
        $scope.strategy = null;
        if (((_ref = $rootScope.currentUser) != null ? _ref.id : void 0) != null) {
          return Strategy.last_published($rootScope.currentUser.id, function(err, strategy) {
            if (!err) {
              strategy.content = strategy.content.replace(/\+/g, ' ');
              return $scope.strategy = strategy;
            }
          });
        }
      },
      link: function($scope, $element, $attrs) {
        return IO.on('my.last.strategy', function(id) {
          return Strategy.show(id, function(err, strategy) {
            if (!err && ($rootScope.currentUser != null)) {
              return Strategy.last_published($rootScope.currentUser.id, function(err, strategy) {
                if (!err) {
                  strategy.content = strategy.content.replace(/\+/g, ' ');
                  return $scope.strategy = strategy;
                }
              });
            }
          });
        });
      }
    };
  });

}).call(this);

/*
//@ sourceMappingURL=vote_list_me.js.map
*/