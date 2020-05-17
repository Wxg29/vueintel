import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//1.淘宝适配插件  -S安装
import "lib-flexible";

//引入全局css样式
import "@/styles/index.scss"

//下载引入vant组件库 再下载插件
//按需加载 --- 性能优化
import "@/utils/vant"

//全局注册的组件
import "@/utils/global"

//axios导入
import { axios } from "@/utils/axios"
Vue.prototype.$axios = axios   //绑定到了Vue的原型下面   可以通过this.$axios 指向 axios  


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
