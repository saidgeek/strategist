'use strict'

angular.module('strategistApp')
  .directive 'sgkScroll', ($timeout, Strategy, $state) ->
    restrict: 'A'
    link: ($scope, $element, $attrs) ->
      type = $attrs.sgkScroll || 'votes'

      $_add_scroll = () ->
        if $element.find('.mCustomScrollBox').length is 0
          $element.mCustomScrollbar
            scrollInertia: 2000
            scrollButtons:
              enable: false
            callbacks:
              onTotalScroll: () ->
                amount = $element.find('.listar').length
                page = Math.abs(amount/10)

                if type is 'votes'
                  Strategy.index 10, page, (err, strategies) ->
                    if !err
                      if strategies.length > 0
                        for s in strategies
                          $scope.strategies.push s
                        $timeout () =>
                          $timeout () =>
                            $element.mCustomScrollbar 'update'
                            if $state.params.strategy_id? and $state.params.strategy_id isnt ''
                              select("div#strategy_#{$state.params.strategy_id}")
                          , 0
                        , 0

                else if type is 'sort'
                  Strategy.sort 'votes', 10, page, (err, strategies) ->
                    if !err
                      if strategies.length > 0
                        for s in strategies
                          $scope.strategies.push s
                        $timeout () =>
                          $timeout () =>
                            $element.mCustomScrollbar 'update'
                            if $state.params.strategy_id? and $state.params.strategy_id isnt ''
                              select("div#strategy_#{$state.params.strategy_id}")
                          , 0
                        , 0

      select = (query) ->
        $el = $element.find(query)
        if $el.length > 0 and !$el.hasClass 'first'
          $el.addClass 'first'
          $el.find('.cell.votos').css 'display', 'table-cell'
          $element.mCustomScrollbar "scrollTo", query
        else
          $element.mCustomScrollbar "scrollTo", "bottom"

      $scope.$watch 'strategies', (v) ->
        $timeout () =>
          $timeout () =>
            
            $_add_scroll()

            if type isnt 'votes'
              $element.find('.cell.votos').css 'display', 'none'

            if $element.find('.mCustomScrollBox').length isnt 0
              $element.mCustomScrollbar 'update'

            if $state.params.strategy_id? and $state.params.strategy_id isnt ''
              select("div#strategy_#{$state.params.strategy_id}")

          , 0
        , 0
