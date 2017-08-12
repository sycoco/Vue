import Vue from 'vue'
import axios from "axios";
import App from './App.vue'
import router from "./router"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI);

axios.defaults.baseURL = 'http://127.0.0.1:8090'; // 配置请求根路径

new Vue({
    router: router,
    el: '#app',
    render: h => h(App)
});