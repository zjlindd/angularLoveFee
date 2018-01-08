/**********相当于一个小型的数据库，用来存放用户的基本信息，购买商品的信息，需要两张表，用户信息表和商品列表，把这两种表关联在一起**************/
'use strict';
angular.module('app').service('local', ['$window', function($window){
    this.put = function(key, value){
        $window.localStorage.setItem(key, JSON.stringify(value));
    };
    this.get = function(key) {
        return JSON.parse($window.localStorage.getItem(key));
    };
    this.remove = function(key) {
        $window.localStorage.removeItem(key);
    };
    this.clear=function(){
        $window.localStorage.clear();
    }
}]);


