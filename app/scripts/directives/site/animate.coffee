'use strict'

angular.module('strategistApp')
  .directive 'sgkAnimate', ($timeout) ->
    restrict: 'A'
    scope: {}
    link: ($scope, $element, $attrs) ->
      time = $attrs.sgkAnimate || 200
      $timeout () ->
        $element.removeClass('animate');
      , time