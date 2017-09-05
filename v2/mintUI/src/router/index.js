import Vue from 'vue'
import Router from 'vue-router'
import HomeTab from '@/views/home/HomeTab'
import Hello from '@/views/Hello'
import Detail from '@/views/Detail'
import List from '@/views/List'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '*',
            redirect: '/'
        },
        {
            path: '/',
            name: 'HomeTab',
            component: HomeTab
        },
        {
            path: '/hello',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/detail',
            name: 'Detail',
            meta:{
                needAuth:true
            },
            component: Detail,
            needAuth:true
        },
        {
            path: '/list',
            name: 'List',
            component: List
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})
