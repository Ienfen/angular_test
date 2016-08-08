/**
 * Created by ihor on 8/8/16.
 */
angular.module('myApp.user.list')
    .controller('user.list.ctrl', ['user.list', '$state', function(userList, $state) {

        this.edit = function(id) {
            $state.go('editUser', {id:id});
        };

        this.delete = function (id) {
            //usersService.deleteUserById(id);
        };

        this.users = userList;
    }]);
