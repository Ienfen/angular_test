/**
 * Created by ihor on 8/8/16.
 */
angular.module('myApp.user.edit').
    config(function($stateProvider) {
        $stateProvider
            .state({
                name: 'user.edit',
                url: '/:userId/edit',
                templateUrl: 'components/userEdit/userEdit.html',
                controller: 'UsersEditCtrl',
                controllerAs: '$ctrl'
            })
    });