'use strict';

angular.module('app').factory('collection', ['local', function(local){

    //local.clear();//清空数据

    var service = {};//定义一个Object对象'
    //添加收藏
    service.add=function(proObj){

        var  collectionArr=local.get("collectionArr")?local.get("collectionArr"):[];//用来存放商品

        var collectState=isHaveCollect(proObj)
        if(!collectState.state){
            collectionArr.push(proObj);
        }else {
            collectionArr.splice(isHaveCollect.index,1)
        }
        local.put("collectionArr",collectionArr); //更新数据
    };
    // 判断商品是否已经收藏
    function isHaveCollect(item){
        var collectionArr=local.get("collectionArr")?local.get("collectionArr"):[];
      for(var i=0,len=collectionArr.length;i<len;i++){
          if(item.id===collectionArr[i].id){
              return {'state':true,index:i};
          }
      }
        return {'state':false};
    }
    return service;
}]);
