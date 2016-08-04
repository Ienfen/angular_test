angular.module('myApp.usersList', []).
    config(function($stateProvider) {
        $stateProvider
            .state('userList', {
                url: '/',
                templateUrl: 'components/usersList/usersList.html',
                controller: 'UsersListCtrl',
                controllerAs: '$ctrl'
            })
});