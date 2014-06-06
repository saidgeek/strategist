'use strict'

angular.module('strategistApp')
  .directive 'sgkCustomScroll', ($timeout) ->
    restrict: 'A'
    scope: {}
    link: ($scope, $element, $attrs) ->

      $element.mCustomScrollbar
        scrollButtons:
              enable: false

      $timeout () =>
        $timeout () =>

          $element.mCustomScrollbar 'update'

        , 0
      , 0