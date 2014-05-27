'use strict'

angular.module('strategistApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ngScrollbar',
  'btford.socket-io'
])
  .config ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) ->
    $httpProvider.defaults.headers.common['token-auth'] = uuid.v4()
    $httpProvider.interceptors.push 'noCacheInterceptor'

    $urlRouterProvider.otherwise '/'

    $stateProvider
      .state 'home',
        url: '/'
        templateUrl: 'partials/site/index'
        authenticate: false
      .state 'home.facebook',
        url: '/facebbok/:id'
        templateUrl: 'partials/site/index'
        authenticate: false
      .state 'home.twitter',
        url: '/twitter/:id'
        templateUrl: 'partials/site/index'
        authenticate: false
      .state 'strategy',
        url: '/mi-mejor-tactica/'
        controller: 'StrategyCtrl'
        templateUrl: 'partials/site/strategy'
        authenticate: false
      .state 'votes',
        url: '/tacticas/'
        templateUrl: 'partials/site/votes'
        authenticate: false
      .state 'positions',
        url: '/tabla-de-posiciones/'
        templateUrl: 'partials/site/positions'
        authenticate: false
      .state 'wins',
        url: '/ganadores/'
        templateUrl: 'partials/site/wins'
        authenticate: false
      .state 'awards',
        url: '/premios/'
        templateUrl: 'partials/site/awards'
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

  .run ($rootScope, $state, Auth, $timeout, IO, $compile, User, $http) ->

    IO.emit 'register.site.strategy.globals', {}
    
    # Redirect to login if route requires auth and you're not logged in
    $rootScope.$on '$stateChangeStart', (event, toState, toParams, fromParams) ->
      angular.element("#loader").show();
      if ['home', 'strategy', 'wins'].indexOf(toState.name) > -1
        angular.element("body").removeClass 'interior'
      else
        angular.element("body").addClass 'interior'

      if $rootScope.currentUser? and !$rootScope.currentUser?.email?
        $el = null
        User.show $rootScope.currentUser.id, (err, user) ->
          $rootScope.user = user
          template = 'twitter'
          $rootScope.user._provider = 'TWITTER'
          if !user.email? and user.facebook.email?
            template = 'facebook'
            $rootScope.user.email = user.facebook.email
            $rootScope.user._provider = 'FACEBOOK'
          $http.get("directives/site/#{template}_email").success (data) =>
            $el = angular.element(data)
            angular.element('body').append $el
            $compile($el.contents())($rootScope)

      $rootScope.user_update = (form) ->
        if form.$valid
          User.update $rootScope.user._id, $rootScope.user, (err, user) ->
            if !err
              $rootScope.currentUser = user
              $el.remove()

      # if toState.authenticate and not Auth.isLoggedIn()
      #   $state.transitionTo 'home'
      #   event.preventDefault()

    $rootScope.$on '$viewContentLoaded', (event, toState, toParams, fromParams) ->
      angular.element("#loader").fadeOut("slow");

      $timeout () =>
        $('.hinchas').removeClass('animate');
      , 600

      $timeout () =>
        $('.forma').removeClass('animate');
      , 350

      $timeout () =>
        $('.contador').removeClass('animate');
      , 850