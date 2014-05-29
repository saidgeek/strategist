'use strict'

layout = require './layout'

# Alto, ¡off side!

module.exports =

  html: """

    #{ layout.header }
      
    <p align='left' class='article-title'><singleline label='Title'><%= title %></singleline></p>
    <div align='left' class='article-content'>
      <multiline label='Description'>
        <p>
          
          <strong><%= user.name %></strong>, ingresaste tu mejor táctica pero tendremos que revisarla antes 
          de aprobar o rechazar su publicación. Te avisaremos apenas tengamos novedades 
          y recuerda que puedes publicar más de una táctica, siempre con 
          el <a href="<%= link.terms %>">fair play</a> en mente, para concursar en el 
          sorteo del <strong><%= sweepstake.date %> hrs</strong>.

        </p>
      </multiline>

      <a href="<%= link.strategy %>">Publica una nueva táctica</a>
    </div>

    #{ layout.footer }

  """

  text: """
    <%= user.name %>, ingresaste tu mejor táctica pero tendremos que revisarla antes 
    de aprobar o rechazar su publicación. Te avisaremos apenas tengamos novedades 
    y recuerda que puedes publicar más de una táctica, siempre con 
    el fair play en mente, para concursar en el 
    sorteo del <%= sweepstake.date %> hrs.
    
    Publica una nueva táctica: <%= link.strategy %>
    fair play: <%= link.terms %>
  """