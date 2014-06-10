(function() {
  'use strict';
  angular.module('strategistApp').directive('sgkButtonVote', function($rootScope, $http, $timeout, Strategy, $compile) {
    return {
      restrict: 'A',
      template: "<a href=\"javascript:{}\" ng-click=\"addVote(user_id, strategy_id, sweepstake_id)\"><span>Me Gusta</span>Votar</a>",
      scope: {},
      replace: true,
      controller: function($scope, $rootScope, Vote) {
        return $scope.addVote = function(user_id, strategy_id, sweepstake_id) {
          if ($rootScope.currentUser != null) {
            return Vote(user_id, sweepstake_id, strategy_id, $rootScope.currentUser.id, function(err, voted) {
              if (!err) {
                console.log('voted:', voted);
                if (voted) {
                  console.log('ya voto');
                  return $scope.render(strategy_id);
                } else {
                  return console.log('no voto');
                }
              }
            });
          }
        };
      },
      link: function($scope, $element, $attrs) {
        var template;
        $scope.user_id = $attrs.sgkUserId;
        $scope.strategy_id = $attrs.sgkStrategyId;
        $scope.sweepstake_id = $attrs.sgkSweepstakeId;
        template = {
          check: "<div><span>ok</span>votaste</div>"
        };
        $scope.render = function(strategy_id) {
          var $_el, $el, query;
          query = "#strategy_" + strategy_id + " .votar a";
          $_el = angular.element(query);
          $el = angular.element(template.check);
          $_el.after($el);
          return $_el.remove();
        };
        if ($rootScope.currentUser != null) {
          Strategy.show($scope.strategy_id, function(err, strategy) {
            var date, now, r, _i, _len, _ref, _results;
            if (!err) {
              _ref = strategy.votes.ref;
              _results = [];
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                r = _ref[_i];
                if ($rootScope.currentUser.id.toString() === r.voted_by.toString()) {
                  now = moment(Date.now()).format('DD-MM-YYYY');
                  date = moment(r.created_at).format('DD-MM-YYYY');
                  if (now === date) {
                    $scope.render($scope.strategy_id);
                    break;
                  } else {
                    _results.push(void 0);
                  }
                } else {
                  _results.push(void 0);
                }
              }
              return _results;
            }
          });
        }
        return $element.on('click', function(e) {
          var _this = this;
          if ($rootScope.currentUser == null) {
            e.stopPropagation();
            e.preventDefault();
            $http.get("directives/site/login").success(function(data) {
              var $el;
              $el = angular.element(data);
              $el.on('click', '.cerrar', function(e) {
                return $el.remove();
              });
              return angular.element('body').append($el);
            });
            return false;
          }
        });
      }
    };
  });

}).call(this);

/*
//@ sourceMappingURL=button_vote.js.map
*/