'use strict'

angular.module('strategistApp')
  .directive 'sgkSelectSweepstakes', ($timeout, Sweepstake, $http, $compile) ->
    restrict: 'A'
    scope: {}
    templateUrl: 'directives/mobile/select_sweepstakes'
    controller: ($scope, Sweepstake) ->
      $scope.sweepstakes = null
      $scope.sweepstake = null
      
      Sweepstake.index (err, sweepstakes) ->
        if !err
          $scope.sweepstakes = sweepstakes
          winner = null
          for s in sweepstakes
            if s.winner?
              winner = s
          $scope.render(winner._id)


    link: ($scope, $element, $attrs) ->

      _header = 
        active: (sweepstake) =>
          template = """
            <h2>Sorteo</h2>
            <div class="fechasorteo"><span class="ng-binding">#{ moment(sweepstake.init_at).format('D') }</span> #{ moment(sweepstake.init_at).format('MMMM') }</div>
          """
          angular.element('.proxsorteo').html template
        next: (sweepstake) =>
          template = """
            <h2>Próximo <span>Sorteo</span></h2>
            <div class="fechasorteo"><span class="ng-binding">#{ moment(sweepstake.init_at).format('D') }</span> #{ moment(sweepstake.init_at).format('MMMM') }</div>
          """
          angular.element('.proxsorteo').html template

      $scope.render = (id) ->
        Sweepstake.show id, (err, sweepstake) ->
          if !err
            $scope.sweepstake = sweepstake
            template = 'next_aword'
            aword = '_cdf'
            if $scope.sweepstake.type is 'GROUP'
              aword = '_tv'

            if $scope.sweepstake.winner?
              template = 'winner'

            if sweepstake.is_active
              _header.active(sweepstake)
            else
              _header.next(sweepstake)

            if sweepstake.winner?
              _header.active(sweepstake)

            query = "option#sweepstake_#{ sweepstake._id }"

            $http.get("directives/mobile/win/#{template}#{aword}").success (data) =>
              $el = angular.element(data)
              angular.element('.slide').after $el
              angular.element('#selectfechas').find(query).attr 'selected', 'selected'


      $element.find('#selectfechas')
        .on 'change', (e) ->
          e.preventDefault()

          $el = angular.element(e.target).find('option:selected')

          $scope.render $el.val()

          return false

      # $scope.$watch 'sweepstakes', () =>
      #   $timeout () =>
      #     $timeout () =>
      #       $el = angular.element('#selectfechas').find('option:first')        
      #       $scope.render $el.val()
      #     , 0
      #   , 0
      