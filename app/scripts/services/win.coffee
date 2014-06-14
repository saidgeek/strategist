"use strict"

angular.module("strategistApp")
  .factory "Winner", ($resource) ->
    resource = $resource "", {},
      show:
        method: 'GET'
        params: 
          id: '@id'
        url: '/api/win/:id'

    _show = (id, cb) ->
      resource.show(
        id: id
      , (win) ->
        cb null, win
      , (err) ->
        cb err.data
      ).$promise

    return {
      show: (id, cb) ->
        _show(id, cb)
    }