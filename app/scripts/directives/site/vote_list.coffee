'use strict'

angular.module('strategistApp')
  .directive 'sgkStrategyList', ($rootScope, $timeout, IO, Strategy, $state) ->
    restrict: 'A'
    scope: {}
    templateUrl: 'directives/site/votes'
    controller: ($scope, $rootScope, Strategy) ->
      $scope.strategies = null

      Strategy.index (err, strategies) ->
        if !err
          $scope.strategies = strategies

    link: ($scope, $element, $attrs) ->

      plapElement = document.createElement 'audio'
      plapElement.setAttribute 'src', 'images/plap.mp3'

      IO.on 'new.strategy', (id) ->
        Strategy.show id, (err, strategy) ->
          if !err
            _query = "#strategy_#{strategy._id}"
            _length = angular.element(_query).length
            if _length <= 0
              plapElement.play()
              $scope.strategies.unshift strategy

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

      $_add_scroll = ($el) ->
        if $el.find('.mCustomScrollBox').length is 0
          $el.mCustomScrollbar
            scrollButtons:
              enable: false

      $scope.$watch 'strategies', (v) ->
        $timeout () =>
          $timeout () =>
            $el_parent = $element.parents('.lista-posiciones')
            $_add_scroll $el_parent

            if $el_parent.find('.mCustomScrollBox').length is 0
              $el_parent.mCustomScrollbar 'update'

            if $state.params.strategy_id?
              query = "div#strategy_#{$state.params.strategy_id}"
              $element.find(query).addClass 'first'
              $el_parent.mCustomScrollbar "scrollTo", query

          , 0
        , 0
