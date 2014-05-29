'use strict'

# Empiezan los 15 minutos que definen todo, ¡sólo habrá un vencedor!
# <strong><%= user.name %></strong>
# <strong><%= sweepstake.data %> hrs</strong>

module.exports =

  html: """
      
    <p align='left' class='article-title'><singleline label='Title'><%= title %></singleline></p>
    <div align='left' class='article-content'>
      <multiline label='Description'>
        <p>
          
          Publicaste tus mejores tácticas para mostrar a la comunidad futbolera que eres un estratega con 
          potencial y el momento de la verdad ha llegado: ¡estamos realizando el sorteo 
          del <strong><%= sweepstake.date %> hrs</strong> en vivo y puedes ser el ganador de este encuentro!

          Te avisaremos en los próximos minutos si eres el mejor y la copa de este concurso 
          es tuya<% if (sweepstake.next) { %> y, si no eres el triunfador, podrás participar en nuestro siguiente 
          sorteo del <strong><%= sweepstake.next %> hrs</strong>. ¡El fútbol siempre da revanchas!<% } else { %>.<% } %>
          
        </p>
      </multiline>

      <a href="<%= link.sweepstake %>">Ir al sorteo</a>
    </div>

  """

  text: """
  
    Publicaste tus mejores tácticas para mostrar a la comunidad futbolera que eres un estratega con 
    potencial y el momento de la verdad ha llegado: ¡estamos realizando el sorteo 
    del <%= sweepstake.date %> hrs en vivo y puedes ser el ganador de este encuentro!

    Te avisaremos en los próximos minutos si eres el mejor y la copa de este concurso 
    es tuya<% if (sweepstake.next) { %> y, si no eres el triunfador, podrás participar en nuestro siguiente 
          sorteo del <%= sweepstake.next %> hrs. ¡El fútbol siempre da revanchas!<% } else { %>.<% } %>

    Ir a el sorteo: <%= link.sweepstale %>

  """