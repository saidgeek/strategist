'use strict'

angular.module('strategistApp')
  .directive 'sgkGalery', ($timeout, $compile, $http) ->
    restrict: 'A'
    scope: {}
    # templateUrl: 'directives/site/galery'
    replace: true
    link: ($scope, $element, $attrs) ->
      type = $attrs.sgkGalery || 'image' # video
      file = $attrs.sgkFile

      $content = """
        <img src="images/#{file}" alt="">
      """

      if type is 'video'
        $content = """
          <iframe id="player1" 
          src="//player.vimeo.com/video/#{ file }?api=1&amp;player_id=player1&amp;color=ee2642&amp;title=0&amp;portrait=0&amp;byline=0&amp;badge=0&amp;autoplay=1" 
          width="660" height="371" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>  
        """
      

      $element.on 'click', (e) =>
        e.preventDefault()

        $http.get('directives/site/galery').success (html) ->
          $template = angular.element(html)

          $template.on 'click', '.cerrar', (e) ->
            e.preventDefault()
            $template.remove()
            return false

          $template.find('.centrar').append $content
        
          angular.element('body').append $template



        return false


      # $el = $element.find('.cerrar').next()
      # console.log $el