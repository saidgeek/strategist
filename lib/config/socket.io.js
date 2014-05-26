'use strict';

module.exports = function(io, server) {

  var _io = io.listen(server, { log: false });

  _io.sockets.on('connection', function(sckt) {

    // GLOBALES
    sckt.on('register.site.strategy.globals', function() {
      sckt.join('strategy/new');
      sckt.join('stratey/add/vote')
    });

  });

  global.io = _io;

};