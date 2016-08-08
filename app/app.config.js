/**
 * Created by ihor on 8/8/16.
 */
angular.module('myApp').
    config(['$locationProvider', '$urlRouterProvider', function($locationProvider, $urlRouterProvider) {
        $locationProvider.hashPrefix('!');
        $urlRouterProvider.otherwise("/");
        $locationProvider.html5Mode(true);
    }]);