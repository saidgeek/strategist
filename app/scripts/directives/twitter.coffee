'use strict'

angular.module('strategistApp')
  .directive 'sgkTwitterShare', ($rootScope, $http, $timeout, Strategy, $location, $window) ->
    restrict: 'A'
    scope: {}
    link: ($scope, $element, $attrs) ->

      $element.on 'click', (e) ->
        if !$rootScope.currentUser?
          e.stopPropagation()
          e.preventDefault()
          $http.get("directives/mobile/login").success (data) =>
            $el = angular.element(data)
            $el.on 'click', '.cerrar', (e) ->
              $el.remove()
            
            if angular.element('body .overlay-mobile').length < 1
              angular.element('body').prepend $el
          return false

        Strategy.show $attrs.sgkTwitterShare, (err, strategy) ->
          if !err
            domain = "#{ $location.$$protocol }://#{ $location.$$host }"
            _url = "#{ domain }/tabla-de-posiciones/#{ strategy._id }"
            _text = """
              Vota por mi mejor táctica para Chile y gana un LG Smart TV
            """
            if strategy.user._id is $rootScope.currentUser.id
              _text = """
                Esta es la mejor táctica para chile, vota y gana un LG Smart TV
              """
            url = "https://twitter.com/share?text=#{ _text }&url=#{ _url }&hashtags=mimejortactica"
            $window.open url, '', "top=200, left=500, width=400, height=300"