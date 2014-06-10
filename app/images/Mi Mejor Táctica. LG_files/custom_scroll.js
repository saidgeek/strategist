(function() {
  'use strict';
  angular.module('strategistApp').directive('sgkCustomScroll', function($timeout) {
    return {
      restrict: 'A',
      scope: {},
      link: function($scope, $element, $attrs) {
        var _this = this;
        $element.mCustomScrollbar({
          scrollButtons: {
            enable: false
          }
        });
        return $timeout(function() {
          return $timeout(function() {
            return $element.mCustomScrollbar('update');
          }, 0);
        }, 0);
      }
    };
  });

}).call(this);

/*
//@ sourceMappingURL=custom_scroll.js.map
*/