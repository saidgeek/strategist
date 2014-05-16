angular.module('strategistApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .config ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) ->
    $httpProvider.interceptors.push 'noCacheInterceptor'

    $urlRouterProvider.otherwise '/admin/moderar/'

    $stateProvider
      .state 'login',
        url: '/admin'
        templateUrl: 'partials/admin/login'
        authenticate: false
      .state 'moderate',
        url: '/admin/moderar/'
        templateUrl: 'partials/admin/index'
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

  .run ($rootScope, $state, Auth, $timeout) ->
    
    # Redirect to login if route requires auth and you're not logged in
    $rootScope.$on '$stateChangeStart', (event, toState, toParams, fromParams) ->
      angular.element("#loader").show();
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