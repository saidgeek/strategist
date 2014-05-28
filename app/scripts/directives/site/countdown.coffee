'use strict'

angular.module('strategistApp')
  .directive 'sgkCountdown', ($rootScope, $timeout, User) ->
    restrict: 'A'
    scope: {}
    templateUrl: 'directives/site/countdown'
    replace: true
    controller: ($scope, Sweepstake) ->
      $scope.sweepstake = null
      
      Sweepstake.current (err, sweepstake) ->
        if !err
          $scope.sweepstake = sweepstake

    link: ($scope, $element, $attrs) ->
      endDate = null
      $scope.$watch 'sweepstake', (sweepstake) =>
        if sweepstake
          endDate = moment(sweepstake.init_at).format("MMM D, YYYY HH:mm:ss")

          $element.find('#defaultCountdown').countdown
            date: endDate
            render: (data) ->
                _html = """
                  <div class='countdown-section'>
                    <span class='countdown-amount'>#{@leadingZeros(data.days, 2)}</span> 
                    <span class='countdown-period'>Días</span>
                  </div>
                  <div class='countdown-section'>
                    <span class='countdown-amount'>#{@leadingZeros(data.hours, 2)}</span> 
                    <span class='countdown-period'>hrs</span>
                  </div>
                  <div class='countdown-section'>
                    <span class='countdown-amount'>#{@leadingZeros(data.min, 2)}</span> 
                    <span class='countdown-period'>min</span>
                  </div>
                  <div class='countdown-section'>
                    <span class='countdown-amount'>#{@leadingZeros(data.sec, 2)}</span> 
                    <span class='countdown-period'>sec</span>
                  </div>
                """
                $element.find(@el).html(_html)

