/**
 * Created by ihor on 8/8/16.
 */
angular.module('user.core')
    .service('user.model', function () {
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

        this.UserModel = function(userData) {
            this.id = userData.id;
            this.name = userData.name;
            this.surname = userData.surname;
            this.phone = userData.phone;

        };

        this.getList = function () {
            return users;
        }

    });