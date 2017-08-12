import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

new Vue({
    router: router,
    el: '#app',
    render: h => h(App)
});