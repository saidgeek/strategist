"use strict"

angular.module("strategistApp")
  .factory "Sweepstake", ($resource) ->
    resource = $resource "", {},
      index:
        method: 'GET'
        params: {}
        url: '/api/sweepstakes'
        isArray: true

      show:
        method: 'GET'
        params:
          id: '@id'
        url: '/api/sweepstakes/:id'

      current:
        method: 'GET'
        params: {}
        url: '/api/sweepstakes/current'

      create:
        method: 'POST'
        params:
          sweepstake: '@sweepstake'
        url: '/api/sweepstakes'

      remove:
        method: 'DELETE'
        params:
          id: '@id'
        url: '/api/sweepstakes/:id'

    _index = (cb) ->
      resource.index(
        {}
      , (sweepstakes) ->
        cb null, sweepstakes
      , (err) ->
        cb err.data
      ).$promise

    _show = (id, cb) ->
      resource.show(
        id: id
      , (sweepstake) ->
        cb null, sweepstake
      , (err) ->
        cb err.data
      ).$promise

    _current = (cb) ->
      resource.current(
        {}
      , (sweepstake) ->
        cb null, sweepstake
      , (err) ->
        cb err.data
      ).$promise 

    _create = (data, cb) ->
      resource.create(
        sweepstake: data
      , (sweepstake) ->
        cb null, sweepstake
      , (err) ->
        cb err.data
      ).$promise

    _remove = (id, cb) ->
      resource.remove(
        id: id
      , (sweepstake) ->
        cb null, sweepstake
      , (err) ->
        cb err.data
      ).$promise

    return {
      index: (cb) ->
        _index(cb)
      show: (id, cb) ->
        _show(id, cb)
      current: (cb) ->
        _current(cb)
      create: (data, cb) ->
        _create(data, cb)
      remove: (id, cb) ->
        _remove(id, cb)

    }