
angular.module('app').controller('chooseAddressCtrl', ['$scope','$state','local','addressService',function($scope,$state,local,addressService){

    $scope.getLocation=function () {

        $scope.openModal=true;
    };
    $scope.index=0;
    $scope.selectArea=function (index) {
        $scope.index=index;
    };

    $scope.modalOk=function () {

        $scope.openModal=false;
    };
    //收货地址管理arr
    $scope.areaArr=local.get("area_infoArr")?local.get("area_infoArr"):[];


    //编辑收货地址
    $scope.alterArea=function (item) {

        //存入当前要编辑的地址
        local.put("editAddress",item);

        $state.go("alteraddress",{"title":"编辑地址","isNewArea":false});

    };

    //新增收货地址

    $scope.createArea=function () {

        $state.go("alteraddress",{"title":"新增地址","isNewArea":true});
        
    };

}]);