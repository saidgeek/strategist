'use strict'

angular.module('strategistApp')
  .directive 'sgkRenderContent', ($timeout) ->
    restrict: 'A'
    scope: {}
    link: ($scope, $element, $attrs) ->
      text = $element.html()
      console.log text
      $element.html text
