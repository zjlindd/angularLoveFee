'use strict';
angular.module('app').controller('searchCtrl', ['$http', '$scope', "$timeout",'local','productInfo','$location','$state',function($http, $scope, $timeout,local,productInfo,$location,$state){
    $scope.searchArr=["芒果",'水果',"火龙果","三七女王节","香烟","酒","燕塘","奇异果",'奶'];
    $scope.historyArr=[];
    $scope.historyState=false;
    $scope.search_text="";
    $scope.doSearch=function(key){
    	console.log(key)
        searchHandel(key);
    };
   
    $scope.keyUp=function(event,key){
    
    	 var keycode = event.keyCode;
    	 if(keycode!==13){
    	 	return ;
    	 }
    	 searchHandel(key); 	
    };
    $scope.clearHistory=function(){
        $scope.historyArr=[];
    };
    function searchHandel(key){
    	if(key&&key.trim()){
    		 $scope.historyArr.push(key);
    		 $scope.search_text="";
             $state.go('searchlist', {"keyword": key});
    	}else{
    		$scope.search_text="";
    		return false;
    	}
    }
}]);