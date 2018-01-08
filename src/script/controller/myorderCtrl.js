
angular.module('app').controller('myorderCtrl', ['$http', '$scope', '$state', function($http, $scope, $state){

    $scope.orderArr=['待付款','待收货','待评价','退款/售后'];

    $scope.index=$state.params.Id?$state.params.Id:0;

    $scope.toggleClass=function (index) {

        $scope.index=index;

    };
}]);