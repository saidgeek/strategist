'use strict'

angular.module('strategistApp')
  .controller 'SweepstakeCtrl', ($scope, $rootScope, $modal, Sweepstake) ->
    $scope.sweepstakes = []

    Sweepstake.index (err, sweepstakes) ->
      if !err && sweepstakes.length > 0
        $scope.sweepstakes = sweepstakes

    $rootScope.$on 'refresh', ->
      Sweepstake.index (err, sweepstakes) ->
        if !err && sweepstakes.length > 0
          $scope.sweepstakes = sweepstakes

    $rootScope.$on 'reloadSweepstake', (e, sweepstake) =>
      $scope.sweepstakes.push sweepstake

    $scope.remove = (id) ->
      Sweepstake.remove id, (err) ->
        if !err
          query = "##{id}"
          angular.element(query).remove()

    $scope.edit_open = (id) ->
      modalSweepstakeInstance = $modal.open
        templateUrl: 'partials/admin/sweepstake_edit_modal'
        controller: 'SweepstakeEditModalCtrl'
        backdrop: 'static'
        resolve:
          _sweepstake: () ->
            Sweepstake.show id, (err, sweepstake) ->
              if !err
                return sweepstake
          _sweepstakes_amount: () ->
            return $scope.sweepstakes.length
          _sweepstakes: () ->
            result = []
            if $scope.sweepstakes.length > 0
              for s in $scope.sweepstakes
                console.log 's:', s
                if s.in_sweepstake_group is false
                  result.push s
              console.log 'result:', result
              return result

    $scope.open = () ->
      modalSweepstakeInstance = $modal.open
        templateUrl: 'partials/admin/sweepstake_modal'
        controller: 'SweepstakeModalCtrl'
        backdrop: 'static'
        resolve:
          _sweepstakes_amount: () ->
            return $scope.sweepstakes.length
          _sweepstakes: () ->
            result = []
            if $scope.sweepstakes.length > 0
              for s in $scope.sweepstakes
                console.log 's:', s
                if s.in_sweepstake_group is false
                  result.push s
              console.log 'result:', result
              return result

  .controller 'SweepstakeModalCtrl', ($scope, $rootScope, $modalInstance, Matches, Sweepstake, _sweepstakes, _sweepstakes_amount) ->
    $scope.sweepstake = {}
    $scope.matches = Matches
    $scope.sweepstakes = _sweepstakes
    $scope.disabled = false

    console.log '$scope.sweepstakes:', $scope.sweepstakes

    $scope.sweepstake.type = 'MATCH'
    items = []
    $scope.addSweepstakes = (data) ->
      items.push data
      index = $scope.sweepstakes.indexOf data
      $scope.sweepstakes.splice index, 1
      if $scope.sweepstakes.length == 0
        $scope.disabled = true
      else
        $scope.disabled = false
      $scope.sweepstake.sweepstakes = items

    $scope.removeSweepstakes = (data) ->
      index = $scope.sweepstake.sweepstakes.indexOf data
      $scope.sweepstake.sweepstakes.splice index, 1
      $scope.sweepstakes.push data

    $scope.create = (form) =>
      if form.$valid
        $scope.sweepstake.is_active = (_sweepstakes_amount == 0)
        if $scope.sweepstake.sweepstakes?.length > 0
          items = []
          for item in $scope.sweepstake.sweepstakes
            items.push item._id
            $scope.sweepstake.sweepstakes = items
            $scope.sweepstake.match = null
        if $scope.sweepstake.match
          $scope.sweepstake.sweepstakes = null

        Sweepstake.create $scope.sweepstake, (err, sweepstake) ->
          if !err
            console.log 'sweepstake:', sweepstake
            $rootScope.$emit 'reloadSweepstake', sweepstake
            $modalInstance.dismiss 'cancel'
        

    $scope.close = () =>
      $modalInstance.dismiss 'cancel'

  .controller 'SweepstakeEditModalCtrl', ($scope, $rootScope, $modalInstance, Matches, Sweepstake, _sweepstake, _sweepstakes, _sweepstakes_amount, $state) ->
    console.log '_sweepstake:', _sweepstake
    $scope.sweepstake = _sweepstake
    $scope.matches = Matches
    $scope.sweepstakes = _sweepstakes
    $scope.disabled = false

    # console.log '$scope.sweepstakes:', $scope.sweepstakes

    $scope.update = (form) ->
      console.log '$scope.sweepstake:', $scope.sweepstake
      Sweepstake.update $scope.sweepstake._id, $scope.sweepstake, (err, sweepstake) ->
        if !err
          $rootScope.$emit 'refresh'
          $modalInstance.dismiss 'cancel'

        

    $scope.close = () =>
      $modalInstance.dismiss 'cancel'