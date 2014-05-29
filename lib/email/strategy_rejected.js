'use strict';

module.exports = {
  html: "  \n<p align='left' class='article-title'><singleline label='Title'><%= title %></singleline></p>\n<div align='left' class='article-content'>\n  <multiline label='Description'>\n    <p>\n      \n      <strong><%= user.name %></strong>, hemos revisado la mejor táctica que ingresaste y no será publicada, así que prueba una \n      táctica diferente, siempre teniendo en mente el <a href=\"<%= link.terms %>\">fair play</a>, para \n      asegurar que podrás participar en el sorteo del <strong><%= sweepstake.date %> hrs</strong>. ¡Son cosas del fútbol!\n      \n    </p>\n  </multiline>\n\n  <a href=\"<%= link.strategy %>\">Publica una nueva táctica</a>\n</div>\n",
  text: "\n  <%= user.name %>, hemos revisado la mejor táctica que ingresaste y no será publicada, así que prueba una \n  táctica diferente, siempre teniendo en mente el fair play (link a Bases del concurso), para \n  asegurar que podrás participar en el sorteo del <%= sweepstake.date %> hrs. ¡Son cosas del fútbol!\n\n  Publica una nueva táctica: <%= link.strategy %>\n  fair play: <%= link.terms %>\n"
};
