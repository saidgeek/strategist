'use strict'

angular.module('strategistApp')
  .directive 'sgkAddStrategy', ($timeout, IO, Strategy) ->
    restrict: 'A'
    link: ($scope, $element, $attrs) ->
      key = $attrs.sgkAddStrategy || 'new.strategy'
      prefix_id = $attrs.sgkPrefixId
      last = $attrs.sgkLast

      # SONIDO
      plapElement = document.createElement 'audio'
      plapElement.setAttribute 'src', 'images/plap.mp3'

      IO.on key, (id) ->
        Strategy.show id, (err, strategy) ->
          if !err
            _query = "##{ prefix_id }_#{ strategy._id }"
            _length = angular.element(_query).length
            if _length < 1
              plapElement.play()
              if last
                $scope.strategies.push strategy
              else
                $scope.strategies.unshift strategy
        return false
