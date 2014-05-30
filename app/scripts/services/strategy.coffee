"use strict"

angular.module("strategistApp")
  .factory "Strategy", ($resource) ->
    resource = $resource "", {},
      index:
        method: 'GET'
        params: {}
        url: '/api/strategies'
        isArray: true

      sort:
        method: 'GET'
        params:
          sort_by: '@sort'
        url: '/api/strategies/sort/:sort_by'
        isArray: true

      last_published:
        method: 'GET'
        params:
          user_id: '@user_id'
        url: '/api/strategies/last/published/:user_id'

      more_votes:
        method: 'GET'
        params:
          user_id: '@user_id'
        url: '/api/strategies/votes/:user_id'

      moderate:
        method: 'GET'
        params: {}
        url: '/api/strategies/moderate'
        isArray: true

      approved:
        method: 'PUT'
        params:
          id: '@id'
          decision: 'approved'
        url: '/api/strategies/moderate/:id/:decision'

      rejected:
        method: 'PUT'
        params:
          id: '@id'
          decision: 'rejected'
        url: '/api/strategies/moderate/:id/:decision'

      show:
        method: 'GET'
        params:
          id: '@id'
        url: '/api/strategies/:id'

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

      _sort = (sort, cb) ->
        resource.sort(
          sort_by: sort
        , (strategies) ->
          cb null, strategies
        , (err) ->
          cb err.data
        ).$promise

      _last_published = (user_id, cb) ->
        resource.last_published(
          user_id: user_id
        , (strategy) ->
          cb null, strategy
        , (err) ->
          cb err.data
        ).$promise

      _more_votes = (user_id, cb) ->
        resource.more_votes(
          user_id: user_id
        , (strategy) ->
          cb null, strategy
        , (err) ->
          cb err.data
        ).$promise

      _moderate = (cb) ->
        resource.moderate(
          {}
        , (strategies) ->
          cb null, strategies
        , (err) ->
          cb err.data
        ).$promise

      _approved = (id, cb) ->
        resource.approved(
          id: id
        , (strategy) ->
          cb null, strategy
        , (err) ->
          cb err.data
        ).$promise

      _rejected = (id, cb) ->
        resource.rejected(
          id: id
        , (strategy) ->
          cb null, strategy
        , (err) ->
          cb err.data
        ).$promise

      _show = (id, cb) ->
        resource.show(
          id: id
        , (strategy) ->
          cb null, strategy
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
      sort: (sort, cb) ->
        _sort(sort, cb)
      last_published: (user_id, cb) ->
        _last_published(user_id, cb)
      more_votes: (user_id, cb) ->
        _more_votes(user_id, cb)
      moderate: (cb) ->
        _moderate(cb)
      approved: (id, cb) ->
        _approved(id, cb)
      rejected: (id, cb) ->
        _rejected(id, cb)
      show: (id, cb) ->
        _show(id, cb)
      create: (data, cb) ->
        _create(data, cb)
    }