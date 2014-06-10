(function() {
  'use strict';
  angular.module('strategistApp').directive('sgkCountdown', function($rootScope, $timeout, User) {
    return {
      restrict: 'A',
      scope: {},
      templateUrl: 'directives/site/countdown',
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
        var endDate,
          _this = this;
        endDate = null;
        return $scope.$watch('sweepstake', function(sweepstake) {
          if (sweepstake) {
            endDate = moment(sweepstake.init_at).format("MMM D, YYYY HH:mm:ss");
            return $element.find('#defaultCountdown').countdown({
              date: endDate,
              render: function(data) {
                var _html;
                _html = "<div class='countdown-section'>\n  <span class='countdown-amount'>" + (this.leadingZeros(data.days, 2)) + "</span> \n  <span class='countdown-period'>Días</span>\n</div>\n<div class='countdown-section'>\n  <span class='countdown-amount'>" + (this.leadingZeros(data.hours, 2)) + "</span> \n  <span class='countdown-period'>hrs</span>\n</div>\n<div class='countdown-section'>\n  <span class='countdown-amount'>" + (this.leadingZeros(data.min, 2)) + "</span> \n  <span class='countdown-period'>min</span>\n</div>\n<div class='countdown-section'>\n  <span class='countdown-amount'>" + (this.leadingZeros(data.sec, 2)) + "</span> \n  <span class='countdown-period'>sec</span>\n</div>";
                return $element.find(this.el).html(_html);
              }
            });
          }
        });
      }
    };
  });

}).call(this);

/*
//@ sourceMappingURL=countdown.js.map
*/