"use strict"

angular.module("strategistApp")
  .factory "Strategy", ($resource) ->
    resource = $resource "", {},
      index:
        method: 'GET'
        params: {}
        url: '/api/strategies'
        isArray: true

      create:
        method: 'POST'
        params:
          strategy: '@strategy'
        url: '/api/strategies'

      _index = (cb) ->
        resource.index(
          {}
        , (strategies) ->
          cb null, strategies
        , (err) ->
          cb err.data
        ).$promise

      _create = (data, cb) ->
        resource.create(
          strategy: data
        , ->
          cb null
        , (err) ->
          cb err.data
        ).$promise

    return {
      index: (cb) ->
        _index(cb)
      create: (data, cb) ->
        _create(data, cb)
    }