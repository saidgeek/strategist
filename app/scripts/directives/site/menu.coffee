'use strict'

angular.module('strategistApp')
  .directive 'sgkMenu', ->
    restrict: 'A'
    scope: {}
    replace: true
    templateUrl: 'directives/site/menu'
    link: ($scope, $element, $attrs) ->
      angular.element('#menu').removeClass('animate');