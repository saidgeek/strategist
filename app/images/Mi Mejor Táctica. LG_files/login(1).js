(function() {
  'use strict';
  angular.module('strategistApp').directive('sgkLogin', function($rootScope, $http) {
    return {
      restrict: 'A',
      scope: {},
      link: function($scope, $element, $attrs) {
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
//@ sourceMappingURL=login.js.map
*/