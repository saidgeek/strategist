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

    # return {
    # }




