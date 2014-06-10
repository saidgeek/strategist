(function() {
  'use strict';
  angular.module('strategistApp').directive('sgkDisabledEnter', function($timeout) {
    return {
      restrict: 'A',
      scope: {},
      link: function($scope, $element, $attrs) {
        var _this = this;
        return $element.on("keydown keypress", function(e) {
          if (e.which === 13) {
            e.preventDefault();
            return false;
          }
        });
      }
    };
  });

}).call(this);

/*
//@ sourceMappingURL=disabled_enter.js.map
*/