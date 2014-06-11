'use strict'

angular.module('strategistApp')
  .directive 'sgkMenu', ($timeout) ->
    restrict: 'A'
    scope: {}
    templateUrl: 'directives/mobile/button_menu'
    link: ($scope, $element, $attrs) ->

      $element.find('a.vermenu').on 'click', (e) ->
        e.preventDefault()

        angular.element("#cont, #m-des, .menu")
          .toggleClass("active");

        return false
      