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

    meta_title = 
      home:
        title: "Mi Mejor Táctica. LG",
        desc: "Arma tu mejor táctica y sale a ganar. Por cada partido de la Selección en el Mundial, comparte tu táctica ganadora en 140 caracteres. Vota y gánate la Smart TV que mereces."
      strategy:
        title: "¿Cuál es Tu Mejor Táctica? | Mi Mejor Táctica. LG"
        desc: "¿Cuál es tu mejor táctica para que tu equipo gane este encuentro?. Escríbela en 140 caracteres y consigue votos para obtener más posibilidades de ganar."
      votes:
        title: "Vota por la mejor táctica | Mi Mejor Táctica. LG"
        desc: "Revisa todas las tácticas y vota por la mejor. Participa con tu mejor táctica y vive la pasión del fútbol desde tu casa."
      positions:
        title: "Tabla de posiciones | Mi Mejor Táctica. LG",
        desc: "Tácticas que lideran la Tabla de Posiciones. ¿No estás aún entre ellas? Comparte la tuya, obtén votos y gana."
      wins:
        title: "Ganadores | Mi Mejor Táctica. LG"
        desc: "Si tu táctica futbolera para este sorteo se convierte en la ganadora, disfrutarás 6 meses gratis de los mejores partidos del fútbol nacional y los partidos chilenos en las distintas ligas donde participan, vía streaming, a través de Estadio CDF, aplicación exclusiva para Smart TV."
      awords:
        title: "Premios | Mi Mejor Táctica. LG"
        desc: "¡Llévate un espectacular LG Smart TV + 1 año de Estadio CDF, si tu mejor táctica resulta  ganadora!"
      estadio_lg:
        title: "Estadio LG | Estadísticas de fútbol en vivo | Mi Mejor Táctica. LG"
        desc: "Con Estadio LG podrás ver las estadísticas en vivo de los principales campeonatos de fútbol de Chile y el Mundo. Descarga la aplicación en tu LG Smart TV y tendrás acceso en vivo a las estadísticas más importantes de tu equipo favorito."
      estadio_cdf:
        title: "Estadio CDF | Campeonato Nacional | Primera B | Copa Chile"
        desc: "En la aplicación de Estadio CDF podrás disfrutar en vivo y on demmand cada uno de los partidos que CDF transmita del Campeonato Nacional, de la Primera B y de Copa Chile."

    $stateProvider
      # HOME
      .state 'home',
        url: '/mobile'
        templateUrl: 'partials/mobile/index'
        resolve:
          metas: () ->
            angular.element('html head title').html(meta_title.home.title)
            angular.element('html head meta[name="description"]').attr('content', meta_title.home.desc)
            angular.element('html head meta[name="twitter:description"]').attr('content', meta_title.home.desc)
        authenticate: false
      # STRATEGY
      .state 'strategy',
        url: '/mobile/mi-mejor-tactica/'
        controller: 'StrategyCtrl'
        templateUrl: 'partials/mobile/strategy'
        resolve:
          metas: () ->
            angular.element('html head title').html(meta_title.strategy.title)
            angular.element('html head meta[name="description"]').attr('content', meta_title.strategy.desc)
            angular.element('html head meta[name="twitter:description"]').attr('content', meta_title.strategy.desc)
          _sweepstake: (Sweepstake) ->
            Sweepstake.current (err, sweepstake) ->
              if !err
                return sweepstake
        authenticate: false
      # VOTES
      .state 'votes',
        url: '/mobile/tacticas/:strategy_id'
        templateUrl: 'partials/mobile/votes'
        resolve:
          metas: () ->
            angular.element('html head title').html(meta_title.votes.title)
            angular.element('html head meta[name="description"]').attr('content', meta_title.votes.desc)
            angular.element('html head meta[name="twitter:description"]').attr('content', meta_title.votes.desc)
          _my: (Strategy) ->
            Strategy.last_published (err, strategy) ->
              if !err
                if strategy?
                  strategy.content = strategy.content.replace(/\+/g, ' ')
                return strategy || false
          _data: (Strategy) ->
            Strategy.index 1000, 0, (err, data) ->
              if !err
                return data
          _voted: (Strategy) ->
            Strategy.voted (err, data) ->
              if !err
                return data
        controller: 'StrategiesCtrl'
        authenticate: false
      # POSITIONS
      .state 'positions',
        url: '/mobile/tabla-de-posiciones/:strategy_id'
        templateUrl: 'partials/mobile/positions'
        resolve:
          metas: () ->
            angular.element('html head title').html(meta_title.positions.title)
            angular.element('html head meta[name="description"]').attr('content', meta_title.positions.desc)
            angular.element('html head meta[name="twitter:description"]').attr('content', meta_title.positions.desc)
          _my: (Strategy) ->
            Strategy.more_votes (err, strategy) ->
              if !err
                if strategy?
                  strategy.content = strategy.content.replace(/\+/g, ' ')
                return strategy
          _data: (Strategy) ->
            Strategy.sort 'votes', 1000, 0, (err, data) ->
              if !err
                return data
          _voted: (Strategy) ->
            Strategy.voted (err, data) ->
              if !err
                return data
        controller: 'StrategiesCtrl'
        authenticate: false
      # WINS
      .state 'wins',
        url: '/mobile/ganadores/'
        templateUrl: 'partials/mobile/wins'
        resolve:
          metas: () ->
            angular.element('html head title').html(meta_title.wins.title)
            angular.element('html head meta[name="description"]').attr('content', meta_title.wins.desc)
            angular.element('html head meta[name="twitter:description"]').attr('content', meta_title.wins.desc)
        authenticate: false
      #AWORDS
      .state 'awards',
        url: '/mobile/premios/'
        templateUrl: 'partials/mobile/awords'
        resolve:
          metas: () ->
            angular.element('html head title').html(meta_title.awords.title)
            angular.element('html head meta[name="description"]').attr('content', meta_title.awords.desc)
            angular.element('html head meta[name="twitter:description"]').attr('content', meta_title.awords.desc)
        authenticate: false   
      # ESTADIO LG
      .state 'estadio_lg',
        url: '/mobile/estadiolg/'
        templateUrl: 'partials/mobile/estadiolg'
        resolve:
          metas: () ->
            angular.element('html head title').html(meta_title.estadio_lg.title)
            angular.element('html head meta[name="description"]').attr('content', meta_title.estadio_lg.desc)
            angular.element('html head meta[name="twitter:description"]').attr('content', meta_title.estadio_lg.desc)
        authenticate: false
      # ESPATIO CDF
      .state 'estadio_cdf',
        url: '/mobile/estadiocdf/'
        templateUrl: 'partials/mobile/estadiocdf'
        resolve:
          metas: () ->
            angular.element('html head title').html(meta_title.estadio_cdf.title)
            angular.element('html head meta[name="description"]').attr('content', meta_title.estadio_cdf.desc)
            angular.element('html head meta[name="twitter:description"]').attr('content', meta_title.estadio_cdf.desc)
        authenticate: false
      # 404
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
      $http.get("directives/mobile/moderate").success (data) =>
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
          $http.get("directives/mobile/#{template}_email").success (data) =>
            $el = angular.element(data)
            if angular.element('body .overlay-mobile').length < 1
              angular.element('body').prepend $el
            $compile($el.contents())($rootScope)

      $rootScope.user_update = (form) ->
        if form.$valid
          User.update $rootScope.user._id, $rootScope.user, (err, user) ->
            if !err
              $rootScope.currentUser = user
              $el.remove()

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

    $rootScope.$on '$stateChangeSuccess', (event, toState, toParams, fromParams) ->
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