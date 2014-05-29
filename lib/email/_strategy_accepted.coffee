'use strict'

# No hay falta, ¡el juego sigue!

module.exports =

  html: """
      
    <p align='left' class='article-title'><singleline label='Title'><%= title %></singleline></p>
    <div align='left' class='article-content'>
      <multiline label='Description'>
        <p>
          
          <strong><%= user.name %></strong>, hemos revisado la mejor táctica que ingresaste en el sorteo 
          del <strong><%= sweepstake.date %> hrs</strong> y ha sido aprobada, puedes verla en el sitio 
          web y comenzar a invitar a tus amigos a votar por ella para tener más 
          posibilidades de ganar.
          
        </p>
      </multiline>

      <a href="<%= link.votes %>">Ir listado de tácticas</a>
    </div>

  """

  text: """
  
    <%= user.name %>, hemos revisado la mejor táctica que ingresaste en el sorteo 
    del <%= sweepstake.date %> hrs y ha sido aprobada, puedes verla en el sitio 
    web y comenzar a invitar a tus amigos a votar por ella para tener más 
    posibilidades de ganar. 

    Publica una nueva táctica: <%= link.strategy %>

  """