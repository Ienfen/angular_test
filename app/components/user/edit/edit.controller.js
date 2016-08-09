/**
 * Created by ihor on 8/9/16.
 */
angular.module('myApp.user.edit')
    .controller('user.edit.ctrl', ['user', 'user.service', '$state', function(user, usersService, $state) {

        this.user = user;

        this.save = function () {
            usersService.updateUser(this.user);
            $state.go('user.list');
        };

        this.cancel = function () {
            $state.go('user.list');
        }
    }]);