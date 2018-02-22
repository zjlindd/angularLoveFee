'use strict';
angular.module('app').controller('searchListCtrl', ['$http', '$scope', "$timeout",'local','productInfo','$state','$stateParams', function($http, $scope, $timeout,local,productInfo,$state,$stateParams){
    $http({
        method: 'GET',
        url: 'data/goods.json'
    }).then(function successCallback(response) {

        $scope.listArr=response.data.data.goods;

        $scope.totalCount=local.get("allCount");//商品总数显示

        console.log($state);

        $scope.value="\'"+$stateParams.keyword+"\'";

        $scope.goto=function(){

          $state.go('cart');

        };
        /********************************addCart业务代码*******************************/
        $scope.addCart = function (obj) {
            //this 的使用
            this.istrue = !this.istrue;

            productInfo.add(obj);

            $scope.totalCount=local.get("allCount");

            this.count=getCount(obj);

        };

        $scope.reduce= function (obj) {
            productInfo.reduce(obj);

            $scope.totalCount=local.get("allCount");

            this.count=getCount(obj);
        };
        //得某一个商品在购物车里的数量
        function getCount(obj){
            var id=obj.id;
            var proListArr=local.get("pro_infoArr");
            for(var k in proListArr){
                if(id===proListArr[k].id){
                    return proListArr[k].count;
                }else {
                    continue;
                }
            }
            return 0;
        }
    }, function errorCallback(response) {
        // 请求失败执行代码
    });

}]);