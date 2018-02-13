/**
 * Created by chengshuai on 2017/9/5.
 * Email:chengshuai.tj@gmail.com
 * Author:Smart
 * Description:
 */
import router from './router'
import Lockr from 'Lockr'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { getUserInfo } from '@/api/user'

router.beforeEach((to, from, next) => {
    NProgress.start(); // 开始过渡条动画
    //登录页面需要设置body为白色
    document.body.style.backgroundColor = to.name == 'Login' ? '#fff' : '#f6f6f6';
    // 添加登录状态判断，跳转到到登录页面
    if(to.meta.requireAuth && !Lockr.get('token')){
        next({ path: '/login', query:{uri : to.fullPath} });
        return;
    }
    if(Lockr.get('token') && !Lockr.get('userInfo')){
        getUserInfo()
            .then(res => {
                console.log(res);
                Lockr.set('userInfo',res);
            })
    }
    next();
});

router.afterEach(() => {
    NProgress.done() // 结束Progress
});