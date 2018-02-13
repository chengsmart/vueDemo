import Vue from 'vue'
import Router from 'vue-router'
import Empty from '@/views/404'
import Home from '@/views/home/Index'
import Category from '@/views/category/Index'
import Cart from '@/views/cart/Index'
import Personal from '@/views/personal/Index'
import Login from '@/views/login/Index'
import SubmitOrder from '@/views/order/SubmitOrder'
// 新闻页面
import NewsList from '@/views/news/Index'
import NewsDetail from '@/views/news/Detail'
// 活动页面 满减
import FullCut from '@/views/activity/FullCut'
import FullCutDetail from '@/views/activity/FullCutDetail'
// 个人中心相关
import Order from '@/views/order/Index'
import Point from '@/views/point/Index'
import Coupon from '@/views/coupon/Index'
import Address from '@/views/address/Index'
import operateAddress from '@/views/address/OperateDeliveryAddress'

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/empty',
            name: '404',
            component: Empty
        },
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/category',
            name: 'Category',
            component: Category
        },
        // 购物车
        {
            path: '/cart',
            name: 'Cart',
            component: Cart
        },
        // 提交订单
        {
            path: '/submitorder',
            name: 'SubmitOrder',
            component: SubmitOrder
        },
        {
            path: '/personal',
            name: 'Personal',
            meta: {
                requireAuth: true
            },
            component: Personal
        },
        //登录
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        // 满减
        {
            path: '/fullcut',
            name: 'FullCut',
            component: FullCut
        },
        // 满减详情
        {
            path: '/fullcutdetail',
            name: 'FullCutDetail',
            component: FullCutDetail
        },
        // 订单管理
        {
            path: '/order',
            name: 'Order',
            component: Order
        },
        // 我的积分
        {
            path: '/point',
            name: 'Point',
            component: Point
        },
        // 我的地址
        {
            path: '/address',
            name: 'Address',
            component: Address,
        },
        //TODO 未实现父子路由
        //我的地址新增
        {
            path: '/operateAddress',
            query:{
                type:'create'
            },
            name: 'operateAddress',
            component: operateAddress
        },
        // 我的优惠券
        {
            path: '/coupon',
            name: 'Coupon',
            component: Coupon
        },
        // 新闻列表
        {
            path: '/news',
            name: 'NewsList',
            component: NewsList
        },
        // 新闻详情
        {
            path: '/news/detail',
            name: 'NewsDetail',
            component: NewsDetail
        },
        {
            path: '*',
            redirect: '/empty'
        }
    ]
})
