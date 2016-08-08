/**
 * Created by ihor on 8/8/16.
 */
angular.module('myApp.user').config(function($stateProvider) {
    $stateProvider.state({
        name: 'user',
        url: '/user',
        abstract: true,
        //template: '<ui-view/>'
    })
});
