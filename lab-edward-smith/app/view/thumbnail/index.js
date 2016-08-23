'use strict';

const angular = require('angular');
const bunnyApp = angular.module('bunnyApp');

bunnyApp.controller('ThumbnailController', ['$rootScope', function($rootScope){
  this.images = $rootScope.imageData;
}]);
