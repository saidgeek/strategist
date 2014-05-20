'use strict'

angular.module('strategistApp')
  .filter 'removePlus', ->
    return (text) ->
      return text.replace(/\+/g, ' ')