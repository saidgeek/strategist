(function() {
  "use strict";
  angular.module("strategistApp").factory("Strategy", function($resource) {
    var resource, _approved, _create, _index, _last_published, _moderate, _more_votes, _rejected, _show, _sort;
    resource = $resource("", {}, {
      index: {
        method: 'GET',
        params: {},
        url: '/api/strategies',
        isArray: true
      },
      sort: {
        method: 'GET',
        params: {
          sort_by: '@sort'
        },
        url: '/api/strategies/sort/:sort_by',
        isArray: true
      },
      last_published: {
        method: 'GET',
        params: {
          user_id: '@user_id'
        },
        url: '/api/strategies/last/published/:user_id'
      },
      more_votes: {
        method: 'GET',
        params: {
          user_id: '@user_id'
        },
        url: '/api/strategies/votes/:user_id'
      },
      moderate: {
        method: 'GET',
        params: {},
        url: '/api/strategies/moderate',
        isArray: true
      },
      approved: {
        method: 'PUT',
        params: {
          id: '@id',
          decision: 'approved'
        },
        url: '/api/strategies/moderate/:id/:decision'
      },
      rejected: {
        method: 'PUT',
        params: {
          id: '@id',
          decision: 'rejected'
        },
        url: '/api/strategies/moderate/:id/:decision'
      },
      show: {
        method: 'GET',
        params: {
          id: '@id'
        },
        url: '/api/strategies/:id'
      },
      create: {
        method: 'POST',
        params: {
          strategy: '@strategy'
        },
        url: '/api/strategies'
      }
    }, _index = function(cb) {
      return resource.index({}, function(strategies) {
        return cb(null, strategies);
      }, function(err) {
        return cb(err.data);
      }).$promise;
    }, _sort = function(sort, cb) {
      return resource.sort({
        sort_by: sort
      }, function(strategies) {
        return cb(null, strategies);
      }, function(err) {
        return cb(err.data);
      }).$promise;
    }, _last_published = function(user_id, cb) {
      return resource.last_published({
        user_id: user_id
      }, function(strategy) {
        return cb(null, strategy);
      }, function(err) {
        return cb(err.data);
      }).$promise;
    }, _more_votes = function(user_id, cb) {
      return resource.more_votes({
        user_id: user_id
      }, function(strategy) {
        return cb(null, strategy);
      }, function(err) {
        return cb(err.data);
      }).$promise;
    }, _moderate = function(cb) {
      return resource.moderate({}, function(strategies) {
        return cb(null, strategies);
      }, function(err) {
        return cb(err.data);
      }).$promise;
    }, _approved = function(id, cb) {
      return resource.approved({
        id: id
      }, function(strategy) {
        return cb(null, strategy);
      }, function(err) {
        return cb(err.data);
      }).$promise;
    }, _rejected = function(id, cb) {
      return resource.rejected({
        id: id
      }, function(strategy) {
        return cb(null, strategy);
      }, function(err) {
        return cb(err.data);
      }).$promise;
    }, _show = function(id, cb) {
      return resource.show({
        id: id
      }, function(strategy) {
        return cb(null, strategy);
      }, function(err) {
        return cb(err.data);
      }).$promise;
    }, _create = function(data, cb) {
      return resource.create({
        strategy: data
      }, function() {
        return cb(null);
      }, function(err) {
        return cb(err.data);
      }).$promise;
    });
    return {
      index: function(cb) {
        return _index(cb);
      },
      sort: function(sort, cb) {
        return _sort(sort, cb);
      },
      last_published: function(user_id, cb) {
        return _last_published(user_id, cb);
      },
      more_votes: function(user_id, cb) {
        return _more_votes(user_id, cb);
      },
      moderate: function(cb) {
        return _moderate(cb);
      },
      approved: function(id, cb) {
        return _approved(id, cb);
      },
      rejected: function(id, cb) {
        return _rejected(id, cb);
      },
      show: function(id, cb) {
        return _show(id, cb);
      },
      create: function(data, cb) {
        return _create(data, cb);
      }
    };
  });

}).call(this);

/*
//@ sourceMappingURL=strategy.js.map
*/