'use strict'

angular.module('strategistApp')
  .directive 'sgkLibraryModal', ->
    restrict: 'A'
    scope: {}
    controller: 'LibraryCtrl'
    replace: true
    template: """
      <a href="javascript:{}" ng-click="open()" class="btn btn-link">
        <i class="glyphicon glyphicon-cog"></i>
        Comparaciones
      </a>
    """
      