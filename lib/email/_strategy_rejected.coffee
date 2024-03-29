'use strict'

layout = require './layout'

# Falta, ¡prueba otra táctica!
# <strong><%= user.name %></strong>
# <strong><%= sweepstake.data %> hrs</strong>

module.exports =

  html: """

    #{ layout.header }
      
    <p align='left' class='article-title'><singleline label='Title'><%= title %></singleline></p>
    <div align='left' class='article-content'>
      <multiline label='Description'>
        <p>
          
          <strong><%= user.name %></strong>, hemos revisado la mejor táctica que ingresaste y no será publicada, así que prueba una 
          táctica diferente, siempre teniendo en mente el <a href="<%= link.terms %>">fair play</a>, para 
          asegurar que podrás participar en el sorteo del <strong><%= sweepstake.date %> hrs</strong>. ¡Son cosas del fútbol!
          
        </p>
      </multiline>

      <a href="<%= link.strategy %>">Publica una nueva táctica</a>
    </div>

    #{ layout.footer }

  """

  text: """
  
    <%= user.name %>, hemos revisado la mejor táctica que ingresaste y no será publicada, así que prueba una 
    táctica diferente, siempre teniendo en mente el fair play (link a Bases del concurso), para 
    asegurar que podrás participar en el sorteo del <%= sweepstake.date %> hrs. ¡Son cosas del fútbol!

    Publica una nueva táctica: <%= link.strategy %>
    fair play: <%= link.terms %>

  """