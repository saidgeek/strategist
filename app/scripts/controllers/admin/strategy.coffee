'use strict'

angular.module('strategistApp')
  .controller 'StrategyCtrl', ($scope, _strategy, Strategy) ->
    $scope.strategies =  _strategy

    $scope.rejected = (id, index) ->
      Strategy.rejected id, (err, strategy) ->
        if !err
          query = "#strategy_#{ strategy._id }"
          $el = angular.element(query)
          $el.fadeOut 500, () ->
            console.log 'fade out'
            $scope.strategies.splice index, 1
    