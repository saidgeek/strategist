'use strict'

angular.module('strategistApp')
  .controller 'MatchCtrl', ($scope, $rootScope, $modal, Match) ->
    $scope.match = null

    load = () ->
      Match.index (err, match) ->
        if !err
          $scope.match = match

    $rootScope.$on 'reloadMatch', (e) =>
      load()

    $scope.open = () ->
      modalMatchInstance = $modal.open
        templateUrl: 'partials/admin/match_modal'
        controller: 'MatchModalCtrl'
        backdrop: 'static'

    load()

  .controller 'MatchModalCtrl', ($scope, $rootScope, $modalInstance, Match) ->
    $scope.match = {}

    $scope.create = (form) =>
      if form.$valid
        Match.create $scope.match, (err, match) ->
          if !err
            $rootScope.$emit 'reloadMatch'
            $modalInstance.dismiss 'cancel'

    $scope.close = () =>
      $modalInstance.dismiss 'cancel'