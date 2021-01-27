import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
// import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "home",
    component: ()=>import('@/views/Home.vue')
  },
  {
    path:"/",
    name: "firstPage",
    component:()=>import("@/views/FirstPage.vue")
  },
  {
    /* 登录 */
    path:"/login",
    name:"loginPage",
    component:()=> import("@/views/login/LoginPage.vue")
  },{
   /* 注册 */
    path:"/register",
    name:"RegisterPage",
    component:() => import("@/views/login/RegisterPage.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to,from,next)=>{
  console.log(to)
  if(to.name == 'home') next({name:'loginPage'})
  else next()
})





export default router;
