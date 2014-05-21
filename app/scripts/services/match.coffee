"use strict"

angular.module("strategistApp")
  .factory "Match", ($resource) ->
    resource = $resource "", {},
      index:
        method: 'GET'
        params: {}
        url: '/api/match'
        isArray: true

      create:
        method: 'POST'
        params:
          match: '@match'
        url: '/api/match'

      current:
        method: 'GET'
        params: {}
        url: '/api/match/current'

    _index = (cb) ->
      resource.index(
        {}
      , (match) ->
        cb null, match
      , (err) ->
        cb err.data
      ).$promise

    _create = (data, cb) ->
      resource.create(
        match: data
      , (match) ->
        cb null, match
      , (err) ->
        cb err.data
      ).$promise

    _current = (cb) ->
      resource.current(
        {}
      , (match) ->
        cb null, match
      , (err) ->
        cb err.data
      ).$promise


    return {
      index: (cb) ->
        _index(cb)
      create: (data, cb) ->
        _create(data, cb)
      current: (cb) ->
        _current(cb)
    }