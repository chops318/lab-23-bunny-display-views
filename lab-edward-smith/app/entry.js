'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const angular_route = require('angular-route');

let app = angular.module('bunnyApp', [angular_route]);

app.run(['$rootScope', function($rootScope) {
  $rootScope.imageData = require('./data/images.js');
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
}])


require('./view/home');
require('./view/thumbnail');
