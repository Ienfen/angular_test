/**
 * Created by ihor on 8/8/16.
 */
angular.module('myApp.user.list')
    .controller('user.list.ctrl', ['userList', 'user.service', '$state', function(userList, userService, $state) {

        this.edit = function(id) {
            $state.go('user.edit', {userId:id});
        };

        this.delete = function (id) {
            userService.deleteUserById(id);
            $state.reload();
        };

        this.users = userList;
    }]);
