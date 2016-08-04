angular.module('myApp', [
  'ui.router',
  'myApp.usersList',
  'myApp.userEdit'
]).
  config(['$locationProvider', '$urlRouterProvider', function($locationProvider, $urlRouterProvider) {
    $locationProvider.hashPrefix('!');
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true);
  }]);
