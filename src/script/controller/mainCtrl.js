'use strict';
angular.module('app').controller('mainCtrl', ['$http', '$scope', "$timeout", 'local', 'productInfo','$state','$location', function ($http, $scope, $timeout, local, productInfo,$state,$location) {
    $http({
        method: 'GET',
        url: '/data/home.json'
    }).then(function successCallback(response) {

        /********************************页面数据初始化*******************************/

        $scope.roastArr = response.data.data.act_info[0]; //轮播图数组

        $scope.seckillArr = response.data.data.act_info[1]; //轮播图数组

        $scope.newProductArr = response.data.data.act_info[3]; //新品推荐数组

        $scope.conven_storeArr = response.data.data.act_info[4]; //便利店

        $scope.modulesArr = response.data.data.act_info[5]; //酒水饮料、休闲饮食、、、、、、

        /********************************轮播图初始化*******************************/
        $timeout(function () {
            $scope.mySwiper = new Swiper('.swiper-container', {
                loop: true,
                autoplay: 3000,
                //分页器
                pagination: '.swiper-pagination',
                autoplayDisableOnInteraction: false
            })
        }, 0);

        /********************************跳转到商品详情页业务代码 *******************************/

        $scope.lookDetial = function (obj) {

            var router=$location.path().substring(1);

            var str = JSON.stringify(obj);

            $state.go('producer', {"producerId": str,"router":router});
        };

        /********************************addCart业务代码**************************************/

        $scope.totalCount = local.get("allCount") ? local.get("allCount") : 0;//商品总数显示

        $scope.addCart = function (obj) {

            this.istrue = !this.istrue;

            productInfo.add(obj);

            $scope.totalCount = local.get("allCount");

        }
    }, function errorCallback(response) {
        // 请求失败执行代码
    });

}]);