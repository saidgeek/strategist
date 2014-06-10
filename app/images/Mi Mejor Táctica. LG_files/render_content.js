(function() {
  'use strict';
  angular.module('strategistApp').directive('sgkRenderContent', function($timeout) {
    return {
      restrict: 'A',
      scope: {},
      link: function($scope, $element, $attrs) {
        var text;
        text = $element.html();
        console.log(text);
        return $element.html(text);
      }
    };
  });

}).call(this);

/*
//@ sourceMappingURL=render_content.js.map
*/