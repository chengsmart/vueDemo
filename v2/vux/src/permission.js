/**
 * Created by chengshuai on 2017/9/5.
 * Email:chengshuai.tj@gmail.com
 * Author:Smart
 * Description:
 */
import router from './router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式

router.beforeEach((to, from, next) => {
    NProgress.start(); // 开始过渡条动画
    // TODO 添加登录状态判断，跳转到到登录页面
    next();
});

router.afterEach(() => {
    NProgress.done() // 结束Progress
});