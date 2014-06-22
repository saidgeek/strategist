'use strict'

angular.module('strategistApp')
  .directive 'sgkLogin', ($rootScope, $http) ->
    restrict: 'A'
    link: ($scope, $element, $attrs) ->

      $element.on 'click keyup keypress', (e) ->
        if !$rootScope.currentUser?
          e.stopPropagation()
          e.preventDefault()
          if angular.element('.overlay .dialogos').length is 0
            $http.get("directives/site/login").success (data) =>
              $el = angular.element(data)
              $el.on 'click', '.cerrar', (e) ->
                $el.remove()
              
              angular.element('body').append $el
          return false