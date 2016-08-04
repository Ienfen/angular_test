/**
 * Created by ihor on 8/3/16.
 */
angular.module('myApp.usersList')
    .factory('usersService', function () {
        var users = [
            {
                id:1,
                name: 'user1',
                surname: 'surname1',
                phone: '11111111'
            },
            {
                id:2,
                name: 'user2',
                surname: 'surname2',
                phone: '11111112'
            },
            {
                id:3,
                name: 'user3',
                surname: 'surname3',
                phone: '11111113'
            },
            {
                id:4,
                name: 'user4',
                surname: 'surname4',
                phone: '11111114'
            },
            {
                id:5,
                name: 'user5',
                surname: 'surname5',
                phone: '11111115'
            }
        ];

        function findUserById (id) {
            for (var i = 0, length = users.length; i < length; i++) {
                if (users[i].id == id) {
                    return {
                        user: users[i],
                        index: i
                    }
                }
            }
        }

        return {
            getUsers: function () {
                return users;
            },

            getUserById: function (id) {
                return findUserById(id).user;
            },

            deleteUserById: function (id) {
                var index = findUserById(id).index;
                users.splice(index, 1);
            },
            setUsers: function (newUsers) {
                users = newUsers
            },
            replaceUserById: function(id, data) {
                var index = findUserById(id).index;

                data.id = id;
                users[index] = data;
            },
            replaceAllUsers: function (newUsers) {
                users = newUsers;
            }
        };
});