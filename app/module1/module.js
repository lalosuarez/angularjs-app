'use strict';

angular.module('myApp.module1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/module1', {
    templateUrl: 'module1/view.html',
    controller: 'Module1Ctrl'
  });
}]);
