# YOG2
百度旗下前端框架，依赖于fis3

/**
 * @file FIS 配置
 * @author
 */
fis.config.set('namespace', 'myApp1');

// chrome下可以安装插件实现livereload功能
// https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
fis.config.set('livereload.port', 35729);
if (fis.IS_FIS3) {

    // 启用 fis-spriter-csssprites 插件 雪碧图
    fis.match('::package', {
        spriter: fis.plugin('csssprites')
    });
    //编译less
    fis.match('*.less', {
        // fis-parser-css 插件进行解析
        parser: fis.plugin('less'),
        // .css 文件后缀构建后被改成 .css 文件
        rExt: '.css'
    });
    // 对 CSS 进行图片合并 雪碧图
    fis.match('*.css', {
        // 给匹配到的文件分配属性 `useSprite`
        useSprite: true
    });

    //模块化
    fis.match('static/js/customer/*.js', {
         isMod: true
    });
    ///////////////////// 优化 //////////////////////////////
    fis.match('*.css', {
        useSprite: true,
        // fis-optimizer-clean-css 插件进行压缩，已内置
        optimizer: fis.plugin('clean-css')
    });
    fis.match('*.js', {
        // fis-optimizer-uglify-js 插件进行压缩，已内置
        optimizer: fis.plugin('uglify-js')
    });

    fis.match('*.css', {
        // fis-optimizer-clean-css 插件进行压缩，已内置
        optimizer: fis.plugin('clean-css')
    });

    fis.match('*.png', {
        // fis-optimizer-png-compressor 插件进行压缩，已内置
        optimizer: fis.plugin('png-compressor')
    });

    //html声明的依赖放入map文件
    fis.match('*.html', {
        useMap: true
    });
    //自动更新pack.json文件
    fis.set('project.ignore', ['pack.json']); // set 为覆盖不是叠加

    //生成页面静态资源map
    fis.match('::package', {
        //打包前获取自动打包配置
        prepackager: fis.plugin('auto-pack',{

            /***以下为基于统计的自动打包配置***/

            //log/simple获取配置方式，默认为simple
            //type : 'log',

            //获取模块自动打包配置的api接口，仅在基于统计的自动打包方式下使用
            //api  : './pack.js',

            //传递给api的参数，可自定义，默认包括模块(module)字段,与api一起使用
           // params : {}


            /**以下为打包模块参数**/

            ////pc/mobile,不同终端计算rtt和speed参数默认值不一样
            //platform : "pc" ,
            //
            ////rtt时间，pc端默认0.1s ,移动端默认0.5s，越小包个数越多
            //rtt : 0.1 ,
            //
            ////下载速率KB/s,pc端默认100KB/s,移动端默认，越大包个数越小
            //speed : 100,
            //
            ////计算自动打包配置的资源类型，默认为js和css
            staticType : ['js','css'],
            //
            ////资源分组依据，默认根据同步异步(loadType)分别打包，另外支持优先级priority
            ////如果设置[]，则不进行任何区分
            //partKeys: ['loadType','priority'] ,
            //
            ////自定义打包配置，控制特定资源的打包方式，默认为空
            ////注意配置不支持正则，推荐用glob
            defaultPack: {
            'pkg/aio.js' : [
                'static/js/*.js'
            ]}
            //
            ////基础资源配置，这些资源将按指定顺序打在包的最前面
            ////支持文件名和路径配置
            //baseResources: ['mod.js','require.js','esl.js','/lib/css/bootstrap.css']

        })
    });

    //不想打包的文件
    fis.config.set('notPack',{
        'static/js/customer/asyncTest.js':'notPack'
    });
    //获取静态资源打包数据
    var myApp1_pack = require("./pack.js");
    //根据页面静态资源map打包
    fis.match('::package', {
            packager: fis.plugin('deps-pack',myApp1_pack)
    });


    fis.media('debug').match('*', {
        optimizer: null,
        useHash: false,
        useSprite:true,
        deploy: fis.plugin('http-push', {
            receiver: 'http://127.0.0.1:8089/yog/upload',
            to: '/'
        })
    });
    fis.media('debug-prod').match('*', {
        deploy: fis.plugin('http-push', {
            receiver: 'http://127.0.0.1:8085/yog/upload',
            to: '/'
        })
    });
}
else {
    fis.config.set('deploy', {
        debug: {
            to: '/',
            // yog2 默认的部署入口，使用调试模式启动 yog2 项目后，这个入口就会生效。IP与端口请根据实际情况调整。
            receiver: 'http://127.0.0.1:8085/yog/upload'
        }
    });
}

