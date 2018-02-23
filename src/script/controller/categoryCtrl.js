
angular.module('app').controller('categoryCtrl', ['$http', '$scope', "$timeout", 'local', 'productInfo','$location','$state', function ($http, $scope, $timeout, local, productInfo,$location,$state) {

    $http({
        method: 'GET',
        url: 'data/category.json'
    }).then(function successCallback(response) {

        $scope.categoryArr = response.data.data.categories;//左边分类模块

        $scope.product = response.data.data.products;//分类商品数据

        $scope.pro_listArr = $scope.product[103834];//右边商品列表数组

        $scope.CIDArr = $scope.categoryArr[0].cids;//分类项数组

        $scope.all_state = false;//分类列表

        $scope.soft_state = false;//排序列表

        $scope.index= 0;//分类模块索引

        $scope.totalCount=local.get("allCount");//商品总数显示

        $scope.showCategory = function (arrId, obj, index) { //arrId 分类数组id

            $scope.index = index;//分类模块索引

            $scope.CIDArr = obj.cids; //分类选项数组
            $scope.pro_listArr=[];
            $timeout(function () {
                $scope.pro_listArr = $scope.product[arrId];
            },200)


        };
        //全部分类
        $scope.categoryAll=function(){

            $scope.soft_state = false;

            $scope.all_state = !$scope.all_state

        };
        //综合排序
        $scope.showSoft=function(){

            $scope.all_state = false;

            $scope.soft_state = !$scope.soft_state;

        };
        //过滤
        $scope.filterName = function(nameType) {

            if(nameType === '全部分类') {

                $scope.all_state = !$scope.all_state;

                return false;
            }
            $scope.name = nameType;

            $scope.all_state = !$scope.all_state
        };

        //排序
        $scope.orderType = function(type) {
            $scope.ordertype = type;
            $scope.soft_state = !$scope.soft_state
        };

        /********************************跳转到商品详情页业务代码*******************************/

        $scope.checkDetial=function(item){

            //存入当前要要查看的商品
            local.put("detailPro",item);

             var router=$location.path().substring(1);

             var str = item.id;

            $state.go('producer', {"producerId": str,"router":router,"backRouter":"category"});
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