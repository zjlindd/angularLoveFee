//开始gulp使用
let gulp=require("gulp");
let less = require('gulp-less');
let autoPreFixer=require('gulp-autoprefixer');
let cssMin=require('gulp-cssmin');
let plumber=require("gulp-plumber");
let concat=require("gulp-concat");
let uglify=require("gulp-uglify");
let imagemin=require("gulp-imagemin");
let clean=require("gulp-clean");
let open=require("open");
let connect=require("gulp-connect");

//定义目录路径
let app={
    "srcPath":"src/",
    "devPath":"build/",
    "prdPath":"dist/",
};
//定义任务
gulp.task("lib",function(){
    gulp.src("bower_components/**/*.js")
        .pipe(gulp.dest(app.devPath+"lib"))
        .pipe(gulp.dest(app.prdPath+"lib"))
        .pipe(connect.reload());
});

//html 搬家
gulp.task("html",function(){
    gulp.src(app.srcPath+"**/*.html")
        .pipe(gulp.dest(app.devPath))
        .pipe(gulp.dest(app.prdPath))
        .pipe(connect.reload());
});
//json搬家
gulp.task('json', function() {
    gulp.src(app.srcPath + 'data/**/*.json') //所有的json文件照搬到另外两个目录
        .pipe(gulp.dest(app.devPath + 'data'))
        .pipe(gulp.dest(app.prdPath + 'data'))
        .pipe(connect.reload());
});
//编译less文件并压缩less
gulp.task('less', function() { //使用less编写的css
    gulp.src(app.srcPath + 'style/**/*.less') //index.less导入其他less文件
        .pipe(less()) //less转为css
        .pipe(autoPreFixer()) //自动添加浏览器前缀
        .pipe(gulp.dest(app.devPath + 'css'))
        .pipe(cssMin()) //压缩css
        .pipe(gulp.dest(app.prdPath + 'css'))
        .pipe(connect.reload());
});
//css搬家
gulp.task('css', function() { //使用less编写的css
    gulp.src(app.srcPath + 'style/**/*.css')
        .pipe(gulp.dest(app.devPath + 'css'))
        .pipe(cssMin()) //压缩css
        .pipe(gulp.dest(app.prdPath + 'css'))
        .pipe(connect.reload());
});
//font 搬家
gulp.task('font', function() {
    gulp.src(app.srcPath + 'style/fonts/**/*')
        .pipe(gulp.dest(app.devPath + 'fonts'))
        .pipe(gulp.dest(app.prdPath + 'fonts'))
});

//js文件的压缩混肴
gulp.task('js', function() {
    gulp.src(app.srcPath + 'script/**/*.js')
        .pipe(plumber()) //阻止gulp插件发生错误导致进程退出并输出错误日志。
        .pipe(concat('index.js')) //全部打包为index.js
        .pipe(gulp.dest(app.devPath + 'js'))
        .pipe(uglify())// 混淆（丑化）js
        .pipe(gulp.dest(app.prdPath + 'js'))
        .pipe(connect.reload());
});
//image图片的压缩
gulp.task('image', function() {
    gulp.src(app.srcPath + 'images/**/*')
        .pipe(gulp.dest(app.devPath + 'images'))
        .pipe(imagemin())
        .pipe(gulp.dest(app.prdPath + 'images'))
        .pipe(connect.reload());
});

//清除文件夹包括所有的文件
gulp.task('clean', function() { //这个任务清除文件夹
    gulp.src([app.devPath, app.prdPath])
        .pipe(clean());
});

//任务依赖
gulp.task('build', ['image', 'js', 'less','css','font', 'lib', 'html', 'json']);

//开一个服务器
gulp.task('server', ['build'], function() {
    connect.server({
        root: [app.devPath],
        livereload: true,
        port: 3000
    });
    open('http://localhost:3000'); //自动打开浏览器
    gulp.watch('bower_components/**/*', ['lib']);
    gulp.watch(app.srcPath + '**/*.html', ['html']);
    gulp.watch(app.srcPath + 'data/**/*.json', ['json']);
    gulp.watch(app.srcPath + 'style/**/*.less', ['less']);
    gulp.watch(app.srcPath + 'script/**/*.js', ['js']);
    gulp.watch(app.srcPath + 'images/**/*', ['image']);
});

gulp.task('default', ['server']);