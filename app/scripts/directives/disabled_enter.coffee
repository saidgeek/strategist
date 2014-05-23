'use strict'

angular.module('strategistApp')
  .directive 'sgkDisabledEnter', ($timeout) ->
    restrict: 'A'
    scope: {}
    link: ($scope, $element, $attrs) ->
      $element.on "keydown keypress", (e) =>
        if e.which is 13
          e.preventDefault()
          return false;
