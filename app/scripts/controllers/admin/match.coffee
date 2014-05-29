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

    $scope.teams = [
      { id: 'ARGENTINA', label: 'Argentina' },
      { id: 'AUSTRALIA', label: 'Australia' },
      { id: 'BRASIL', label: 'Brasil' },
      { id: 'COREA', label: 'Corea del Sur' },
      { id: 'COSTA', label: 'Costa Rica' },
      { id: 'ESTADOS', label: 'Estados Unidos' },
      { id: 'IRÁN', label: 'Irán' },
      { id: 'ITALIA', label: 'Italia' },
      { id: 'JAPÓN', label: 'Japón' },
      { id: 'HOLANDA', label: 'Holanda' },
      { id: 'ALEMANIA', label: 'Alemania' },
      { id: 'BÉLGICA', label: 'Bélgica' },
      { id: 'COLOMBIA', label: 'Colombia' },
      { id: 'SUIZA', label: 'Suiza' },
      { id: 'RUSIA', label: 'Rusia' },
      { id: 'BOSNIA', label: 'Bosnia' },
      { id: 'INGLATERRA', label: 'Inglaterra' },
      { id: 'ESPAÑA', label: 'España' },
      { id: 'CHILE', label: 'Chile' },
      { id: 'ECUADOR', label: 'Ecuador' },
      { id: 'HONDURAS', label: 'Honduras' },
      { id: 'CAMERÚN', label: 'Camerún' },
      { id: 'COSTA', label: 'Costa de Marfil' },
      { id: 'NIGERIA', label: 'Nigeria' },
      { id: 'GHANA', label: 'Ghana' },
      { id: 'ARGELIA', label: 'Argelia' },
      { id: 'PORTUGAL', label: 'Portugal' },
      { id: 'FRANCIA', label: 'Francia' },
      { id: 'CROACIA', label: 'Croacia' },
      { id: 'GRECIA', label: 'Grecia' },
      { id: 'MÉXICO', label: 'México' },
      { id: 'URUGUAY', label: 'Uruguay' }
    ]

    $scope.create = (form) =>
      if form.$valid
        Match.create $scope.match, (err, match) ->
          if !err
            $rootScope.$emit 'reloadMatch'
            $modalInstance.dismiss 'cancel'

    $scope.close = () =>
      $modalInstance.dismiss 'cancel'