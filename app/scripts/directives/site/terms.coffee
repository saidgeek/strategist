'use strict'

angular.module('strategistApp')
  .directive 'sgkTerms', ($rootScope, $timeout, User) ->
    restrict: 'A'
    templateUrl: 'directives/site/terms'
    controller: ($scope) ->
      $scope.user = {}

      $scope.terms = (form) =>
        if form.$valid and $scope.user.accept_terms
          User.accept_terms $rootScope.currentUser.id, $scope.user, (err, userInfo) ->
            if !err
              $rootScope.currentUser = userInfo
        else
          form.$valid = false

    link: ($scope, $element, $attrs) =>
      if !$rootScope.currentUser
        angular.element('[data-sgk-terms]').remove()

      if $rootScope.currentUser?.terms
        angular.element('[data-sgk-terms]').remove()

      $element.on 'click', '.check', (e) =>
        $el = angular.element(e.target)
        $el.toggleClass('checked');
        $element.find("#aceptar-term-cond").trigger 'click'

      $rootScope.$watch 'currentUser', (user) =>
        if user?.terms
          angular.element('[data-sgk-terms]').remove()
      


