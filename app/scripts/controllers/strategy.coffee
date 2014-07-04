'use strict'

angular.module('strategistApp')
  .controller 'StrategyCtrl', ($scope, $rootScope, _sweepstake, Strategy) ->
    $scope.sweepstake = _sweepstake
    $scope.local = null
    $scope.visit = null

    $scope.strategy = null
    $scope.error = null
    $scope.submitted = false

    console.log '_sweepstake:', _sweepstake

    $scope.opacity = () ->
      $scope.sweepstake.type is 'GROUP'

    if $scope.sweepstake.type isnt 'GROUP'
      _local = _sweepstake.match.split('_')[0].toLowerCase()
      _visit = _sweepstake.match.split('_')[1].toLowerCase()
      
      if _local is 'españa'
        _local = 'espana'

      if _visit is 'españa'
        _visit = 'espana'
      
      $scope.local = "images/#{_local}.png"
      $scope.visit = "images/#{_visit}.png"

    $scope.create = (form, match_id) ->
      if form.$valid
        $scope.strategy.sweepstake = $scope.sweepstake._id
        $scope.strategy.user = $rootScope.currentUser.id
        Strategy.create $scope.strategy, (err) ->
          if err
            $scope.error = err
          $scope.strategy.content = ''
          $scope.strategy.sweepstake = null
          $scope.strategy.user = null
          $scope.submitted = false
