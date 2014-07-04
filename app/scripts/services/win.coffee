"use strict"

angular.module("strategistApp")
  .factory "Winner", ($resource) ->
    resource = $resource "", {},
      show:
        method: 'GET'
        params: 
          id: '@id'
        url: '/api/win/:id'

      select:
        match: 'PUT'
        params:
          user_id: '@user_id'
          sweepstake_id: '@sweepstake_id'
        url: '/api/win/:user_id/:sweepstake_id'

    _show = (id, cb) ->
      resource.show(
        id: id
      , (win) ->
        cb null, win
      , (err) ->
        cb err.data
      ).$promise

    _select = (user_id, sweepstake_id, cb) ->
      resource.select(
        user_id: user_id
        sweepstake_id: sweepstake_id
      , ->
        cb()
      , (err) ->
        cb err.data
      ).$promise

    return {
      show: (id, cb) ->
        _show(id, cb)
      select: (user_id, sweepstake_id, cb) ->
        _select(user_id, sweepstake_id, cb)
    }