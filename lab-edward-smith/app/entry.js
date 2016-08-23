'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const angular_route = require('angular-route');

let app = angular.module('bunnyApp', [angular_route]);

app.run(['$rootScope', function($rootScope) {
  $rootScope.imageData = require('./data/images.js');
  $rootScope.errorMessage = 'You\'ve done something wrong';
}]);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'app/view/home/home.html',
      controller: 'HomeController',
      controllerAs: 'hc'
    })
    .when('/thumbnail', {
      templateUrl: 'app/view/thumbnail/thumbnail.html',
      controller: 'ThumbnailController',
      controllerAs: 'tc'
    })
    .when('/fullsize/:id', {
      templateUrl: 'app/view/fullsize/fullsize.html',
      controller: 'FullsizeController',
      controllerAs: 'fc'
    })
    .when('/error', {
      templateUrl: 'app/view/error/error.html',
      controller: 'ErrorController',
      controllerAs: 'ec'
    })
    .otherwise({
      redirectTo: '/error'
    });
}]);


require('./view/home');
require('./view/thumbnail');
require('./view/fullsize');
require('./view/error');
