"use strict"

angular.module("strategistApp")
  .factory "Strategy", ($resource) ->
    resource = $resource "", {},
      index:
        method: 'GET'
        params: {}
        url: '/api/startegies'
        isArray: true

      create:
        method: 'POST'
        params:
          strategy: '@strategy'
        url: '/api/strategy'

      _create = (data, cb) ->
        resource.create(
          strategy: data
        , ->
          cb null
        , (err) ->
          cb err.data
        ).$promise

    return {
      create: (data, cb) ->
        _create(data, cb)
    }