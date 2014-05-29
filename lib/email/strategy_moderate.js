'use strict';

module.exports = {
  html: "  \n<p align='left' class='article-title'><singleline label='Title'><%= title %></singleline></p>\n<div align='left' class='article-content'>\n  <multiline label='Description'>\n    <p>\n      \n      <strong><%= user.name %></strong>, ingresaste tu mejor táctica pero tendremos que revisarla antes \n      de aprobar o rechazar su publicación. Te avisaremos apenas tengamos novedades \n      y recuerda que puedes publicar más de una táctica, siempre con \n      el <a href=\"<%= link.terms %>\">fair play</a> en mente, para concursar en el \n      sorteo del <strong><%= sweepstake.date %> hrs</strong>.\n\n    </p>\n  </multiline>\n\n  <a href=\"<%= link.strategy %>\">Publica una nueva táctica</a>\n</div>\n",
  text: "<%= user.name %>, ingresaste tu mejor táctica pero tendremos que revisarla antes \nde aprobar o rechazar su publicación. Te avisaremos apenas tengamos novedades \ny recuerda que puedes publicar más de una táctica, siempre con \nel fair play en mente, para concursar en el \nsorteo del <%= sweepstake.date %> hrs.\n\nPublica una nueva táctica: <%= link.strategy %>\nfair play: <%= link.terms %>"
};
