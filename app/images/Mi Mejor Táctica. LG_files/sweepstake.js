(function() {
  "use strict";
  angular.module("strategistApp").factory("Sweepstake", function($resource) {
    var resource, _create, _current, _index, _remove, _show;
    resource = $resource("", {}, {
      index: {
        method: 'GET',
        params: {},
        url: '/api/sweepstakes',
        isArray: true
      },
      show: {
        method: 'GET',
        params: {
          id: '@id'
        },
        url: '/api/sweepstakes/:id'
      },
      current: {
        method: 'GET',
        params: {},
        url: '/api/sweepstakes/current'
      },
      create: {
        method: 'POST',
        params: {
          sweepstake: '@sweepstake'
        },
        url: '/api/sweepstakes'
      },
      remove: {
        method: 'DELETE',
        params: {
          id: '@id'
        },
        url: '/api/sweepstakes/:id'
      }
    });
    _index = function(cb) {
      return resource.index({}, function(sweepstakes) {
        return cb(null, sweepstakes);
      }, function(err) {
        return cb(err.data);
      }).$promise;
    };
    _show = function(id, cb) {
      return resource.show({
        id: id
      }, function(sweepstake) {
        return cb(null, sweepstake);
      }, function(err) {
        return cb(err.data);
      }).$promise;
    };
    _current = function(cb) {
      return resource.current({}, function(sweepstake) {
        return cb(null, sweepstake);
      }, function(err) {
        return cb(err.data);
      }).$promise;
    };
    _create = function(data, cb) {
      return resource.create({
        sweepstake: data
      }, function(sweepstake) {
        return cb(null, sweepstake);
      }, function(err) {
        return cb(err.data);
      }).$promise;
    };
    _remove = function(id, cb) {
      return resource.remove({
        id: id
      }, function(sweepstake) {
        return cb(null, sweepstake);
      }, function(err) {
        return cb(err.data);
      }).$promise;
    };
    return {
      index: function(cb) {
        return _index(cb);
      },
      show: function(id, sb) {
        return _show(id, cb);
      },
      current: function(cb) {
        return _current(cb);
      },
      create: function(data, cb) {
        return _create(data, cb);
      },
      remove: function(id, cb) {
        return _remove(id, cb);
      }
    };
  });

}).call(this);

/*
//@ sourceMappingURL=sweepstake.js.map
*/