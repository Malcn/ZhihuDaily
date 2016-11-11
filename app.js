import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'
import Mint from 'mint-ui'
import store from './src/store'
import App from './src/App.vue' //页面模板
import home from './src/components/home.vue' //首页
import detail from './src/components/Detail.vue' //详细页
import themedetail from './src/components/themelist.vue'//主题详细页
import filters from './src/utils/filter2.js'
Vue.config.devtools = true

//注册过虑器
Object.keys(filters).forEach((k) => Vue.filter(k, filters[k]))

import './src/assets/site.css'

Vue.use(Mint)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueLazyload, {
    preLoad: 1.3,
    loading: '/src/assets/images/loading.gif'
})


var router = new VueRouter({
    routes: [
        { path: '/', name: 'index', component: home },
        { path: '/detail/:id', name: 'detail', component: detail },
        { path: '/themedetail/:id', name: 'themedetail', component: themedetail }
    ]
})

new Vue({
    el: '#app',
    store,
    render: h => h(App),
    router,
    http: {
        root: '/root',
        headers: {
            Authorization: 'Basic YXBpOnBhc3N3b3Jk'
        }
    }
})

