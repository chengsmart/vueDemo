/**
 * Created by chengshuai on 2017/9/4.
 * Email:chengshuai.tj@gmail.com
 * Author:Smart
 * Description:
 */
import fetch from '@/utils/fetch'
import { removeToken, setToken } from '@/utils/auth'
import Axios from 'axios'

// 登录接口，由于接口比较特殊，进行单独控制，不使用fetch封装
export function login(username, password,role) {
    const service = Axios.create({
        baseURL: process.env.BASE_API, // api的base_url
        timeout: 15000                  // 请求超时时间
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
                setToken(response.data.token);
                return response.data
            }
        },
        error => {
            // TODO 添加对门特401的控制
            console.log('err' + error)// for debug
            Toast({
                message: error.message,
                type: 'error',
                duration: 5 * 1000
            })
            return Promise.reject(error)
        }
    )
    return service({
        url: '/cdm-app/token',
        method: 'post',
        // data:'username=' + username + '&password=' + password + '&role=' + role
        data: {
            username,
            password,
            role
        },
        transformRequest:function (data) {
            let params = []
            for(let key in data){
                params.push(key + '=' + encodeURIComponent(data[key]))
            }
            return params.join('&')
        }
    })
}

export function logout() {
    return fetch({
        url: '/user/logout',
        method: 'post'
    })
}