'use strict'

angular.module('strategistApp')
  .directive 'sgkFacebookShare', ($rootScope, $http, $timeout, Facebook, Strategy, $location) ->
    restrict: 'A'
    scope: {}
    link: ($scope, $element, $attrs) ->
      $scope.strategy = null
      FB = Facebook.FB

      share = (strategy, cb) ->
        domain = "#{ $location.$$protocol }://#{ $location.$$host }"
        FB.ui
          method: 'feed'
          link: "#{ domain }/tabla-de-posiciones/#{ strategy._id }"
          picture: "#{ domain }/images/logo-social.jpg"
          name: strategy.user.name
          description: "#{strategy.content.replace(/\+/g, ' ')} ¡participa y gana un Smart TV!"
        , (response) ->
          return cb(false) if !response
          return cb(null, response)
          
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
        Strategy.show $attrs.sgkFacebookShare, (err, strategy) ->
          if !err
            # #{ $location.$$absUrl }/tacticas/#{ strategy._id }
            share strategy, (err, res) ->
              console.log err, res


