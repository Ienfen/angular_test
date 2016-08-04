angular.module('myApp.usersList')
    .controller('UsersListCtrl', ['usersService', '$state', function(usersService, $state) {

        this.edit = function(id) {
            $state.go('editUser', {id:id});
        };

        this.delete = function (id) {
            usersService.deleteUserById(id);
        };

        this.users = usersService.getUsers();
    }]);
