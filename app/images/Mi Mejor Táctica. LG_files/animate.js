(function() {
  'use strict';
  angular.module('strategistApp').directive('sgkAnimate', function($timeout) {
    return {
      restrict: 'A',
      scope: {},
      link: function($scope, $element, $attrs) {
        var time;
        time = $attrs.sgkAnimate || 200;
        return $timeout(function() {
          return $element.removeClass('animate');
        }, time);
      }
    };
  });

}).call(this);

/*
//@ sourceMappingURL=animate.js.map
*/