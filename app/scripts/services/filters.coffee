'use strict'

angular.module('strategistApp')
  .filter 'removePlus', ->
    return (text) ->
      if text?
        return text.replace(/\+/g, ' ')

  .filter 'formatDate', ->
    return (date) ->
      return moment(date).format('D/M/YYYY HH:mm')

.filter 'Date', ->
    return (date) ->
      return moment(date).format('D/M/YYYY')