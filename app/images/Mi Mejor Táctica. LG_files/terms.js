(function() {
  'use strict';
  angular.module('strategistApp').directive('sgkTerms', function($rootScope, $timeout, $http) {
    var _this = this;
    return {
      restrict: 'A',
      scope: {},
      link: function($scope, $element, $attrs) {
        return $element.on('click', function(e) {
          var _this = this;
          return $http.get("directives/site/terms").success(function(data) {
            var $el;
            $el = angular.element(data);
            $el.on('click', '.lightbox .cerrar a', function(e) {
              console.log('cerrar');
              $el = angular.element(e.target).parents('.overlay');
              return $el.remove();
            });
            angular.element('body').append($el);
            return $timeout(function() {
              return $timeout(function() {
                var $scroll_el;
                $scroll_el = $el.find('.term-cond');
                $scroll_el.mCustomScrollbar({
                  scrollButtons: {
                    enable: false
                  }
                });
                return $scroll_el.mCustomScrollbar('update');
              }, 0);
            }, 0);
          });
        });
      }
    };
  });

}).call(this);

/*
//@ sourceMappingURL=terms.js.map
*/