//angular 自定义组件
angular.module('app').directive("roastPitcure", function() {
    return {
        restrict: "E", // 指令是一个元素 (并非属性)
        scope: {
            roastArr: "="       // roastArr 引用传递（双向绑定）
        },
        template: // 替换HTML (使用scope中的变量)
        '<div class="carousel">' +
        '		<div class="banner">' +
        '		<div class="swiper-container">' +
        '			<div class="swiper-pagination"></div>' +
        '			<div class="swiper-wrapper">' +
        '				<div class="swiper-slide" ng-repeat="obj in roastArr.act_rows"  ><img  ng-src="{{obj.activity.img}}" /></div>' +
        '			</div>' +
        '		</div>' +
        '</div>',
        replace: true, // 使用模板替换原始标记
        link: function(scope, element, attr, controller) {
        }
    }
});