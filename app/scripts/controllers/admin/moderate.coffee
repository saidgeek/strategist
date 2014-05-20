'use strict'

angular.module('strategistApp')
  # .controller 'ModerateCtrl', ($scope) ->

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





