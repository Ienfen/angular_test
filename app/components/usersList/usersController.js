'use strict';

angular.module('myApp.usersList')

    //.config(['$routeProvider', function($routeProvider) {
    //    $routeProvider.when('/user-list', {
    //        templateUrl: 'components/userList/usersList.html',
    //        controller: 'UsersListCtrl'
    //    });
    //}])

    .controller('UsersListCtrl', ['$timeout', function($timeout) {
        console.log('asd')
        this.test = 'asd'
        this.users = [
            {name: 'user1'},
            {name: 'user2'},
            {name: 'user3'},
            {name: 'user4'},
            {name: 'user5'}
        ]

        $timeout(() => {
            console.log('asdss');
            this.users.pop();
            console.log(this.users)
        },2000)
    }]);
