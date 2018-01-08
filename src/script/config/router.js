'use strict';
angular.module('app').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('main', {
        url: '/main',
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
    }).state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
    }).state('register', {
        url: '/register',
        templateUrl: 'views/register.html',
        controller: 'registerCtrl'
    }).state('mine', {
        url: '/mine',
        templateUrl: 'views/mine.html',
        controller: 'mineCtrl'
    }).state('category', {
        url: '/category',
        templateUrl: 'views/category.html',
        controller: 'categoryCtrl'
    }).state('cart', {
        url: '/cart',
        templateUrl: 'views/buycart.html',
        controller: 'buyCarCtrl'
    }).state('search', {
        url: '/search',
        templateUrl: 'views/search.html',
        controller: 'searchCtrl'
    }).state('searchlist', {
        url: '/searchlist',
        params:{"keyword":null},
        templateUrl: 'views/searchlist.html',
        controller: 'searchListCtrl'
    }).state('producer', {
        url: '/producer/:producerId',
        params:{"producerId":null,router:''},
        templateUrl: 'views/producerDetails.html',
        controller: 'producerDetailsCtrl'
    }).state('order', {
        params:{"Id":null},
        url: '/order',
        templateUrl: 'views/myorder.html',
        controller: 'myorderCtrl'
    }).state('address', {
        url: '/address',
        templateUrl: 'views/chooseAddress.html',
        controller: 'chooseAddressCtrl'
    }).state('alteraddress', {
        url: '/alteraddress/:title',
        params:{title:'',"isNewArea":null},
        templateUrl: 'views/alterAddress.html',
        controller: 'alterAddressCtrl'
    }).state('memberCenter', {
        url: '/memberCenter',
        templateUrl: 'views/memberCenterPage.html',
        controller: 'memberCenterCtrl'
    });

    $urlRouterProvider.otherwise('main');//其他

}]);
