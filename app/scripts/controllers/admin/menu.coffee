'use strict'

angular.module('strategistApp')
  .controller 'MenuCtrl', ($scope, Auth, $location, $state) ->
    $scope.logout = ->
      Auth.logout().then ->
        $state.transitionTo 'login'