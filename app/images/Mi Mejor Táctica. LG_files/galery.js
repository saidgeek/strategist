(function() {
  'use strict';
  angular.module('strategistApp').directive('sgkGalery', function($timeout, $compile, $http) {
    return {
      restrict: 'A',
      scope: {},
      replace: true,
      link: function($scope, $element, $attrs) {
        var $content, file, type,
          _this = this;
        type = $attrs.sgkGalery || 'image';
        file = $attrs.sgkFile;
        $content = "<img src=\"images/" + file + "\" alt=\"\">";
        if (type === 'video') {
          $content = "<iframe id=\"player1\" \nsrc=\"//player.vimeo.com/video/" + file + "?api=1&amp;player_id=player1&amp;color=ee2642&amp;title=0&amp;portrait=0&amp;byline=0&amp;badge=0&amp;autoplay=1\" \nwidth=\"660\" height=\"371\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>  ";
        }
        return $element.on('click', function(e) {
          e.preventDefault();
          $http.get('directives/site/galery').success(function(html) {
            var $template;
            $template = angular.element(html);
            $template.on('click', '.cerrar', function(e) {
              e.preventDefault();
              $template.remove();
              return false;
            });
            $template.find('.centrar').append($content);
            return angular.element('body').append($template);
          });
          return false;
        });
      }
    };
  });

}).call(this);

/*
//@ sourceMappingURL=galery.js.map
*/