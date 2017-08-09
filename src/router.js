/**
 * 路由规则
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

/* 开启debug模式 */
Vue.config.debug = true;

Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path:'/',
        component:require('./App.vue'),
        children:[
            {
                path:'/home',
                name:'home',
                component:require('./pages/home.vue')
            }
        ]
    }
];

const router = new VueRouter({
    routes:routes,
    history:true,
    linkActiveClass:'active', //如果有底部导航栏，这个属性可以为被选中的路由增加相应的选中状态class
});

export default router;