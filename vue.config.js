

// webpack 打包操作 
//Vue-cli 脚手架的配置文件
//以后修改这个配置文件 一定要重启服务器才有用

//反向代理一定要注释掉axios的基路径


module.exports = {
    lintOnSave: false,  //处理 ESLint 的错误提示问题
    devServer: {
        host: "localhost",  // 0.0.0.0
        port: 8080,
        open: true,  // 自动打开浏览器
        inline: true,
        proxy: {   // 反向代理  解决跨域
            "/vue": {
                // target: "http://localhost:3000",    //pathRewrite省略   因为所有的接口的path都有 vue 
                target: "http://39.97.219.99:5000",    //pathRewrite省略   因为所有的接口的path都有 vue 
            },
            "/inl": {
                target: "https://ccechina.intel.com",
                pathRewrite: {
                    "^/inl": ""  //需要将 /yun   重写为 /
                }
            },
            "/news": {
                target: "https://api.moblink.mob.com",
                pathRewrite: {
                    "^/news": ""
                }
            },
        }
    },
    publicPath: "",  // 项目上线打包用到
    css: {
        loaderOptions: {
            css: {},
            postcss: {   // css 代码转化
                plugins: [  // 插件
                    require("postcss-px2rem")({
                        remUnit: 37.5       // 淘宝适配   设计稿是 750就除以2    350就不用除
                        // remUnit:100     // 网易适配   除以100
                    })
                ]
            }
        }
    }
}