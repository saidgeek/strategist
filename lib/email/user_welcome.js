'use strict';

var layout;

layout = require('./layout');

module.exports = {
  html: "\n" + layout.header + "\n\n<p align='left' class='article-title'><singleline label='Title'><%= title %></singleline></p>\n<div align='left' class='article-content'>\n  <multiline label='Description'>\n    <p>\n      \n      Bienvenido, <strong><%= user.name %></strong> comparte tu mejor táctica para este encuentro en 140 \n      caracteres y participa por un lg smart tv + 1 año de estadio cdf.\n      \n    </p>\n    <p>Mientras más participes y más votos obtengas, más posibilidades tienes de ganar.</p>\n  </multiline>\n\n  <a href=\"<%= link.strategy %>\">Ir a concursar</a>\n</div>\n\n" + layout.footer + "\n",
  text: "\n  Bienvenido, <strong><%= user.name %></strong> comparte tu mejor táctica para este encuentro en 140 \n  caracteres y participa por un lg smart tv + 1 año de estadio cdf.\n  Mientras más participes y más votos obtengas, más posibilidades tienes de ganar.\n\n  Publica una nueva táctica: <%= link.strategy %>\n"
};
