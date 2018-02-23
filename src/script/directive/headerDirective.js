angular.module('app').directive("headerBar", function () {
    return {
        restrict: "E",
        scope: {
            producerName: "=",   // amount 引用传递（双向绑定）
            backUrl:'=',
            titleName:'=',
            save: "=" ,
            doSearch: "=" ,// 保存操作
            keyUp:"=",
            edit:'=' // 编辑完成
        },
        template: function (el, attr) {
            var temp = '';
            if (angular.isDefined(attr.cartHeader)) {
                temp = "<header>" +
                    '<h3 class="cart"><span class="name">购物车</span></h3>' +
                    '</header>'
            } else if (angular.isDefined(attr.producerName)) {
                temp = "<header>" +
                    '<h3 class="producer"><a href="javascript:void(0)" ui-sref="{{backUrl}}" class="return"></a></span><span class="name" >{{producerName}}</span></h3>' +
                    '</header>'
            } else if (angular.isDefined(attr.order)) {
                temp = "<header>" +
                    '<h3 class="order">' +
                    '<a href="javascript:void(0)" ui-sref="mine" class="return"></a>' +
                    '<span class="name">我的订单</span>'+
                    '</h3>' +
                    '</header>'
            }else if (angular.isDefined(attr.address)) {
                temp = "<header>" +
                    '<h3 class="address">' +
                    '<a href="javascript:void(0)" ui-sref="main" class="return"></a>' +
                    '<span class="name">选择地址</span>' +
                    '</h3>' +
                    '</header>'
            }else if (angular.isDefined(attr.titleName)) {
                temp = "<header>" +
                    '<h3 class="alter_address">' +
                    '<a href="" ui-sref="address" class="return"></a>' +
                    '<span class="name">{{titleName}}</span>' +
                    '<a href="" class="save" ng-click="save()">保存</a>'+
                    '</h3>' +
                    '</header>'
            }else if (angular.isDefined(attr.memberCenter)) {
                temp = "<header>" +
                    '<h3 class="alter_address">' +
                    '<a href="" ui-sref="mine" class="return"></a>' +
                    '<span class="name">会员中心</span>' +
                    '</h3>' +
                    '</header>'
            }else if (angular.isDefined(attr.search)) {
                temp = "<header>" +
                    '<h3 class="search">' +
                    '<a href="javascript:void(0)" ui-sref="main" class="return"></a>' +
                    ' <input  name=""  value="" placeholder="请输入商品名称" ng-keyup="keyUp($event,search_text)" ng-model="search_text" />' +
                    '<a href=" " ui-sref="search" class="search-btn" ng-click="doSearch(search_text)"></a>'+
                    '</h3>' +
                    '</header>'
            }else if (angular.isDefined(attr.collectionHeader)) {
                temp = "<header>" +
                    '<h3 class="collection">' +
                    '<a href="javascript:void(0)" ui-sref="mine" class="return"></a>' +
                    '<span class="name">商品收藏</span>' +
                    '<a href="javascript:void(0)" class="edit" ng-click="edit()">编辑</a>'+
                    '</h3>' +
                    '</header>'
            }
            else {
                temp = "<header>" +
                    '<h3 class="main category"><span class="main_category" ui-sref="address">武汉街道口-B出口</span><a href="" ui-sref="search" class="search-btn" ng-click="doSearch()"></a></h3>' +
                    '</header>'
            }
            return temp;
        },
        replace: true,        // 使用模板替换原始标记
        link: function (scope) {

        }
    }
});  