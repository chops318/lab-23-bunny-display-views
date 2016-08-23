'use strict';

const angular = require('angular');
const bunnyApp = angular.module('bunnyApp');

bunnyApp.controller('FullsizeController', ['$rootScope', '$location', '$routeParams', function($rootScope, $location, $routeParams){
  this.images = $rootScope.imageData;

  this.validId = function(id) {
    if (isNaN(id)) return false;
    if (!isFinite(id)) return false;
    if (id < 1) return false;
    if (typeof(this.images[id-1]) === 'undefined') return false;
    return true;
  };

  let id = Number.parseInt($routeParams.id);

  if (!this.validId(id)) {
    $location.path('/error');
  }

  this.image = this.images[id-1];
}]);
