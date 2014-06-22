'use strict'

angular.module('strategistApp')
  .directive 'sgkLogin', ($rootScope, $http) ->
    restrict: 'A'
    link: ($scope, $element, $attrs) ->

      $element.on 'click keyup keypress', (e) ->
        console.log $rootScope.currentUser

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