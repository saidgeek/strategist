(function() {
  'use strict';
  angular.module('strategistApp').directive('sgkPositionList', function($rootScope, $timeout, IO, Strategy, $state) {
    return {
      restrict: 'A',
      scope: {},
      templateUrl: 'directives/site/positions',
      controller: function($scope, $rootScope, Strategy) {
        $scope.strategies = null;
        return Strategy.sort('votes', function(err, strategies) {
          if (!err) {
            return $scope.strategies = strategies;
          }
        });
      },
      link: function($scope, $element, $attrs) {
        var $_add_scroll, replaceSpecialChars, specialChars,
          _this = this;
        IO.on('strategy.add.vote', function(data) {
          var $before_element, $el, query;
          $el = null;
          $before_element = null;
          query = "#strategy_" + data.id;
          return $el = $element.find(query);
        });
        specialChars = [
          {
            val: "a",
            "let": "áàãâä"
          }, {
            val: "e",
            "let": "éèêë"
          }, {
            val: "i",
            "let": "íìîï"
          }, {
            val: "o",
            "let": "óòõôö"
          }, {
            val: "u",
            "let": "úùûü"
          }, {
            val: "c",
            "let": "ç"
          }, {
            val: "A",
            "let": "ÁÀÃÂÄ"
          }, {
            val: "E",
            "let": "ÉÈÊË"
          }, {
            val: "I",
            "let": "ÍÌÎÏ"
          }, {
            val: "O",
            "let": "ÓÒÕÔÖ"
          }, {
            val: "U",
            "let": "ÚÙÛÜ"
          }, {
            val: "C",
            "let": "Ç"
          }, {
            val: "",
            "let": "?!()"
          }
        ];
        replaceSpecialChars = function(str) {
          regex;
          var regex, returnString, specialChar, _i, _len;
          returnString = str;
          for (_i = 0, _len = specialChars.length; _i < _len; _i++) {
            specialChar = specialChars[_i];
            regex = new RegExp("[" + specialChar["let"] + "]", "g");
            returnString = returnString.replace(regex, specialChar.val);
            regex = null;
          }
          return returnString.toLowerCase();
        };
        angular.element('body').on('keyup', '[data-role="search"]', function(e) {
          var $el, item, items, regex, value, _i, _len, _results;
          $el = angular.element(e.target);
          value = replaceSpecialChars($el.val());
          items = angular.element('[data-search]');
          if (value != null) {
            _results = [];
            for (_i = 0, _len = items.length; _i < _len; _i++) {
              item = items[_i];
              regex = new RegExp(value);
              if (regex.test(replaceSpecialChars(angular.element(item).data('search')))) {
                _results.push(angular.element(item).slideDown(600));
              } else {
                _results.push(angular.element(item).slideUp(600));
              }
            }
            return _results;
          }
        });
        $_add_scroll = function($el) {
          if ($el.find('.mCustomScrollBox').length === 0) {
            return $el.mCustomScrollbar({
              scrollButtons: {
                enable: false
              }
            });
          }
        };
        return $scope.$watch('strategies', function(v) {
          var _this = this;
          return $timeout(function() {
            return $timeout(function() {
              var $el_parent, query;
              $el_parent = $element.parents('.lista-posiciones');
              $_add_scroll($el_parent);
              $el_parent.mCustomScrollbar('update');
              if ($state.params.strategy_id != null) {
                query = "div#strategy_" + $state.params.strategy_id;
                $element.find(query).addClass('first');
                return $el_parent.mCustomScrollbar("scrollTo", query);
              }
            }, 0);
          }, 0);
        });
      }
    };
  });

}).call(this);

/*
//@ sourceMappingURL=position_list.js.map
*/