"use strict"

angular.module("strategistApp")
  .factory "Vote", ($resource) ->
    resource = $resource "", {},
      create:
        method: 'POST'
        params: 
          user_id: '@user_id'
          match_id: '@match_id'
          strategy_id: '@strategy_id'
        url: '/api/vote/:user_id/:strategy_id/:match_id'

    _create = (user_id, match_id, strategy_id, cb) ->
      resource.create(
        user_id: user_id
        match_id: match_id
        strategy_id: strategy_id
      , ->
        cb null
      , (err) ->
        cb err.data
      ).$promise

  return {
    create: (user_id, match_id, strategy_id, cb) ->
      _create(user_id, match_id, strategy_id, cb)
  }