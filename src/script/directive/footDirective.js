angular.module('app').directive('onFinishRenderFilters',['$timeout',function ($timeout) {
    return {
        restrict: 'A',
        link: function(scope) {
            if (scope.$last === true) {
                $timeout(function() {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    };
}]);
angular.module('app').directive('footerBar',['$location',function($location) {
    return {
        restrict : 'E',
        replace : true,
        scope : {
            totalCount:"=",
        },
        template :
        ' <div class="menu">'+
        '	<ul class="menu_list" >'+
        '<li ng-repeat="(i,item) in menuList"  on-finish-render-filters   ng-click="menuClick($index,item)">'+
        '<a href="javascript:void(0)" ui-sref="item.url">'+
        '<span class="icon"></span>'+
        ' <span class="txt" ui-sref="category" >{{item.text}}</span>'+
        ' <span ng-if="item.url==\'cart\'&&totalCount>0" class="shop_count">{{totalCount}}</span>'+
        '</a>'+
        '</li>'+
        '</ul>'+
        '	</div>',
        link : function(scope, element) {

            var Str = $location.path().substring(1);//字符串截取
            function test(str) {
                switch (true) {
                    case /main/.test(str):
                        element.children().find("li").eq(0).addClass("classLi1");
                        break;
                    case /category/.test(str):
                        element.children().find("li").eq(1).addClass("classLi2");
                        break;
                    case /cart/.test(str):
                        element.children().find("li").eq(2).addClass("classLi3");
                        break;
                    case /mine/.test(str):
                        element.children().find("li").eq(3).addClass("classLi4");
                        break;
                    default:
                        break;
                }
            }
            scope.$on('ngRepeatFinished', function () {
                //下面是在dom render完成后执行的js
                if(Str){
                    test(Str);
                }
            });
            scope.menuList=[
                {
                    "text":"首页",
                    "className":"classLi1",
                    "url":'main'
                },
                {
                    "text":"闪送超市",
                    "className":"classLi2",
                    "url":'category'
                },
                {
                    "text":"购物车",
                    "className":"classLi3",
                    "url":'cart'
                },
                {
                    "text":"我的",
                    "className":"classLi4",
                    "url":'mine'
                },
            ];

            scope.menuClick=function(index,item){
                $location.path(item.url);
            };
        }
    }
}]);