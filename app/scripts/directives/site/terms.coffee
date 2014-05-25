'use strict'

angular.module('strategistApp')
  .directive 'sgkTerms', ($rootScope, $timeout, $http) ->
    restrict: 'A'
    scope: {}
    link: ($scope, $element, $attrs) =>
      
      $element.on 'click', (e) ->
        $http.get("directives/site/terms").success (data) =>
          $el = angular.element(data)

          $el.on 'click', '.lightbox .cerrar a', (e) ->
            console.log 'cerrar'
            $el = angular.element(e.target).parents('.overlay')
            $el.remove()

          angular.element('body').append $el



