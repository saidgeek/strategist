(function() {
  'use strict';
  angular.module('strategistApp').directive('sgkTwitterShare', function($rootScope, $http, $timeout, Strategy, $location, $window) {
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
          return Strategy.show($attrs.sgkTwitterShare, function(err, strategy) {
            var domain, url, _text, _url;
            if (!err) {
              domain = "" + $location.$$protocol + "://" + $location.$$host;
              _url = "" + domain + $location.$$path + strategy._id;
              _text = "";
              url = "https://twitter.com/share?text=" + _text + "&url=" + _url + "&hashtags=mimejortactica";
              return $window.open(url, '', "top=200, left=500, width=400, height=300");
            }
          });
        });
      }
    };
  });

}).call(this);

/*
//@ sourceMappingURL=twitter.js.map
*/