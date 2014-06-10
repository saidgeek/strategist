(function() {
  'use strict';
  angular.module('strategistApp').factory('Session', function($resource) {
    return $resource('/api/session/');
  });

}).call(this);

/*
//@ sourceMappingURL=session.js.map
*/