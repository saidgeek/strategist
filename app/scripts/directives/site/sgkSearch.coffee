'use strict'

angular.module('strategistApp')
  .directive 'sgkSearch', ($rootScope, $timeout, IO, Strategy, $state) ->
    restrict: 'A'
    link: ($scope, $element, $attrs) ->
      $element.bind 'keyup', '[data-role="search"]', (e) ->
        $el = angular.element(e.target)
        value = $el.val()
        $rootScope.$emit 'search', value || null