
git clone

���뵽��Ŀ��Ŀ¼  ִ��
bower install   

npm install

gulp server


1��angular+gulp+less+bower

2��angular·�ɲ����ã�ui-router

3������֤�ã� angular-validation

4�����뱣���ã� angular-cookie

5����������ã�

6�����������װ��directive��header��nav��

7��ҳ�洫ֵ

gulpʹ��

npm init 

npm install --save-dev gulp

npm install --save-dev gulp-clean gulp-concat gulp-connect gulp-cssmin gulp-imagemin gulp-less gulp-load-plugins gulp-plumber gulp-uglify lodash open

����ע�����

1���Զ������ ������д�淶�����⡣����ʱ headerBar  ҳ��ʹ��ʱ header-bar  

2��less �﷨Ƕ�׵�ʹ��

3��&����

4��angular $ocLazyLoad �����ص�ʹ��  me-lazyload��ʹ�� ����

  angular.element(document.querySelectorAll('.list-show')).bind('scroll', checkImage);

5��$locationProvider

6��$ocLazyLoadProvider

7��˫�����ݰ�

8��npm��bower������

9����������ͼ�� fonts ��css ���ڸ�Ŀ¼

10��element���÷�

11��box-sizing: border-box;

12����angularjs�������ݵ���ʶ

13��&proveder

14��localStorage �洢���������

15��array.indexOf("str") �÷�����

16��AngularJSʹ��Controllerʵ��URL��ת

���赱ǰҳ���url��http://127.0.0.1:8080/#/home

$location.path(path);ִ�к�ͻ�����http://127.0.0.1:8080/#/signin

����㷢��ҳ�治��������ת��������$location.path(path);�����ټ���һ��
var curUrl = $location.absUrl(); //������ʾurlȫ·��
���Ը���ҳ��ʱ�鿴curUrl��ֵ���ױ�ɶ��٣���ž��ܲ³�����������ˡ�

17��angular �ṩ�����ڷ��� $http, $route, $window, $location $constant $value 

$decorator        
                  
$provider 


service:һ��ֱ����this���������ݡ����庯��������������ʲô�ط�ע�����ǵ�service������Զ
ʹ��ͬһ��ʵ��


MyController.$inject = ['$scope', 'dateFilter']; 

������Service���Ƶĸ��������뷽������Service���Ƶĸ���һ��

������Service��˳������뷽������Serivce��˳��һ�� 

app.service('myService', function() {  
    var privateValue = "I am Private";  
    this.variable = "This is public";  
    this.getPrivate = function() { return privateValue;  
};  
});  

18��flex����

flex-direction

flex-wrap

flex-flow

justify-content 

align-items: flex-start | flex-end | center | baseline | stretch;

align-content

19��float ��position��relative��ô����

20���ȸ߲�����������֮-padding-bottom��1000px;margin-botom:-1000px;

21��float�ٷֱ������˭�����⣿

22��float ��Ԫ����ô�ȸ��أ�

23��angularJs �ж�this����ʶ��

24��transclude: false, // �ȿӼ�

25��cssͼƬ����(ˮƽ���кʹ�ֱ����)�ļ��ְ취

26��angular��this ������ʹ�ã���ʶthis������������ 

 this.isCheck=!this.isCheck;//һ��Ҫ����д����isCheck ��û�ж���

26��$state.go();ҳ�洫�ε�ע��㣺���ȣ�Ҫ��Ŀ��ҳ�涨����ܵĲ�����

27��1.��½ҳ�桢2.ע��ҳ�桢 3.�ҵĶ���ҳ�桢 4.��Ʒ����ҳ�桢5.��Ʒ�ղ�ҳ��6.��Ա����ҳ��7.�ջ���ַҳ�桢  8.�յ�ר��ҳ�� �� 9.���㸶��ҳ�档

28���ײ��л�Ч�����á��ջ�ʱ�����á����Ϲ��ɼ��ض���Ч��

29���ַ����ķ��� substring  substr indexOf split()

30������AngularJs��Ⱦ���ҳ����¼���

31��string �����test()���÷���

32��ͼƬ�����ص�Ӧ��

33�����빺�ﳵ��ť���ײ����ﳵ��ť����װ�ɿؼ�

34��ҳ�洫������÷���

encodeURI(JSON.stringify(item));

JSON.parse(decodeURI($state.params.producerId));

35��app��½��֤��һ�� cookie session token �Ľӽ��

���ŵ�¼���������û���Ϣ��token�� ��¼����֤�û���+��������ֻ���+��֤�룬�������

token�����¼��

���еĽӿڶ�����token���������ʽӿ�ǰ����֤token�Ƿ���Ч��

�ƶ�����û��cookie�ġ�

session�ǻ���cookie�ġ�

cookie��������������ܴ����,cookieֻ���ڿͻ��˴涫����

36���ƶ���js�����Ż�����

37���·���  text-overflow: ellipsis;��display��flexԪ������Ч�� autoprefixer

38������angularJS�ⶫ��������JS��飬����UI��֧��Ϊ0������Ϊ0�����ҵ���ʹ��������UI��ܺ�angular��ϵĻ�����������ּ������⣬���Ҳ��ý�����Ͼ�angular��Ҫ����htmlģ��ģ���ô�ණ������ȥ��������ı��������ܴ���õ����ǲŽм�������

39��ionic ��ʹ�á���Ͽ�����ܵ�ѡ�� angular ui-bootstarp

40��αԪ�ص�ʹ�ã�before ʹ��ͼƬ����ʱ��Ҫע��ĵط� width display:block��

41��directive ������¼���˫�����ݰ󶨡�

42��������� ��½ע�ᡢ֧��ҳ�档

43��CSSʵ�ֽ������ͼ����н�������Ч������չ����css3 @keyframes ����ʶ��

44����β��𵽷�������ȥ������������ʱ���ж��û�����

45����ӵ�½��ע��ҳ�� 

46����װloadingЧ�������������Ż���ͼƬ�Ż���js�Ż��������ĵ�½ע������

47���Ż�loadingЧ��

48�����build���ֲ�ͼʧЧ����-�汾����

49����Ʒ�ղ�,ҳ�濪��

50���ջ��˵�ַ��������

51�������angularjs�Զ���ָ�ע�����Ľ��




