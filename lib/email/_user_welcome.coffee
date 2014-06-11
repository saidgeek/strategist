'use strict'

layout = require './layout'

# No hay falta, ¡el juego sigue!

module.exports =

  html: """
    
    #{ layout.header }

    <p align='left' class='article-title'><singleline label='Title'><%= title %></singleline></p>
    <div align='left' class='article-content'>
      <multiline label='Description'>
        <p>
          
          Bienvenido, <strong><%= user.name %></strong> comparte tu mejor táctica para este encuentro en 140 
          caracteres y participa por un lg smart tv + 1 año de estadio cdf.
          
        </p>
        <p>Mientras más participes y más votos obtengas, más posibilidades tienes de ganar.</p>
      </multiline>

      <a href="<%= link.strategy %>">Ir a concursar</a>
    </div>

    #{ layout.footer }

  """

  text: """
  
    Bienvenido, <strong><%= user.name %></strong> comparte tu mejor táctica para este encuentro en 140 
    caracteres y participa por un lg smart tv + 1 año de estadio cdf.
    Mientras más participes y más votos obtengas, más posibilidades tienes de ganar.

    Publica una nueva táctica: <%= link.strategy %>

  """