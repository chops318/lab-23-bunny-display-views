'use strict';

const angular = require('angular');
const bunnyApp = angular.module('bunnyApp');

bunnyApp.controller('HomeController', ['$rootScope', function($rootScope){
  this.images = $rootScope.imageData;
}]);
