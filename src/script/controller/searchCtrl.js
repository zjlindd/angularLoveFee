'use strict';
angular.module('app').controller('searchCtrl', ['$http', '$scope', "$timeout",'local','productInfo','$location','$state',function($http, $scope, $timeout,local,productInfo,$location,$state){
    $scope.searchArr=["芒果",'水果',"火龙果","三七女王节","香烟","酒","燕塘","奇异果",'奶'];
    $scope.historyArr=[];
    $scope.historyState=false;
    $scope.search_text="";
    $scope.doSearch=function(key){
        if($scope.search_text!==undefined||key){
            $scope.historyState=true;
            if(key){
                $scope.historyArr.push(key);
                $state.go('searchlist', {"keyword": key});
            }else {
                $scope.historyArr.push($scope.search_text);
                $state.go('searchlist', {"keyword": $scope.search_text});
                $scope.search_text="";
            }
        }else {
            $scope.historyState=false;
            return false;
        }
    }
    $scope.clearHistory=function(){
        $scope.historyArr=[];

    }
}]);