angular.module('strategistApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) ->
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
        controller: 'ModerateCtrl'
        views:
          'layout':
            templateUrl: 'partials/admin/index'
        authenticate: true


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

  .run ($rootScope, $state, Auth, $timeout) ->
    # Redirect to login if route requires auth and you're not logged in
    $rootScope.$on '$stateChangeStart', (event, toState, toParams, fromParams) ->
      console.log 'toState.authenticate:', toState.authenticate
      if toState.authenticate and not Auth.isLoggedIn()
        $state.transitionTo 'login'
        event.preventDefault()