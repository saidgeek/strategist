'use strict'

angular.module('strategistApp')
  .controller 'WinCtrl', ($scope, $rootScope, $compile, $http, Sweepstake, Winner, Strategy) ->
    $scope.sweepstakes = null
    $scope.sweepstake = null
    $scope.win = null
    $scope.strategy = null

    Sweepstake.index (err, sweepstakes) ->
      if !err
        $scope.sweepstakes = sweepstakes
        winner = null
        for s in sweepstakes
          if s.winner?
            winner = s
        render(winner)

    render = (sweepstake) ->
      if sweepstake.winner?
        Winner.show sweepstake.winner, (err, win) ->
          if !err
            $scope.win = win
            Strategy.show win.vote.strategy, (err, strategy) ->
              if !err
                $scope.strategy = strategy
                $scope.strategy.content = $scope.strategy.content.replace(/\+/g, ' ')

      query = "#sweepstake_#{sweepstake._id} a"

      $scope.sweepstake = sweepstake
      template = 'next_aword'
      aword = '_cdf'
      if $scope.sweepstake.type is 'GROUP'
        aword = '_tv'

      if $scope.sweepstake.winner?
        template = 'winner'

      $http.get("directives/site/win/#{template}#{aword}").success (data) =>
        $el = angular.element(data)
        angular.element('.content_tab .hinchas').html $el
        $compile($el.contents())($scope)

        angular.element('.tabs a.active').removeClass('active')
        angular.element(query).addClass('active')


    $scope.tab = (sweepstake) ->
      render(sweepstake)

    $scope.day = (date) ->
      moment(date).format 'D'

    $scope.month = (date) ->
      moment(date).format 'MMMM'
