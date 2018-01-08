'use strict';
angular.module('app').factory('addressService', ['local', function(local){

    //local.clear();//清空数据

    var service = {};//定义一个Object对象'

    //添加地址
    service.add=function(proObj){

      var  area_infoArr=local.get("area_infoArr")?local.get("area_infoArr"):[];//用来存放商品

           area_infoArr.push(proObj);

           local.put("area_infoArr",area_infoArr);//更新数据

    };
    //删除地址
    service.delete=function(proObj){

        var  area_infoArr=local.get("area_infoArr")?local.get("area_infoArr"):[];//用来存放商品

        var uniqueId=proObj.uniqueId;

        for(var i in area_infoArr){

        if(area_infoArr[i].uniqueId===uniqueId){

            area_infoArr.splice(area_infoArr[i],1);
        }
        }
    };
    //更新地址
    service.update=function(proObj){

        var  area_infoArr=local.get("area_infoArr")?local.get("area_infoArr"):[];//用来存放商品

        var uniqueId=proObj.uniqueId;

        for(var i in area_infoArr){

            if(area_infoArr[i].uniqueId===uniqueId){

                console.log('proObj',proObj);

                area_infoArr[i]=proObj;

                local.put("area_infoArr",area_infoArr);//更新数据
            }
        }
    };

    return service;
}]);
