(function() {
  'use strict';
  var _this = this;

  angular.module('strategistApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'ngScrollbar', 'btford.socket-io']).config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $httpProvider.defaults.headers.common['token-auth'] = uuid.v4();
    $httpProvider.interceptors.push('noCacheInterceptor');
    $urlRouterProvider.otherwise('404');
    $stateProvider.state('home', {
      url: '/:terms',
      templateUrl: 'partials/site/index',
      authenticate: false
    }).state('home.facebook', {
      url: '/facebbok/:id',
      templateUrl: 'partials/site/index',
      authenticate: false
    }).state('home.twitter', {
      url: '/twitter/:id',
      templateUrl: 'partials/site/index',
      authenticate: false
    }).state('strategy', {
      url: '/mi-mejor-tactica/:terms',
      controller: 'StrategyCtrl',
      templateUrl: 'partials/site/strategy',
      authenticate: false
    }).state('votes', {
      url: '/tacticas/:strategy_id',
      templateUrl: 'partials/site/votes',
      authenticate: false
    }).state('positions', {
      url: '/tabla-de-posiciones/:strategy_id',
      templateUrl: 'partials/site/positions',
      authenticate: false
    }).state('wins', {
      url: '/ganadores/',
      templateUrl: 'partials/site/wins',
      controller: 'WinCtrl',
      authenticate: false
    }).state('awards', {
      url: '/premios/',
      templateUrl: 'partials/site/awords',
      authenticate: false
    }).state('estadio_lg', {
      url: '/estadiolg/',
      templateUrl: 'partials/site/estadiolg',
      authenticate: false
    }).state('estadio_cdf', {
      url: '/estadiocdf/',
      templateUrl: 'partials/site/estadiocdf',
      authenticate: false
    }).state('404', {
      url: '{path:.*}',
      templateUrl: 'partials/site/404',
      authenticate: false
    });
    $locationProvider.html5Mode(true);
    return $httpProvider.interceptors.push([
      '$q', '$location', function($q, $location) {
        return {
          responseError: function(response) {
            if (response.status === 401) {
              $location.path('/');
              return $q.reject(response);
            } else {
              return $q.reject(response);
            }
          }
        };
      }
    ]);
  }).factory('noCacheInterceptor', function() {
    return {
      request: function(config) {
        var separator;
        if (config.method === 'GET' && config.url.indexOf('partials/') === -1 && config.url.indexOf('directives/')) {
          separator = '&';
          if (config.url.indexOf('?') === -1) {
            separator = '?';
          }
          config.url = config.url + separator + 'noCache=' + new Date().getTime();
        }
        return config;
      }
    };
  }).factory('IO', function(socketFactory) {
    return socketFactory();
  }).factory('Config', function($resource) {
    var resource, _conf,
      _this = this;
    resource = $resource("", {}, {
      config: {
        method: 'GET',
        params: {},
        url: '/api/config'
      }
    });
    _conf = function(cb) {
      return resource.config({}, function(config) {
        return cb(config);
      }).$promise;
    };
    return {
      conf: function(cb) {
        return _conf(cb);
      }
    };
  }).factory('Facebook', function(Config, $window) {
    var FB;
    FB = $window.FB;
    Config.conf(function(config) {
      return FB.init({
        appId: config.facebook.id,
        status: true,
        xfbml: true
      });
    });
    return {
      FB: FB
    };
  }).run(function($rootScope, $state, Auth, $timeout, IO, $compile, User, $http, $sce, $window, $location) {
    var _ref;
    $rootScope.domain = "" + $location.$$protocol + "://" + $location.$$host;
    IO.emit('register.strategy.globals', {
      user_id: ((_ref = $rootScope.currentUser) != null ? _ref.id : void 0) || null
    });
    $rootScope.$watch('currentUser', function(user) {
      if ((user != null ? user.id : void 0) != null) {
        return IO.emit('register.site.strategy.moderate', {
          id: $rootScope.currentUser.id
        });
      }
    });
    IO.on('strategy.moderate', function() {
      var _this = this;
      return $http.get("directives/site/moderate").success(function(data) {
        var $el;
        $el = angular.element(data);
        $el.on('click', '.cerrar, input[type="submit"]', function(e) {
          return $el.remove();
        });
        angular.element('body').append($el);
        return $compile($el.contents())($rootScope);
      });
    });
    IO.on('new.strategy', function(id) {
      return $state.transitionTo('votes');
    });
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromParams) {
      var $el, _ref1,
        _this = this;
      angular.element("#loader").show();
      if (['home', 'strategy', 'wins'].indexOf(toState.name) > -1) {
        angular.element("body").removeClass('interior');
      } else {
        angular.element("body").addClass('interior');
      }
      if (toState.name === 'home') {
        angular.element('body').css('background-color', '#0F0E0E');
        angular.element("body").find('div.mivideo').css('display', 'block');
      } else {
        angular.element('body').css('background-color', '#26242c');
        angular.element("body").find('div.mivideo').css('display', 'none');
      }
      if (($rootScope.currentUser != null) && (((_ref1 = $rootScope.currentUser) != null ? _ref1.email : void 0) == null)) {
        $el = null;
        User.show($rootScope.currentUser.id, function(err, user) {
          var template,
            _this = this;
          $rootScope.user = user;
          template = 'twitter';
          $rootScope.user._provider = 'TWITTER';
          if ((user.email == null) && (user.facebook.email != null)) {
            template = 'facebook';
            $rootScope.user.email = user.facebook.email;
            $rootScope.user._provider = 'FACEBOOK';
          }
          return $http.get("directives/site/" + template + "_email").success(function(data) {
            $el = angular.element(data);
            angular.element('body').append($el);
            return $compile($el.contents())($rootScope);
          });
        });
      }
      $rootScope.user_update = function(form) {
        if (form.$valid) {
          return User.update($rootScope.user._id, $rootScope.user, function(err, user) {
            if (!err) {
              $rootScope.currentUser = user;
              return $el.remove();
            }
          });
        }
      };
      if (((toParams != null ? toParams.terms : void 0) != null) && toParams.terms === 'terms') {
        return $http.get("directives/site/terms").success(function(data) {
          $el = angular.element(data);
          $el.on('click', '.lightbox .cerrar a', function(e) {
            $el = angular.element(e.target).parents('.overlay');
            return $el.remove();
          });
          return angular.element('body').append($el);
        });
      }
    });
    return $rootScope.$on('$viewContentLoaded', function(event, toState, toParams, fromParams) {
      var _this = this;
      angular.element("#loader").fadeOut("slow");
      $timeout(function() {
        return $('.hinchas').removeClass('animate');
      }, 600);
      $timeout(function() {
        return $('.forma').removeClass('animate');
      }, 350);
      return $timeout(function() {
        return $('.contador').removeClass('animate');
      }, 850);
    });
  });

}).call(this);

/*
//@ sourceMappingURL=app.js.map
*/