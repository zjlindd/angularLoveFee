
angular.module('app').controller('mineCtrl', ['$http', '$scope','$state', "$timeout",'local', function($http, $scope,$state, $timeout,local){
    $scope.totalCount=local.get("allCount");//商品总数显示
    $scope.orderArr=['待付款','待收货','待评价','退款/售后'];
    $scope.other_server=['积分商城','优惠劵','收货地址','客服/反馈','关于我们'];

    $scope.toggleClass=function (index) {

        $state.go("order",{"Id":index});
    };

    $scope.goto=function(){
        $state.go("memberCenter");
    };

    $scope.check_collection=function () {
        $state.go("collection");

    }
}]);