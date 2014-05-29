'use strict'

angular.module('strategistApp')
  .controller 'ModerateCtrl', ($scope, Strategy, IO) ->
    $scope.strategies = []

    plapElement = document.createElement 'audio'
    plapElement.setAttribute 'src', 'images/plap.mp3'

    IO.on 'new.moderating.strategy', (id) ->
      Strategy.show id, (err, strategy) ->
        if !err
          plapElement.play()
          $scope.strategies.unshift strategy

    Strategy.moderate (err, strategies) ->
      if !err
        $scope.strategies = strategies

    $scope.approved = (id, index) ->
      Strategy.approved id, (err, strategy) ->
        if !err
          $scope.strategies.splice index, 1

    $scope.rejected = (id, index) ->
      Strategy.rejected id, (err, strategy) ->
        if !err
          $scope.strategies.splice index, 1


  .controller 'LibraryModalCtrl', ($scope, Library, $modalInstance) ->
    $scope.libraries = []
    $scope.library = {}
    $scope.error = null

    Library.index (err, libraries) ->
      if err
        $scope.error = err
      else
        $scope.libraries = libraries

    $scope.create = (form) =>
      if form.$valid
        Library.create $scope.library, (err, library) ->
          if err
            $scope.error = err
          else
            $scope.libraries.unshift library
            $scope.library.comparison = null

    $scope.remove = (id, index) =>
      Library.remove id, (err, res) ->
        if err
          $scope.error = err
        else
          $scope.libraries.splice index, 1

    $scope.close = () =>
      $modalInstance.dismiss 'cancel'
  
  .controller 'LibraryCtrl', ($scope, $modal, Library) ->
    $scope.error = null

    $scope.open = () ->
      modalLibraryInstance = $modal.open
        templateUrl: 'partials/admin/library_modal'
        controller: 'LibraryModalCtrl'
        backdrop: 'static'





