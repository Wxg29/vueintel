import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/main"
  },


  // 主文件  main
  {
    path: "/main",
    // name: "main",
    component: () => import("@/views/Main.vue"),
    redirect: "/main/home",  //进入主文件重定向到 主页 home
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/Home.vue")
      },
      {
        path: "pmp",
        name: "pmp",
        component: () => import("@/views/Pmp.vue")
      },
      {
        path: "science",
        name: "science",
        component: () => import("@/views/Science.vue")
      },
      {
        path: "college",
        name: "college",
        component: () => import("@/views/College.vue")
      },
      {
        path: "mine",
        name: "mine",
        component: () => import("@/views/Mine.vue")
      }
    ]
  },
  {
    path: "/search",
    name: "search",
    component: () => import("@/views/Search.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/Register.vue")
  },
  {
    path: "/watchvideo/:sourceLink",
    name: "watchvideo",
    component: () => import("@/views/Watchvideo.vue")
  },
  {
    path: "/watchnews/:id",
    name: "watchnews",
    component: () => import("@/views/Watchnews.vue")
  },
  {
    path: "/spmpto/:id",
    name: "spmpto",
    component: () => import("@/views/Spmpto.vue")
  },
  {
    path: "/watchpmp/:url",
    name: "watchpmp",
    component: () => import("@/views/Watchpmp.vue")
  },

  //404页面
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
  {
    path: "*",
    redirect: { name: "404" }
  }

]
// 3. 创建路由实例对象 
const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})



//路由进入之前  -- 全局前置守卫
router.beforeEach((to, from, next) => {
  console.log(document.getElementsByClassName('box'));

  document.getElementsByClassName('box').ClassName = "box enter"
  next()
})


// 4 挂载 暴露之后再去挂载 
export default router
