import Vue from 'vue'
import Router from 'vue-router'
import Empty from '@/views/404'
import Home from '@/views/Home/Index'
import List from '@/views/List/Index'
import Detail from '@/views/Detail/Index'
import Tab from '@/views/Tab/Index'

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/empty',
            name: '404',
            component: Empty
        }, {
            path: '/',
            name: 'Home',
            component: Home
        }, {
            path: '/list',
            name: 'List',
            component: List
        }, {
            path: '/detail',
            name: 'Detail',
            component: Detail
        }, {
            path: '/tab',
            name: 'Tab',
            component: Tab
        }, {
            path: '*',
            redirect: '/empty'
        }
    ]
})
