/**
 * Created by chengshuai on 2017/9/5.
 * Email:chengshuai.tj@gmail.com
 * Author:Smart
 * Description:
 */
import router from './router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { getToken } from '@/utils/auth'

router.beforeEach((to, from, next) => {
    NProgress.start()// 开始过渡条动画
    // 禁止已经登录的状态跳转到登录页
    if(getToken() && to.path === '/login'){
        next({ path: '/' });
        return;
    }
    // 需要登录的页面进行拦截
    if(to.meta.needAuth && !getToken()){
        next({ path: '/login' })
    }else{
        next()
    }
})

router.afterEach(() => {
    NProgress.done() // 结束Progress
})