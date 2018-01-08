'use strict';
angular.module('app').controller('buyCarCtrl', ['$http', '$scope', "$timeout",'local','productInfo', function($http, $scope, $timeout,local,productInfo){

    $scope.totalCount=local.get("allCount");//商品总数显示

    //当前收货地址获得

    //$scope.current_area=local.get("area_infoArr")[0]?local.get("area_infoArr")[0]:{};
     $scope.current_area={};

    //获得购物车的全部商品

    $scope.productListArr=local.get("pro_infoArr");


    //默认购物车商品全选状态

    $scope.isCheckAll=local.get("isCheckAll")?local.get("isCheckAll"):true;



    //是否选好的状态设置与全选同步

    $scope.isOk=angular.copy($scope.isCheckAll);//深拷贝



    //总价钱
    $scope.all_money=getTotalMoney();


    //全选和全不选的设置函数
    function checkAll(bool){
        for(var i in  $scope.productListArr){
            $scope.productListArr[i].isChecked=bool;
        }
    };

    //计算价格
    function getTotalMoney(){
        var n=0;//用于累计商品为isChecked的个数
        saveState();//放在获取allMoney之前
        var all_product=local.get("pro_infoArr")?local.get("pro_infoArr"):[];
        var totalMoney=0;
        for(var i in all_product){
           if(all_product[i].isChecked){
               n++;
               $scope.isOk=true;//有一个就是真的
               var count=all_product[i].count,
                   price=all_product[i].price;
                   totalMoney+=count*price;
           }else{
               $scope.isCheckAll=false;//一个没有就是假的

               local.put("isCheckAll",false);
           }
        }
        if(n===all_product.length){
            $scope.isCheckAll=true;//全都选中为真
            local.put("isCheckAll",true);
        }else if(n===0){
            $scope.isOk=false;//一个都没有
            $scope.isCheckAll=false;//一个都没有
            local.put("isCheckAll",false);
        }
        return totalMoney.toFixed(1);
    };

    //check 操作
    $scope.check=function(i,item) {

        item.isChecked=!item.isChecked;

        $scope.all_money=getTotalMoney();
    };

    //checkAll 全选操作
    $scope.checkAll=function(i,item) {

        $scope.isCheckAll=!$scope.isCheckAll;

        checkAll($scope.isCheckAll);

        $scope.all_money=getTotalMoney();
    };
    //保存每一步操作的状态
    function saveState() {

        productInfo.save($scope.totalCount,$scope.productListArr);
    }
    /********************************addCart业务代码*******************************/
    $scope.addCart = function (obj) {

        obj.isChecked=true;

        productInfo.add(obj);

        $scope.totalCount=local.get("allCount");

        obj.count=getCount(obj);

        this.count=getCount(obj);

        $scope.isOk=true;

        $scope.all_money=getTotalMoney();
    };

    $scope.reduce= function (obj) {

        productInfo.reduce(obj);

        $scope.totalCount=local.get("allCount");

        obj.count=getCount(obj);

        this.count=getCount(obj);

        $scope.all_money=getTotalMoney();
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

    /********************************快递时间-代码*******************************/

    $scope.todayArr=["30分钟送达","15:00-16:00","16:00-17:00","17:00-18:00","18:00-19:00"]

    $scope.tomorrowArr=["09:00-10:00","10:00-11:00","11:00-12:00","12:00-13:00","13:00-14:00","14:00-15:00","15:00-16:00","16:00-17:00"]

    $scope.afterTommorrowArr=["09:00-10:00","10:00-11:00","11:00-12:00","12:00-13:00","13:00-14:00","14:00-15:00","15:00-16:00","16:00-17:00"]

    $scope.chooseTime=function () {

        $scope.time_show=!$scope.time_show
    }
    $scope.selectTime=function (text,item) {
        $scope.time_show=false;

        $scope.choose_time=text+item+'';
    }



}]);