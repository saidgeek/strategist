'use strict'

angular.module('strategistApp')
  .directive 'sgkSweepstake', ($timeout) ->
    restrict: 'A'
    scope: {}
    templateUrl: 'directives/site/sweepstake'
    controller: ($scope, Strategy) ->
      $scope.strategies = null

      Strategy.sort 'votes', (err, strategies) ->
        if !err
          $scope.strategies = strategies


    link: ($scope, $element, $attrs) ->

      angular.element('#menu').addClass 'animate'
      $element.hide()

      fadeLoop = ($el) ->
        $el.fadeOut 250, () =>
          $next = $el.next()
          if $next.length is 0
            $next = $el.siblings ":first"
          $next.fadeIn 250, () =>
              fadeLoop $next

      $scope.$watch 'strategies', () =>
        $timeout () =>
          $timeout () =>

            $item = $element.find("#strategy0")
            console.log $item
            $item.siblings().hide()
            fadeLoop $item

            $element.show()

          , 0
        , 0
      