'use strict'

angular.module('strategistApp')
  .factory 'Session', ($resource) ->
    $resource '/api/session/'
