'use strict'

angular.module('strategistApp')
  .controller 'WinCtrl', ($scope, $rootScope, $compile, $http, Sweepstake) ->
    $scope.sweepstakes = null
    $scope.sweepstake = null

    Sweepstake.index (err, sweepstakes) ->
      if !err
        $scope.sweepstakes = sweepstakes
        for s in sweepstakes
          if s.is_active
            render(s)
            break

    render = (sweepstake) ->
      query = "#sweepstake_#{sweepstake._id} a"
      $scope.sweepstake = sweepstake
      template = 'next_aword'
      aword = '_cdf'
      if $scope.sweepstake.type is 'GROUP'
        aword = '_tv'

      if $scope.sweepstake.winner?
        template = 'winner'

      angular.element('.tabs a.active').removeClass('active');
      angular.element(query).addClass('active');

      $http.get("directives/site/win/#{template}#{aword}").success (data) =>
        $el = angular.element(data)
        angular.element('.content_tab .hinchas').html $el
        $compile($el.contents())($scope)


    $scope.tab = (sweepstake) ->
      render(sweepstake)

    $scope.day = (date) ->
      moment(date).format 'D'

    $scope.month = (date) ->
      moment(date).format 'MMMM'
