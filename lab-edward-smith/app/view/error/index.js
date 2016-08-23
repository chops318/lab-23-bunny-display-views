'use strict';

const angular = require('angular');
const bunnyApp = angular.module('bunnyApp');

bunnyApp.controller('ErrorController', ['$rootScope', function($rootScope) {
  this.errorMessage = $rootScope.errorMessage;
}]);
