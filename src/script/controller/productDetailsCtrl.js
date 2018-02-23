'use strict';
angular.module('app').controller('producerDetailsCtrl', ['$http', '$scope', "$timeout",'local','productInfo','collection','$state','$stateParams', function($http, $scope, $timeout,local,productInfo,collection,$state,$stateParams){

    //获得页面传值
    $scope.url=$state.params.router;

    // 当前商品
    $scope.productObj=local.get("detailPro");

    //显示商品总数
    $scope.totalCount=local.get("allCount");

    // 显示当前商品的数量
    $scope.currentCount=getCount(local.get("detailPro"));

    //页面跳转
    $scope.goto=function(){
        $state.go("cart");
    };
    console.log($state.params);
    // 返回路由
    $scope.backUrl=$state.params.backRouter;
    console.log($scope.backUrl);
    //加入收藏
    $scope.addCollection=function (item) {
        collection.add(item);
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
            if(this.count===0){
                $scope.currentCount=0;
            }
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