'use strict'

angular.module('strategistApp')
  .directive 'sgkPositionList', ($rootScope, $timeout, IO, Strategy, $state) ->
    restrict: 'A'
    scope: {}
    templateUrl: 'directives/mobile/positions'
    controller: ($scope, $rootScope, Strategy) ->
      $scope.strategies = null

      Strategy.sort 'votes', (err, strategies) ->
        if !err
          $scope.strategies = strategies

    link: ($scope, $element, $attrs) ->

      IO.on 'strategy.add.vote', (data) ->
        $el = null
        $before_element = null
        query = "#strategy_#{ data.id }"
        $el = $element.find(query)
        # $el.find('.cell.votos').html "<span>Votos</span> #{ data.amount }"
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


      specialChars = [
        {val:"a",let:"áàãâä"}
        {val:"e",let:"éèêë"}
        {val:"i",let:"íìîï"}
        {val:"o",let:"óòõôö"}
        {val:"u",let:"úùûü"}
        {val:"c",let:"ç"}
        {val:"A",let:"ÁÀÃÂÄ"}
        {val:"E",let:"ÉÈÊË"}
        {val:"I",let:"ÍÌÎÏ"}
        {val:"O",let:"ÓÒÕÔÖ"}
        {val:"U",let:"ÚÙÛÜ"}
        {val:"C",let:"Ç"}
        {val:"",let:"?!()"}
      ]

      replaceSpecialChars = (str) =>
        regex;
        returnString = str
        for specialChar in specialChars
          regex = new RegExp("["+specialChar.let+"]", "g");
          returnString = returnString.replace(regex, specialChar.val);
          regex = null

        return returnString.toLowerCase()

      angular.element('body').on 'keyup', '[data-role="search"]', (e) ->
        $el = angular.element(e.target)
        value = replaceSpecialChars($el.val())
        items = angular.element('[data-search]')

        if value?
          for item in items
            regex = new RegExp(value)
            if regex.test replaceSpecialChars(angular.element(item).data('search'))
              angular.element(item).slideDown(600)
            else
              angular.element(item).slideUp(600)