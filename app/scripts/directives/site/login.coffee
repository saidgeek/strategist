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
          $http.get("directives/site/login").success (data) =>
            $el = angular.element(data)
            $el.on 'click', '.cerrar', (e) ->
              $el.remove()
            
            angular.element('body').append $el
          return false