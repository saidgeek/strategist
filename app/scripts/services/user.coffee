"use strict"

angular.module("strategistApp")
  .factory "User", ($resource) ->
    resource = $resource "", {},
      # update:
      #   method: "PUT"
      #   params: {}

      # get:
      #   method: "GET"
      #   params:
      #     id: "me"
      show:
        method: 'GET'
        params:
          id: '@id'
        url: '/api/users/:id'

      contestants:
        method: 'GET'
        url: '/api/users/contestants'
        isArray: true

      update:
        method: 'PUT'
        params:
          id: '@id'
        data:
          user: '@user'
        url: '/api/users/:id'

    _contestants = (cb) ->
      resource.contestants(
        {}
      , (contestants) ->
        cb null, contestants
      , (err) ->
        cb err.data
      ).$promise

    _show = (id, cb) ->
      resource.show(
        id: id
      , (user) ->
        cb null, user
      , (err) ->
        cb err.data
      ).$promise

    _update = (id, data, cb) ->
      resource.update(
        id: id
        user: data
      , (user) ->
        cb null, user
      , (err) ->
        cb err, data
      ).$promise

    return {
      contestants: (cb) ->
        _contestants(cb)
      show: (id, cb) ->
        _show(id, cb)
      update: (id, data, cb) ->
        _update(id, data, cb)
    }




