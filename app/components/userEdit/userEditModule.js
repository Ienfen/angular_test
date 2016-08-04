/**
 * Created by ihor on 8/4/16.
 */
angular.module('myApp.userEdit', []).
    config(function($stateProvider) {
        $stateProvider
            .state('editUser', {
                url: '/editUser/:id',
                templateUrl: 'components/userEdit/userEdit.html',
                controller: 'UsersEditCtrl',
                controllerAs: '$ctrl'
            })
});