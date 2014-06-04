"use strict"

angular.module("strategistApp")
  .factory "Vote", ($resource) ->
    resource = $resource "", {},
      create:
        method: 'POST'
        params: 
          user_id: '@user_id'
          sweepstake_id: '@sweepstake_id'
          strategy_id: '@strategy_id'
        url: '/api/vote/:user_id/:strategy_id/:sweepstake_id'

    _create = (user_id, sweepstake_id, strategy_id, cb) ->
      resource.create(
        user_id: user_id
        sweepstake_id: sweepstake_id
        strategy_id: strategy_id
      , (voted) ->
        cb null, voted
      , (err) ->
        cb err.data
      ).$promise

  return {
    create: (user_id, sweepstake_id, strategy_id, cb) ->
      _create(user_id, sweepstake_id, strategy_id, cb)
  }