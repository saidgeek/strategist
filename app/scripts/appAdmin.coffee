angular.module('strategistApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'ui.bootstrap.datetimepicker',
  'btford.socket-io'
])
  .config ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) ->
    $httpProvider.defaults.headers.common['token-auth'] = uuid.v4()
    $httpProvider.interceptors.push 'noCacheInterceptor'

    $urlRouterProvider.otherwise '/admin/moderar/'

    $stateProvider
      .state 'login',
        url: '/admin/login/'
        controller: 'LoginCtrl'
        templateUrl: 'partials/admin/login'
        authenticate: false
      .state 'admin',
        templateUrl: 'partials/admin/layout'
        controller: 'MenuCtrl'
        authenticate: true
      .state 'admin.moderate',
        url: '/admin/moderar/'
        views:
          'layout':
            templateUrl: 'partials/admin/index'
            controller: 'ModerateCtrl'
        authenticate: true
      .state 'admin.match',
        url: '/admin/partidos/'
        views:
          'layout':
            templateUrl: 'partials/admin/match'
            controller: 'MatchCtrl'
        authenticate: true
      .state 'admin.contestants',
        url: '/admin/participantes/'
        views:
          'layout':
              templateUrl: 'partials/admin/contestants'
              controller: 'ContestantsCtrl'
        authenticate: true

      .state 'admin.sweepstake',
        url: '/admin/sorteos/'
        views:
          'layout':
            templateUrl: 'partials/admin/sweepstake'
            controller: 'SweepstakeCtrl'
        authenticate: true
      .state 'admin.strategy',
        url: "/admin/tacticas/"
        views:
          'layout':
            templateUrl: 'partials/admin/strategy'
            resolve:
              _strategy_data: (Strategy) ->
                Strategy.index 10, 0, (err, strategies, total_items) ->
                  if !err
                    return {
                      strategies: strategies
                      total_items: total_items
                    }
            controller: 'StrategyCtrl'


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
      if config.method is 'GET' and config.url.indexOf('partials/') is -1 and config.url.indexOf('directives/') is -1 and config.url.indexOf('template/') is -1
        separator = '&'
        if config.url.indexOf('?') is -1
          separator = '?'
        config.url = config.url+separator+'noCache=' + new Date().getTime()
      return config;

  .factory 'IO', (socketFactory) ->
    return socketFactory()

  .run ($rootScope, $state, Auth, $timeout, IO) ->

    IO.emit 'register.strategy.globals', {}
    # Redirect to login if route requires auth and you're not logged in
    $rootScope.$on '$stateChangeStart', (event, toState, toParams, fromParams) ->
      if toState.authenticate and not Auth.isLoggedIn()
        $state.transitionTo 'login'
        event.preventDefault()