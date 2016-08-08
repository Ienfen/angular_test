/**
 * Created by ihor on 8/8/16.
 */
angular.module('myApp.user.list').
    config(function($stateProvider) {
        $stateProvider
            .state({
                name: 'user.list',
                url: '/',
                templateUrl: 'components/user/list/user.list.html',
                controller: 'user.list.ctrl',
                controllerAs: '$ctrl',
                resolve: {
                    userListData: ['user.service', function (userService) {
                        return userService.getList();
                    }],
                    userList: ['userListData', function (userListData, userService) {
                        var userList = [];

                        userListData.forEach(function (user) {
                            userList.push(new usersService.UserModel(user));
                        });

                        return userList;
                    }]
                }
            })
    });

