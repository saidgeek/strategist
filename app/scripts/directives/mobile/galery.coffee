'use strict'

angular.module('strategistApp')
  .directive 'sgkGalery', ($timeout) ->
    restrict: 'A'
    scope: {}
    link: ($scope, $element, $attrs) ->
      
      angular.element('.flexslider').flexslider
        animation: "slide"
        controlNav: false
        directionNav: false