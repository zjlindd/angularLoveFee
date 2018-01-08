'use strict';
angular.module('app').controller('producerDetailsCtrl', ['$http', '$scope', "$timeout",'local','productInfo','$state','$stateParams', function($http, $scope, $timeout,local,productInfo,$state,$stateParams){

    //获得页面传值

    $scope.url=$state.params.router;
    $scope.productObj=local.get("detailPro");



    //显示商品总数
    $scope.totalCount=local.get("allCount");

    //页面跳转
    $scope.goto=function(){
        $state.go("cart");
    };

    //加入收藏
    $scope.addCollection=function (item) {

        local.put("collection",item);
    };

    /********************************addCart业务代码 start*******************************/

        $scope.addCart = function (obj) {
            //this 的使用 动画效果
            this.istrue = !this.istrue;
            //加入购物车
            productInfo.add(obj);
            //商品总数++
            $scope.totalCount=local.get("allCount");
            //该商品数++
            this.count=getCount(obj);
        };

        $scope.reduce= function (obj) {
            //加入购物车
            productInfo.reduce(obj);
            //商品总数--
            $scope.totalCount=local.get("allCount");
            //该商品数--
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
    /********************************addCart业务代码 end*******************************/

}]);