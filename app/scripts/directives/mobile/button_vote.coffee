'use strict'

angular.module('strategistApp')
  .directive 'sgkButtonVote', ($rootScope, $http, $timeout, Strategy, $compile) ->
    restrict: 'A'
    template: """

        <a class="votar" href="javascript:{}" ng-click="addVote(user_id, strategy_id, sweepstake_id)">
          <img src="images/mano-votar.png" alt="icono mano">
          Votar
        </a>

        """
    scope: {}
    replace: true
    controller: ($scope, $rootScope, Vote) ->
      
      $scope.addVote = (user_id, strategy_id, sweepstake_id) ->
        if $rootScope.currentUser?
          console.log $rootScope.currentUser.id
          Vote user_id, sweepstake_id, strategy_id, $rootScope.currentUser.id, (err, voted) ->
            if !err
              console.log 'voted:', voted
              if voted
                console.log 'ya voto'
                $scope.render(strategy_id)
              else
                console.log 'no voto'

    link: ($scope, $element, $attrs) ->
      $scope.user_id = $attrs.sgkUserId
      $scope.strategy_id = $attrs.sgkStrategyId
      $scope.sweepstake_id = $attrs.sgkSweepstakeId

      template =
        check: """
          <div class="votar"><span>ok</span>votaste</div>
        """

      $scope.render = (strategy_id) ->
        query = "#strategy_#{strategy_id} a.votar"
        $_el = angular.element(query)
        $el = angular.element(template.check)
        $_el.after $el
        $_el.remove()

      if $rootScope.currentUser?
        Strategy.show $scope.strategy_id, (err, strategy) ->
          if !err
            for r in strategy.votes.ref
              if $rootScope.currentUser.id.toString() is r.voted_by.toString()
                now = moment(Date.now()).format 'DD-MM-YYYY'
                date = moment(r.created_at).format 'DD-MM-YYYY'
                if now is date
                  $scope.render($scope.strategy_id)
                  break

      $element.on 'click', (e) ->
        if !$rootScope.currentUser?
            e.stopPropagation()
            e.preventDefault()
            $http.get("directives/mobile/login").success (data) =>
              $el = angular.element(data)
              $el.on 'click', '.cerrar', (e) ->
                $el.remove()
              
              if angular.element('body .overlay-mobile').length < 1
                angular.element('body').prepend $el
            return false