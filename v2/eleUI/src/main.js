import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(Element);

Vue.prototype.$axios = axios;

// TODO 使用内联模版在修改webpack配置之后报错，暂时修改为import
const First = { template: '<div><h2>我是第 一 个子页面</h2></div>' };
import page1 from './component/page1.vue';
import email from './component/email.vue';

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/page1',
            component: page1
        },
        {
            path: '/second',
            component: email
        }
    ]
});

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');

// new Vue({
//     el: '#app',
//     render: h => h(App)
// })
