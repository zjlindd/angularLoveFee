
git clone

进入到项目根目录  执行
bower install   

npm install

gulp server


1、angular+gulp+less+bower

2、angular路由部分用：ui-router

3、表单验证用： angular-validation

4、密码保存用： angular-cookie

5、密码加密用：

6、公共组件封装成directive（header、nav）

7、页面传值

gulp使用

npm init 

npm install --save-dev gulp

npm install --save-dev gulp-clean gulp-concat gulp-connect gulp-cssmin gulp-imagemin gulp-less gulp-load-plugins gulp-plumber gulp-uglify lodash open

开发注意事项：

1、自定义组件 名字书写规范的问题。定义时 headerBar  页面使用时 header-bar  

2、less 语法嵌套的使用

3、&父级

4、angular $ocLazyLoad 弱加载的使用  me-lazyload的使用 问题

  angular.element(document.querySelectorAll('.list-show')).bind('scroll', checkImage);

5、$locationProvider

6、$ocLazyLoadProvider

7、双向数据绑定

8、npm与bower的区别

9、引用字体图标 fonts 跟css 放在根目录

10、element的用法

11、box-sizing: border-box;

12、对angularjs共享数据的认识

13、&proveder

14、localStorage 存储对象的问题

15、array.indexOf("str") 用法问题

16、AngularJS使用Controller实现URL跳转

假设当前页面的url是http://127.0.0.1:8080/#/home

$location.path(path);执行后就会跳到http://127.0.0.1:8080/#/signin

如果你发现页面不能正常跳转，可以在$location.path(path);后面再加上一句
var curUrl = $location.absUrl(); //用来显示url全路径
调试跟踪页面时查看curUrl的值到底变成多少，大概就能猜出问题出在哪了。

17、angular 提供的内在服务 $http, $route, $window, $location $constant $value 

$decorator        
                  
$provider 


service:一般直接用this来操作数据、定义函数。无论我们在什么地方注入我们的service，将永远
使用同一个实例


MyController.$inject = ['$scope', 'dateFilter']; 

数组中Service名称的个数必须与方法体中Service名称的个数一致

数组中Service的顺序必须与方法体中Serivce的顺序一致 

app.service('myService', function() {  
    var privateValue = "I am Private";  
    this.variable = "This is public";  
    this.getPrivate = function() { return privateValue;  
};  
});  

18、flex布局

flex-direction

flex-wrap

flex-flow

justify-content 

align-items: flex-start | flex-end | center | baseline | stretch;

align-content

19、float 和position：relative怎么样？

20、等高布局奇淫技巧之-padding-bottom：1000px;margin-botom:-1000px;

21、float百分比相对于谁的问题？

22、float 子元素怎么等高呢？

23、angularJs 中对this的认识。

24、transclude: false, // 踩坑记

25、css图片居中(水平居中和垂直居中)的几种办法

26、angular中this 的完美使用，认识this的作用域问题 

 this.isCheck=!this.isCheck;//一定要这样写否则isCheck 会没有定义

26、$state.go();页面传参的注意点：首先，要在目标页面定义接受的参数：

27、1.登陆页面、2.注册页面、 3.我的订单页面、 4.商品详情页面、5.商品收藏页、6.会员中心页、7.收货地址页面、  8.凑单专区页面 、 9.结算付款页面。

28、底部切换效果做好、收货时间做好、加上过渡加载动画效果

29、字符串的方法 substring  substr indexOf split()

30、捕获到AngularJs渲染完成页面的事件。

31、string 对象的test()的用法。

32、图片懒加载的应用

33、加入购物车按钮，底部购物车按钮、封装成控件

34、页面传对象的用法：

encodeURI(JSON.stringify(item));

JSON.parse(decodeURI($state.params.producerId));

35、app登陆验证这一块 cookie session token 的接解答。

建张登录表，里面存放用户信息及token， 登录，验证用户名+密码或是手机号+验证码，后端生成

token存入登录表。

所有的接口都带上token参数，访问接口前先验证token是否有效。

移动端是没有cookie的。

session是基于cookie的。

cookie是由浏览器来接受处理的,cookie只是在客户端存东西。

36、移动端js性能优化方案

37、新发现  text-overflow: ellipsis;在display：flex元素上无效。 autoprefixer

38、不过angularJS这东西仅限于JS这块，它对UI的支持为0，不仅为0，而且当你使用其它的UI框架和angular配合的话，经常会出现兼容问题，而且不好解决，毕竟angular是要编译html模板的，那么多东西塞进去，如果它的编译器都能处理得当，那才叫见鬼了呢

39、ionic 的使用。混合开发框架的选择。 angular ui-bootstarp

40、伪元素的使用：before 使用图片背景时需要注意的地方 width display:block。

41、directive 里面的事件的双向数据绑定。

42、今天完成 登陆注册、支付页面。

43、CSS实现进度条和加载中进度条的效果（拓展到对css3 @keyframes 的认识）

44、如何部署到服务器上去。服务器升级时不中断用户服务。

45、添加登陆和注册页面 

46、封装loading效果和做下性能优化，图片优化，js优化，完整的登陆注册流程

47、优化loading效果

48、解决build后轮播图失效问题-版本问题

49、商品收藏,页面开发

50、收货人地址数据完善

51、打包后angularjs自定义指令报注入错误的解决




