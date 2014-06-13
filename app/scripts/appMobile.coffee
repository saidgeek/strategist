'use strict'

angular.module('strategistApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ngScrollbar',
  'btford.socket-io',
  'ngTouch'
])
  .config ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) ->
    $httpProvider.defaults.headers.common['token-auth'] =  uuid.v4()
    $httpProvider.interceptors.push 'noCacheInterceptor'

    $urlRouterProvider.otherwise '404'

    $stateProvider
      .state 'home',
        url: '/mobile'
        templateUrl: 'partials/mobile/index'
        authenticate: false
      .state 'home.facebook',
        url: '/mobile/facebbok/:id'
        templateUrl: 'partials/mobile/index'
        authenticate: false
      .state 'home.twitter',
        url: '/mobile/twitter/:id'
        templateUrl: 'partials/mobile/index'
        authenticate: false
      .state 'strategy',
        url: '/mobile/mi-mejor-tactica/'
        controller: 'StrategyCtrl'
        templateUrl: 'partials/mobile/strategy'
        authenticate: false
      .state 'votes',
        url: '/mobile/tacticas/:strategy_id'
        templateUrl: 'partials/mobile/votes'
        authenticate: false
      .state 'positions',
        url: '/mobile/tabla-de-posiciones/:strategy_id'
        templateUrl: 'partials/mobile/positions'
        authenticate: false
      .state 'wins',
        url: '/mobile/ganadores/'
        templateUrl: 'partials/mobile/wins'
        controller: 'WinCtrl'
        authenticate: false
      .state 'awards',
        url: '/mobile/premios/'
        templateUrl: 'partials/mobile/awords'
        authenticate: false   
      .state 'estadio_lg',
        url: '/mobile/estadiolg/'
        templateUrl: 'partials/mobile/estadiolg'
        authenticate: false
      .state 'estadio_cdf',
        url: '/mobile/estadiocdf/'
        templateUrl: 'partials/mobile/estadiocdf'
        authenticate: false
      .state '404',
        url: '{path:.*}'
        templateUrl: 'partials/mobile/404'
        authenticate: false

    $locationProvider.html5Mode true
  
    # Intercept 401s and redirect you to login
    $httpProvider.interceptors.push ['$q', '$location', ($q, $location) ->
      responseError: (response) ->
        if response.status is 401
          $location.path '/'
          $q.reject response
        else
          $q.reject response
    ]
  .factory 'noCacheInterceptor', () =>
    request: (config) ->
      if config.method is 'GET' and config.url.indexOf('partials/') is -1 and config.url.indexOf('directives/')
        separator = '&'
        if config.url.indexOf('?') is -1
          separator = '?'
        config.url = config.url+separator+'noCache=' + new Date().getTime()
      return config;

  .factory 'IO', (socketFactory) ->
    return socketFactory()

  .factory 'Config', ($resource) ->
    resource = $resource "", {},
      config:
        method: 'GET'
        params: {}
        url: '/api/config'

    _conf = (cb) =>
      resource.config(
        {}
      , (config) ->
        cb config
      ).$promise

    return {
      conf: (cb) ->
        _conf(cb)
    }

  .factory 'Facebook', (Config, $window) ->
    FB = $window.FB

    Config.conf (config) ->

      FB.init({
        appId      : config.facebook.id,
        status     : true,
        xfbml      : true
      });

    return {
      FB: FB
    }

  .run ($rootScope, $state, Auth, $timeout, IO, $compile, User, $http, $sce, $window, $location, Strategy) ->

    $rootScope.open = () ->
        angular.element("#cont, #m-des, .menu").addClass("active");

    $rootScope.close = () ->
      angular.element("#cont, #m-des, .menu").removeClass("active");

    $rootScope.domain = "#{ $location.$$protocol }://#{ $location.$$host }"
    IO.emit 'register.strategy.globals', { user_id: ($rootScope.currentUser?.id || null) }

    $rootScope.$watch 'currentUser', (user) ->
      if user?.id?
        IO.emit 'register.site.strategy.moderate', id: $rootScope.currentUser.id
    
    IO.on 'strategy.moderate', () ->
      $http.get("directives/site/moderate").success (data) =>
        $el = angular.element(data)

        $el.on 'click', '.cerrar, input[type="submit"]', (e) ->
          $el.remove()

        angular.element('body').append $el
        $compile($el.contents())($rootScope)

    IO.on 'new.strategy', (id) ->
      Strategy.show id, (err, strategy) ->
          if !err
            if strategy.user._id is $rootScope.currentUser.id
              $state.transitionTo 'votes'


    # Redirect to login if route requires auth and you're not logged in
    $rootScope.$on '$stateChangeStart', (event, toState, toParams, fromParams) ->
      angular.element("#loader").show();
      # if ['home', 'strategy', 'wins'].indexOf(toState.name) > -1
      #   angular.element("body").removeClass 'interior'
      # else
      #   angular.element("body").addClass 'interior'

      # if toState.name is 'home'
      #   angular.element('body').css 'background-color', '#0F0E0E'
      #   angular.element("body").find('div.mivideo').css 'display', 'block'
      # else
      #   angular.element('body').css 'background-color', '#26242c'
      #   angular.element("body").find('div.mivideo').css 'display', 'none'

      # if $rootScope.currentUser? and !$rootScope.currentUser?.email?
      #   $el = null
      #   User.show $rootScope.currentUser.id, (err, user) ->
      #     $rootScope.user = user
      #     template = 'twitter'
      #     $rootScope.user._provider = 'TWITTER'
      #     if !user.email? and user.facebook.email?
      #       template = 'facebook'
      #       $rootScope.user.email = user.facebook.email
      #       $rootScope.user._provider = 'FACEBOOK'
      #     $http.get("directives/site/#{template}_email").success (data) =>
      #       $el = angular.element(data)
      #       angular.element('body').append $el
      #       $compile($el.contents())($rootScope)

      # $rootScope.user_update = (form) ->
      #   if form.$valid
      #     User.update $rootScope.user._id, $rootScope.user, (err, user) ->
      #       if !err
      #         $rootScope.currentUser = user
      #         $el.remove()

      # if toParams?.terms? and toParams.terms is 'terms'
      #   $http.get("directives/site/terms").success (data) =>
      #     $el = angular.element(data)

      #     $el.on 'click', '.lightbox .cerrar a', (e) ->
      #       $el = angular.element(e.target).parents('.overlay')
      #       $el.remove()

      #     angular.element('body').append $el

      # if toState.authenticate and not Auth.isLoggedIn()
      #   $state.transitionTo 'home'
      #   event.preventDefault()

    $rootScope.$on '$viewContentLoaded', (event, toState, toParams, fromParams) ->
      angular.element("#loader").fadeOut("slow");

      angular.element("#cont, #m-des, .menu")
        .removeClass("active");

      # $timeout () =>
      #   $('.hinchas').removeClass('animate');
      # , 600

      # $timeout () =>
      #   $('.forma').removeClass('animate');
      # , 350

      # $timeout () =>
      #   $('.contador').removeClass('animate');
      # , 850