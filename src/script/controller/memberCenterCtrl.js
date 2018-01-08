
angular.module('app').controller('memberCenterCtrl', ['$http', '$scope', "$timeout",'local','productInfo', function($http, $scope, $timeout,local,productInfo){

    $scope.memberTipArr=[{
        "title":"成长值",
        "content":"会员等级有效期为1年，1年后扣减相应等级成长值，剩余成长值重新计算会员级别。",
        "isFold":false
    },{
        "title":"成长攻略",
        "content":'' +
        "会员等级越高获得的积分越多。"+
        "1、注册会员：0.5倍积分"+
        "2、普通会员：1倍积分"+
        "3、白银会员：1.5倍积分"+
        "4、黄金会员：2倍积分"+
        "5、钻石会员：3倍积分",
        "isFold":false
    },{
        "title":"特权",
        "content":"" +
        "1、注册会员：30成长值＝0;" +
        "2、普通会员：199成长值＝30;" +
        "3、白银会员：499成长值＝199;" +
        "4、黄金会员：999成长值＝499;" +
        "5、钻石会员：成长值＝999;",
        "isFold":false
    },{
        "title":"会员等级说明",
        "content":"" +
        "1、购买精选商品实付金额1、转化为成长值(不包含优惠券等抵扣部分);" +
        "2、在“天津、西安、成都、南京、佛山”下单，完成订单后可以获得10成长值;" +
        "3、商品退换货，需扣除该商品所获得成长值;" +
        "4、订单取消，需扣除该订单所获得成长值;" +
        "5、因作弊等行为产生的成长值，爱鲜蜂有权扣除相应成长值;",
        "isFold":false
    }];

    $scope.toggleClass=function (item) {
        item.isFold= !item.isFold;
    }
}]);