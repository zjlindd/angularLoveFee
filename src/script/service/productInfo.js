'use strict';
angular.module('app').factory('productInfo', ['local', function(local){

      //local.clear();//清空数据

    var service = {};//定义一个Object对象'

    //私有函数用来判断当前商品是否以经添加过||返回商品的index
    function isNewPro(id,pro_infoArr){

        var pro_idArr=[];

        if(pro_infoArr.length==0){

            return {"state":true,"index":""}; //新产品

        }
        for(var k=0;k<pro_infoArr.length;k++){

            pro_idArr[k]=pro_infoArr[k].id;

        }

        if(pro_idArr.indexOf(id)===-1){

            return {"state":true,"index":""}; //新产品

        }else{
            return {"state":false,"index":pro_idArr.indexOf(id)}; //重复添加产品
        }
    };

    //添加数据
    service.add=function(proObj){

        var id=proObj.id,//获取当前商品的id

             pro_infoArr=local.get("pro_infoArr")?local.get("pro_infoArr"):[],//用来存放商品

             allCount=local.get("allCount")?local.get("allCount"):0,//用来存放商品总数量

             len=pro_infoArr.length,

             isTrue=isNewPro(id,pro_infoArr);// true-新加商品

        if(isTrue.state){     //新添加商品

            var proInfo={
                "id":proObj.id,
                "name":proObj.name,
                "img":proObj.img,
                "price":proObj.market_price,
                "count":1,
                "isChecked":true
            }

            pro_infoArr.push(proInfo);

            allCount++;

            local.put("allCount",allCount);//更新数据

            local.put("pro_infoArr",pro_infoArr);//更新数据


        }else{           //重复添加一个商品

            pro_infoArr[isTrue.index].count++;

            allCount++;

            local.put("allCount",allCount);//更新数据

            local.put("pro_infoArr",pro_infoArr);//更新数据


        }
    }

    service.reduce=function(proObj){

            var id=proObj.id,//获取当前商品的id

                pro_infoArr=local.get("pro_infoArr")?local.get("pro_infoArr"):[],//用来存放商品

                allCount=local.get("allCount")?local.get("allCount"):0,//用来存放商品总数量

                isTrue=isNewPro(id,pro_infoArr);// true-新加商品

            var count=pro_infoArr[isTrue.index].count;

            if(count===0){
                return false;
            }else{

                pro_infoArr[isTrue.index].count--;

                allCount--;

                local.put("allCount",allCount);//更新数据

                local.put("pro_infoArr",pro_infoArr);//更新数据
            }
         };

    service.save=function(allCount,pro_infoArr){

        local.put("allCount",allCount);//更新数据

        local.put("pro_infoArr",pro_infoArr);//更新数据

    }
         return service;
}]);
