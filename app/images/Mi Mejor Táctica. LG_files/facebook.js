(function() {
  'use strict';
  angular.module('strategistApp').directive('sgkFacebookShare', function($rootScope, $http, $timeout, Facebook, Strategy, $location) {
    return {
      restrict: 'A',
      scope: {},
      link: function($scope, $element, $attrs) {
        var FB, share;
        $scope.strategy = null;
        FB = Facebook.FB;
        share = function(strategy, cb) {
          var domain;
          domain = "" + $location.$$protocol + "://" + $location.$$host;
          return FB.ui({
            method: 'feed',
            link: "" + domain + $location.$$path + strategy._id,
            picture: "" + domain + "/images/logo-social.jpg",
            name: strategy.user.name,
            description: strategy.content.replace(/\+/g, ' ')
          }, function(response) {
            if (!response) {
              return cb(false);
            }
            return cb(null, response);
          });
        };
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
          return Strategy.show($attrs.sgkFacebookShare, function(err, strategy) {
            if (!err) {
              return share(strategy, function(err, res) {
                return console.log(err, res);
              });
            }
          });
        });
      }
    };
  });

}).call(this);

/*
//@ sourceMappingURL=facebook.js.map
*/