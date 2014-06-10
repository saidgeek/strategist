(function() {
  'use strict';
  angular.module('strategistApp').directive('sgkMenu', function() {
    return {
      restrict: 'A',
      scope: {},
      replace: true,
      templateUrl: 'directives/site/menu',
      link: function($scope, $element, $attrs) {
        return angular.element('#menu').removeClass('animate');
      }
    };
  });

}).call(this);

/*
//@ sourceMappingURL=menu.js.map
*/