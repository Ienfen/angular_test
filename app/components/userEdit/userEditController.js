/**
 * Created by ihor on 8/4/16.
 */
angular.module('myApp.userEdit')
    .controller('UsersEditCtrl', ['usersService', '$stateParams', '$state', function(usersService, $stateParams, $state) {
        var id = $stateParams.id;

        this.user = angular.copy(usersService.getUserById(id));

        this.save = function () {
            usersService.replaceUserById(id, this.user);
            $state.go('userList');
        };

        this.cancel = function () {
            $state.go('userList');
        }
    }]);