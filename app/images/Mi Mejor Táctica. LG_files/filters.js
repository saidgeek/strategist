(function() {
  'use strict';
  angular.module('strategistApp').filter('removePlus', function() {
    return function(text) {
      return text.replace(/\+/g, ' ');
    };
  }).filter('formatDate', function() {
    return function(date) {
      return moment(date).format('D/M/YYYY HH:mm');
    };
  }).filter('Date', function() {
    return function(date) {
      return moment(date).format('D/M/YYYY');
    };
  });

}).call(this);

/*
//@ sourceMappingURL=filters.js.map
*/