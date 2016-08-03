'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  //'ngRoute',
  'ui.router',
    'myApp.usersList'
  //'myApp.view1',
  //'myApp.view2',
  //'myApp.version'
]).
  config(['$locationProvider', function($locationProvider) {
    //$locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(true);
    //$routeProvider.otherwise({redirectTo: '/view1'});
  }]).
  component('myApp', {
    template: 'It worked!'
  });
