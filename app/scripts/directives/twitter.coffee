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
          $http.get("directives/site/login").success (data) =>
            $el = angular.element(data)
            $el.on 'click', '.cerrar', (e) ->
              $el.remove()
            
            angular.element('body').append $el
          return false

        Strategy.show $attrs.sgkTwitterShare, (err, strategy) ->
          if !err
            domain = "#{ $location.$$protocol }://#{ $location.$$host }"
            _url = "#{ domain }#{ $location.$$path }#{ strategy._id }"
            _text = """
              
            """
            url = "https://twitter.com/share?text=#{ _text }&url=#{ _url }&hashtags=mimejortactica"
            $window.open url, '', "top=200, left=500, width=400, height=300"