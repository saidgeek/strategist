'use strict'

angular.module('strategistApp')
  .directive 'sgkPositionListMe', ($rootScope, $timeout, IO, Strategy) ->
    restrict: 'A'
    scope: {}
    templateUrl: 'directives/site/positions_me'
    controller: ($scope, $rootScope, Strategy) ->
      $scope.strategy = null

      $scope.load = () =>
        if $rootScope.currentUser?.id?
          Strategy.more_votes $rootScope.currentUser.id, (err, strategy) ->
            if !err
              strategy.content = strategy.content.replace(/\+/g, ' ')
              $scope.strategy = strategy

      $scope.load()

    link: ($scope, $element, $attrs) ->

      IO.on 'strategy.add.vote', (data) ->
        $scope.load()

      $scope.$watch 'strategy', (strategy) ->
        if strategy
          console.log strategy
          $timeout () =>
            $el = angular.element("#strategy_#{strategy._id}")
            position = $el.find('.cell.number').html()
            $element.find('.cell.number').html position
          , 200