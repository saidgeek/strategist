'use strict'

angular.module('strategistApp')
  .directive 'sgkAddVote', (IO) ->
    restrict: 'A'
    link: ($scope, $element, $attrs) ->

      IO.on 'strategy.add.vote', (data) ->
        query = "#strategy_#{ data.id }"
        $el = $element.find(query)
        $el.find('.cell.votos').html "<span>Votos</span> #{ data.amount }"
        # $el.attr('data-votes', data.amount.toString())
        # console.log $el.data('position'), $el.data('votes')
        # if $el.data('position') > 1
        #   $before_element = $el.prev()
        #   console.log $before_element.data('votes'), data.amount
        #   if $before_element.data('votes') < data.amount
        #     $el.fadeOut(400)
        #     $timeout () =>
        #       current_position = $el.data('position')
        #       prev_position = $before_element.data('position')

        #       console.log current_position, prev_position
              
        #       $before_element.find('.cell.number').html current_position
        #       $el.find('.cell.number').html prev_position

        #       $before_element.attr 'data-position', current_position.toString()
        #       $el.attr 'data-position', prev_position.toString()
        #       $el.attr 'data-votes', $before_element.data('votes').toString()

        #       $before_element.before($el)
        #     , 400
        #     $timeout () =>
        #       $el.fadeIn(600)
        #     , 200