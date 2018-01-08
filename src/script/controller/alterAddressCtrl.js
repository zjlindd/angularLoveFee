
angular.module('app').controller('alterAddressCtrl', ['$scope','local','productInfo','addressService','$state', '$timeout',function($scope,local,productInfo,addressService,$state,$timeout){

     //新增和编辑的业务逻辑问题

    $scope.titleName=$state.params["title"];



    var isNew=$state.params["isNewArea"];

        if(isNew){
            $scope.areaObj={
                "name":"",
                "phone":"",
                "city":"",
                "area":"",
                "detailArea":"",
                "uniqueId":""
            }
        }else {
            $scope.areaObj=local.get("editAddress");
        }
    //JS生成类GUID
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    function NewGuid() {

        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    }

    function checkText(obj) {
          if(!obj.name)  {
              return "请填写姓名"
          }else if(!obj.name){



          }else if(!obj.name){



          }else if(!obj.name){



          }else if(!obj.name){



          }
    }

    //save 时通过判断当前商品的uniqueId是否存在来判断 是新增操作还是保存操作 从而调用不同的接口。

    $scope.saveArea=function(){
        //新增直接入库
        if(isNew){
            $scope.areaObj.uniqueId=NewGuid();

            addressService.add( $scope.areaObj);

            $scope.openModal=true;

            $scope.modalTitle="保存成功！";

            $timeout(function () {
                $scope.openModal=false;
                $state.go("address");
            },1000)

        }else {   //更新数据

            addressService.update($scope.areaObj);

            $scope.openModal=true;

            $scope.modalTitle="保存成功！";

            $timeout(function () {
                $scope.openModal=false;
                $state.go("address");
            },1000)
        }

    };
    //delete
    $scope.delete=function(){
        addressService.delete($scope.areaObj);

    }
}]);