(function() {
  'use strict';
  angular.module('strategistApp').directive('sgkPositionListMe', function($rootScope, $timeout, IO, Strategy) {
    return {
      restrict: 'A',
      scope: {},
      templateUrl: 'directives/site/positions_me',
      controller: function($scope, $rootScope, Strategy) {
        var _this = this;
        $scope.strategy = null;
        $scope.load = function() {
          var _ref;
          if (((_ref = $rootScope.currentUser) != null ? _ref.id : void 0) != null) {
            return Strategy.more_votes($rootScope.currentUser.id, function(err, strategy) {
              if (!err) {
                strategy.content = strategy.content.replace(/\+/g, ' ');
                return $scope.strategy = strategy;
              }
            });
          }
        };
        return $scope.load();
      },
      link: function($scope, $element, $attrs) {
        IO.on('strategy.add.vote', function(data) {
          return $scope.load();
        });
        return $scope.$watch('strategy', function(strategy) {
          var _this = this;
          if (strategy) {
            return $timeout(function() {
              var $el, position;
              $el = angular.element("#strategy_" + strategy._id);
              position = $el.find('.cell.number').html();
              return $element.find('.cell.number').html(position);
            }, 200);
          }
        });
      }
    };
  });

}).call(this);

/*
//@ sourceMappingURL=position_list_me.js.map
*/