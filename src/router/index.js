import { createRouter, createWebHistory } from "vue-router";
//pinia
import { useUserStore } from '@/store/user'
//首页
import Home from "../views/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/course",
    name: "Course",
    component: () =>
      import(/* webpackChunkName: "course" */ "../views/Course.vue"),
  },
  {
    path: "/course-info/:id",
    name: "CourseInfo",
    component: () =>
      import(/* webpackChunkName: "courseInfo" */ "../views/CourseInfo.vue"),
  },
  { 
    path:'/course-play/:courseId/:chapterId',
    name:'course-play',
    component: () =>
      import(/* webpackChunkName: "CoursePlay" */ "../views/CoursePlay.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () =>
      import(/* webpackChunkName: "cart" */ "../views/Cart.vue"),
    beforeEnter:(to, from, next)=>{
      if( useUserStore().userInfo.id ){
        next();
      }else{
        next('/login');
      }
    }
  },
  {
    path: "/confirmOrder",
    name: "ConfirmOrder",
    component: () =>
      import(/* webpackChunkName: "confirmOrder" */ "../views/ConfirmOrder.vue"),
    beforeEnter:(to, from, next)=>{
      if( useUserStore().userInfo.id ){
        next();
      }else{
        next('/login');
      }
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;