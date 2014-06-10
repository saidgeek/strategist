(function() {
  "use strict";
  angular.module("strategistApp").factory("Vote", function($resource) {
    var resource, _create;
    resource = $resource("", {}, {
      create: {
        method: 'POST',
        params: {
          user_id: '@user_id',
          sweepstake_id: '@sweepstake_id',
          strategy_id: '@strategy_id',
          voted_by: '@voted_by'
        },
        url: '/api/vote/:user_id/:strategy_id/:sweepstake_id/:voted_by'
      }
    });
    return _create = function(user_id, sweepstake_id, strategy_id, voted_by, cb) {
      return resource.create({
        user_id: user_id,
        sweepstake_id: sweepstake_id,
        strategy_id: strategy_id,
        voted_by: voted_by
      }, function(voted) {
        return cb(null, voted);
      }, function(err) {
        return cb(err.data);
      }).$promise;
    };
  });

  return {
    create: function(user_id, sweepstake_id, strategy_id, voted_by, cb) {
      return _create(user_id, sweepstake_id, strategy_id, voted_by, cb);
    }
  };

}).call(this);

/*
//@ sourceMappingURL=vote.js.map
*/