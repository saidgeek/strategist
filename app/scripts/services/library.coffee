"use strict"

angular.module("strategistApp")
  .factory "Library", ($resource) ->
    resource = $resource "", {},
      index:
        method: 'GET'
        params: {}
        url: '/api/libraries'
        isArray: true

      create:
        method: 'POST'
        params:
          library: '@library'
        url: '/api/library'

      remove:
        method: 'DELETE'
        params:
          id: '@id'
        url: '/api/library/:id'

    _index = (cb) ->
      resource.index(
        {}
      , (_libraries) ->
          cb null, _libraries
      , (err) ->
          cb err.data
      ).$promise

    _create = (library, cb) ->
      resource.create(
        library: library
      , (library) ->
        cb null, library
      , (err) ->
        cb err.data
      ).$promise

    _remove = (id, cb) ->
      resource.remove(
        id: id
      , (res) ->
        cb null, res
      , (err) ->
        cb err.data 
      ).$promise

    return {
      index: (cb) ->
        _index(cb)
      create: (library, cb) ->
        _create(library, cb)
      remove: (id, cb) ->
        _remove(id, cb)
    }