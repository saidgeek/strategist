'use strict'

angular.module('strategistApp')
  .directive 'sgkButtonVote', ($rootScope, $http, $timeout) ->
    restrict: 'A'
    template: """
      <a href="javascript:{}" ng-click="addVote(user_id, strategy_id, sweepstake_id)"><span>Me Gusta</span>Votar</a>
    """
    scope: {}
    replace: true
    controller: ($scope, $rootScope, Vote) ->
      
      $scope.addVote = (user_id, strategy_id, sweepstake_id) ->
        if $rootScope.currentUser?
          Vote user_id, sweepstake_id, strategy_id, (err) ->
            if !err
              console.log 'ya voto'

    link: ($scope, $element, $attrs) ->
      $scope.user_id = $attrs.sgkUserId
      $scope.strategy_id = $attrs.sgkStrategyId
      $scope.sweepstake_id = $attrs.sgkSweepstakeId

      $element.on 'click', (e) ->
        if !$rootScope.currentUser?
            e.stopPropagation()
            e.preventDefault()
            $http.get("directives/site/login").success (data) =>
              $el = angular.element(data)
              $el.on 'click', '.cerrar', (e) ->
                $el.remove()
              
              angular.element('body').append $el
            return false