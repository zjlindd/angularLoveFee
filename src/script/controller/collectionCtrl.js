
angular.module('app').controller('collectionCtrl', ['$http', '$scope', 'local', function($http, $scope,local){

     console.log(local.get("collectionArr"));
    $scope.collectionListArr=local.get("collectionArr");

    $scope.edit=function () {
        $scope.openModal=true;
    }
}]);