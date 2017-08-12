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
        redirect: '/home'
    },
    {
        path:'/',
        component:require('./App.vue'),
        children:[
            {
                path:'/home',
                name:'home',
                component:require('./pages/home.vue')
            },
            {
                path:'/login',
                name:'login',
                component:require('./pages/login.vue')
            },
            {
                path:'/allgoods',
                name:'allgoods',
                component:require('./pages/allgoods.vue')
            },
            {
                path:'/shoppingCart',
                name:'shoppingCart',
                component:require('./pages/shoppingCart.vue')
            },
            {
                path:'/myOrders',
                name:'myorders',
                component:require('./pages/myOrders.vue')
            }
        ]
    }
];

const router = new VueRouter({
    routes:routes,
    history:true
});

export default router;