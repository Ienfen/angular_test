'use strict';

angular.module('myApp.usersList')

    //.config(['$routeProvider', function($routeProvider) {
    //    $routeProvider.when('/user-list', {
    //        templateUrl: 'components/userList/usersList.html',
    //        controller: 'UsersListCtrl'
    //    });
    //}])

    .controller('UsersListCtrl', [function() {
        console.log('asd')
        this.test = 'asd'
        this.users = [
            {name: 'user1'},
            {name: 'user2'},
            {name: 'user3'},
            {name: 'user4'},
            {name: 'user5'}
        ]

        setTimeout(() => {
            console.log('asdss');
            this.users.pop()
            console.log(this.users)
        },2000)
    }]);
