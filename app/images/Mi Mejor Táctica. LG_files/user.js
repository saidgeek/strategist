(function() {
  "use strict";
  angular.module("strategistApp").factory("User", function($resource) {
    var resource, _show, _update;
    resource = $resource("", {}, {
      show: {
        method: 'GET',
        params: {
          id: '@id'
        },
        url: '/api/users/:id'
      },
      update: {
        method: 'PUT',
        params: {
          id: '@id'
        },
        data: {
          user: '@user'
        },
        url: '/api/users/:id'
      }
    });
    _show = function(id, cb) {
      return resource.show({
        id: id
      }, function(user) {
        return cb(null, user);
      }, function(err) {
        return cb(err.data);
      }).$promise;
    };
    _update = function(id, data, cb) {
      return resource.update({
        id: id,
        user: data
      }, function(user) {
        return cb(null, user);
      }, function(err) {
        return cb(err, data);
      }).$promise;
    };
    return {
      show: function(id, cb) {
        return _show(id, cb);
      },
      update: function(id, data, cb) {
        return _update(id, data, cb);
      }
    };
  });

}).call(this);

/*
//@ sourceMappingURL=user.js.map
*/