'use strict';

var layout;

layout = require('./layout');

module.exports = {
  html: "\n" + layout.header + "\n\n<p align='left' class='article-title'><singleline label='Title'><%= title %></singleline></p>\n<div align='left' class='article-content'>\n  <multiline label='Description'>\n    <p>\n      \n      <strong><%= user.name %></strong>, hemos revisado la mejor táctica que ingresaste en el sorteo \n      del <strong><%= sweepstake.date %> hrs</strong> y ha sido aprobada, puedes verla en el sitio \n      web y comenzar a invitar a tus amigos a votar por ella para tener más \n      posibilidades de ganar.\n      \n    </p>\n  </multiline>\n\n  <a href=\"<%= link.votes %>\">Ir listado de tácticas</a>\n</div>\n\n" + layout.footer + "\n",
  text: "\n  <%= user.name %>, hemos revisado la mejor táctica que ingresaste en el sorteo \n  del <%= sweepstake.date %> hrs y ha sido aprobada, puedes verla en el sitio \n  web y comenzar a invitar a tus amigos a votar por ella para tener más \n  posibilidades de ganar. \n\n  Publica una nueva táctica: <%= link.strategy %>\n"
};