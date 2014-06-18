'use strict'

angular.module('strategistApp')
  .controller 'StrategyCtrl', ($scope, _strategy_data, Strategy, IO) ->
    $scope.strategies =  _strategy_data.strategies

    $scope.currentPage = 0
    $scope.totalItems = _strategy_data.total_items

    IO.on 'new.strategy', (id) ->
      Strategy.show id, (err, strategy) ->
        if !err
          _query = "#strategy_#{strategy._id}"
          _length = angular.element(_query).length
          if _length <= 0
            $scope.strategies.unshift strategy

    $scope.rejected = (id, index) ->
      Strategy.rejected id, (err, strategy) ->
        if !err
          query = "#strategy_#{ strategy._id }"
          $el = angular.element(query)
          $el.fadeOut 500, () ->
            console.log 'fade out'
            $scope.strategies.splice index, 1

    $scope.$watch 'currentPage', (value) ->
      _page = value - 1
      if _page > -1
        Strategy.index 10, _page, (err, strategies, total_items) ->
          if !err
            $scope.strategies = strategies
            $scope.totalItems = total_items