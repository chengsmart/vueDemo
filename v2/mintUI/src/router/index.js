import Vue from 'vue'
import Router from 'vue-router'
import HomeTab from '@/views/home/HomeTab'
import Hello from '@/views/Hello'
import Detail from '@/views/Detail'
import List from '@/views/List'

Vue.use(Router)

export default new Router({
    routes: [
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
            component: Detail
        },
        {
            path: '/list',
            name: 'List',
            component: List
        }
    ]
})
