'use strict'

angular.module('strategistApp')
  .directive 'sgkLogin', ($rootScope, $http) ->
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