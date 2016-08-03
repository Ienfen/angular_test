/**
 * Created by ihor on 8/3/16.
 */
angular.module('myApp.usersList')
    .component('usersList', {
        bindings: {
            users: ''
        },
        controller: 'UsersListCtrl',
        templateUrl: 'userList.html'
    });