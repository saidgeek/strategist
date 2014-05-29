'use strict';

module.exports = function(io, server) {

  var _io = io.listen(server, { log: false });

  _io.configure(function () { 
    _io.set("transports", ["xhr-polling"]); 
    _io.set("polling duration", 10); 
  });

  _io.sockets.on('connection', function(sckt) {

    // GLOBALES
    sckt.on('register.strategy.globals', function() {
      sckt.join('strategy/new');
      sckt.join('strategy/add/vote')
      sckt.join('strategy/moderating')
    });

    sckt.on('register.site.strategy.moderate', function(data) {
      if (typeof(data.id) !== 'undefined') {
        sckt.join('strategy/moderate/'+data.id);
      };
    });

  });

  global.io = _io;

};