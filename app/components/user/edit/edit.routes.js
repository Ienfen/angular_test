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
                controller: 'user.edit.ctrl',
                controllerAs: '$ctrl',
                resolve: {
                    userData: ['user.service', '$stateParams', function (userService, $stateParams) {
                        return userService.getUserById($stateParams.userId);
                    }],
                    user: ['user.service', 'userData', function (userService, userData) {
                        return new userService.UserModel(userData);
                    }]
                }
            })
    });