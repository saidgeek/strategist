'use strict';

var layout;

layout = require('./layout');

module.exports = {
  html: "\n" + layout.header + "\n  \n<p align='left' class='article-title'><singleline label='Title'><%= title %></singleline></p>\n<div align='left' class='article-content'>\n  <multiline label='Description'>\n    <p>\n      \n      Publicaste tus mejores tácticas para mostrar a la comunidad futbolera que eres un estratega con \n      potencial y el momento de la verdad ha llegado: ¡estamos realizando el sorteo \n      del <strong><%= sweepstake.date %> hrs</strong> en vivo y puedes ser el ganador de este encuentro!\n\n      Te avisaremos en los próximos minutos si eres el mejor y la copa de este concurso \n      es tuya<% if (sweepstake.next) { %> y, si no eres el triunfador, podrás participar en nuestro siguiente \n      sorteo del <strong><%= sweepstake.next %> hrs</strong>. ¡El fútbol siempre da revanchas!<% } else { %>.<% } %>\n      \n    </p>\n  </multiline>\n\n  <a href=\"<%= link.sweepstake %>\">Ver ganador</a>\n</div>\n\n" + layout.footer + "\n",
  text: "\n  Publicaste tus mejores tácticas para mostrar a la comunidad futbolera que eres un estratega con \n  potencial y el momento de la verdad ha llegado: ¡estamos realizando el sorteo \n  del <%= sweepstake.date %> hrs en vivo y puedes ser el ganador de este encuentro!\n\n  Te avisaremos en los próximos minutos si eres el mejor y la copa de este concurso \n  es tuya<% if (sweepstake.next) { %> y, si no eres el triunfador, podrás participar en nuestro siguiente \n        sorteo del <%= sweepstake.next %> hrs. ¡El fútbol siempre da revanchas!<% } else { %>.<% } %>\n\n  Ver al ganador: <%= link.sweepstale %>\n"
};
