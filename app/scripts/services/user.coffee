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
      accept_terms:
        method: 'PUT'
        params:
          id: '@id'
        data:
          user: '@user'
        url: '/api/users/:id/terms'

    _accept_terms = (id, data, cb) ->
      resource.accept_terms(
        id: id
        user: data
      , (userInfo) ->
        cb null, userInfo
      , (err) ->
        cb err.data
      ).$promise

    return {
      accept_terms: (id, data, cb) ->
        _accept_terms(id, data, cb)
    }




