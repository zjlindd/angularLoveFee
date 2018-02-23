
//封装带遮罩的加载中弹出框
angular.module('app').directive('modalMask', function() {
    return {
        restrict : 'E',
        replace : true,
        scope : {
            openModal:"=",
            modalTitle:'=',
        },
        template :
        ' <div class="modalMask" ng-if="openModal">'+
        '   <div class="mask" >'+
        '	</div>'+
        '   <div class="modal">'+
        '         <div class="spinner">'+
        '           <div class="bounce1"></div>'+
        '           <div class="bounce2"></div>'+
        '           <div class="bounce3"></div>'+
        '       </div>'+
        '       <span class="loading">加载中....</span>'+
        '	</div>'+
        '	</div>',
        link : function(scope, element, attr) {

        }
    }
});
//封装带遮罩的确定弹出框
angular.module('app').directive('modalOk', function() {
    return {
        restrict : 'E',
        replace : true,
        scope : {
            openModal:"=",
            modalTitle:'=',
            makeSure:"="
        },
        template :
        ' <div class="modalMask"  ng-show="openModal">'+
        '    <div class="mask"  >'+
        '	 </div>'+
        '    <div class="modal location">'+
        '       <span class="local_text">定位失败了</span>'+
        '       <span class="local_text">请检测您的定位设置</span>'+
        '       <div class="footer" >'+
        '         <span ng-click="makeSure()" >确定</span>'+
        '	    </div>'+
        '	 </div>'+
        ' </div>',
        link : function(scope, element, attr) {
        }
    }
});
//封装消息提示框,2s后自动隐藏
angular.module('app').directive('modalTip', function() {
    return {
        restrict : 'E',
        replace : true,
        scope : {
            openModal:'=',
            modalTitle:'@'
        },
        template :
        ' <div class="modalMask"  ng-show="openModal">'+
        '    <div class="mask"  >'+
        '	 </div>'+
        '    <div class="modal location">'+
        '       <span class="local_text">{{modalTitle}}</span>'+
        '	 </div>'+
        ' </div>',
        link : function(scope, element, attr) {

        }
    }
});
