/**
 * Created by chengshuai on 2017/9/4.
 * Email:chengshuai.tj@gmail.com
 * Author:Smart
 * Description:
 */
import axios from 'axios'
import { getToken } from '@/utils/auth'
import { removeToken } from '@/utils/auth'
import { Toast,Messagebox } from 'mint-ui'

// 创建axios实例
const service = axios.create({
    baseURL: process.env.BASE_API, // api的base_url
    timeout: 15000                  // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
    // TODO 判断是否需要登录权限
    if (getToken()) {
        config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
    response => {
         // code为非0是抛错
        const res = response.data
        if (res.errCode) {
            Toast(res.message)
            
            // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
            if (res.errCode === 401) {
                Messagebox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
                    confirmButtonText: '重新登录',
                    cancelButtonText: '取消',
                    type: 'warning' // TODO mintUI中是否有这个参数？文档没有，待测试
                }).then(() => {
                    removeToken();
                    // TODO 是否需要返回首页，初始化后应该已经返回首页
                    location.reload()// 为了重新实例化vue-router对象 避免bug
                })
            }
            return Promise.reject('error')
        } else {
            return response.data
        }
    },
    error => {
        console.log('err' + error)// for debug
        Toast({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service