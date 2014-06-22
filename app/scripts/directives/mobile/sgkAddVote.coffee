'use strict'

angular.module('strategistApp')
  .directive 'sgkAddVote', (IO) ->
    restrict: 'A'
    link: ($scope, $element, $attrs) ->

      IO.on 'strategy.add.vote', (data) ->
        query = "#strategy_#{ data.id }"
        $el = $element.find(query)
        $el.find('.votos.mTop').html "<span>#{ data.amount }</span> Votos"
        