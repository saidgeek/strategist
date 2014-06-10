(function() {
  'use strict';
  angular.module('strategistApp').controller('WinCtrl', function($scope, $rootScope, $compile, $http, Sweepstake) {
    var render;
    $scope.sweepstakes = null;
    $scope.sweepstake = null;
    Sweepstake.index(function(err, sweepstakes) {
      var s, _i, _len, _results;
      if (!err) {
        $scope.sweepstakes = sweepstakes;
        _results = [];
        for (_i = 0, _len = sweepstakes.length; _i < _len; _i++) {
          s = sweepstakes[_i];
          if (s.is_active) {
            render(s);
            break;
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      }
    });
    render = function(sweepstake) {
      var aword, query, template,
        _this = this;
      query = "#sweepstake_" + sweepstake._id + " a";
      $scope.sweepstake = sweepstake;
      template = 'next_aword';
      aword = '_cdf';
      if ($scope.sweepstake.type === 'GROUP') {
        aword = '_tv';
      }
      if ($scope.sweepstake.winner != null) {
        template = 'winner';
      }
      angular.element('.tabs a.active').removeClass('active');
      angular.element(query).addClass('active');
      return $http.get("directives/site/win/" + template + aword).success(function(data) {
        var $el;
        $el = angular.element(data);
        angular.element('.content_tab .hinchas').html($el);
        return $compile($el.contents())($scope);
      });
    };
    $scope.tab = function(sweepstake) {
      return render(sweepstake);
    };
    $scope.day = function(date) {
      return moment(date).format('D');
    };
    return $scope.month = function(date) {
      return moment(date).format('MMMM');
    };
  });

}).call(this);

/*
//@ sourceMappingURL=win.js.map
*/