'use strict'

angular.module('strategistApp')
  .filter 'removePlus', ->
    return (text) ->
      return text.replace(/\+/g, ' ')

  .filter 'formatDate', ->
    return (date) ->
      return moment(date).format('D/M/YYYY HH:mm')