'use strict'

angular.module('strategistApp')
  .directive 'sgkInsertNewline', ($timeout) ->
    restrict: 'A'
    scope: {}
    link: ($scope, $element, $attrs) ->
      text = $attrs.sgkInsertNewline || ''
      length = $attrs.sgklength || 40
      new_text = ""

      if /\s+/g.test(text)
        text_array = text.split(' ')
        for ta in text_array
          if ta.length > length
            count = 0
            for t, i in ta.split('')
              count += 1
              new_text += t
              if count is length
                new_text += "\n"
                count = 0
          else
            new_text += " #{ta}"
      else
        count = 0
        for t in text.split('')
          new_text += t
          count++
          if count is length
            new_text += "\n"
            count = 0
        
      $element.html new_text
