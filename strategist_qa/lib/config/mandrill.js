'use strict';

module.exports = function(mandrill, credentials) {
  var mandrill_client = new mandrill.Mandrill(credentials.key);

  global.mandrill = mandrill_client;
};