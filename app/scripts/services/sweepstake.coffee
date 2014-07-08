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

      update:
        method: 'PUT'
        params:
          id: '@id'
        data:
          sweepstake: '@sweepstake'
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

      is_active:
        method: 'PUT'
        params:
          id: '@id'
        url: '/api/sweepstakes/:id/active'

      is_closed:
        method: 'PUT'
        params:
          id: '@id'
        url: '/api/sweepstakes/:id/closed'

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

    _update = (id, sweepstake, cb) ->
      resource.update(
        id: id
        sweepstake: sweepstake
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
      , () ->
        cb()
      , (err) ->
        cb err.data
      ).$promise

    _is_active = (id, cb) ->
      resource.is_active(
        id: id
      , ->
        cb null
      , (err) ->
        cb err
      ).$promise

    _is_closed = (id, cb) ->
      resource.is_closed(
        id: id
      , ->
        cb null
      , (err) ->
        cb err
      ).$promise

    return {
      index: (cb) ->
        _index(cb)
      show: (id, cb) ->
        _show(id, cb)
      update: (id, sweepstake, cb) ->
        _update(id, sweepstake, cb)
      current: (cb) ->
        _current(cb)
      create: (data, cb) ->
        _create(data, cb)
      remove: (id, cb) ->
        _remove(id, cb)
      is_active: (id, cb) ->
        _is_active(id, cb)
      is_closed: (id, cb) ->
        _is_closed(id, cb)

    }