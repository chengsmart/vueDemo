/**
 * Created by chengshuai on 09/01/2018.
 * Email:chengshuai.tj@gmail.com
 * Author:Smart
 * Description:
 */
import fetch from '@/utils/fetch'
import axios from 'axios'
import { Msg } from 'vux'

// 登录接口，由于接口比较特殊，进行单独控制，不使用fetch封装
export function login (username, password) {
    // 创建axios实例
    const service = axios.create({
        baseURL: process.env.BASE_API, // api的base_url
        timeout: 15000                  // 请求超时时间
    });
    // respone拦截器
    service.interceptors.response.use(
        response => {
            return response.data
        },
        error => {
            return Promise.reject(error)
        }
    );
    return service({
        url: '/taslyb2bappmobile/login',
        method: 'post',
        data: {
            username,
            password
        },
        transformRequest: function (data) {
            let params = [];
            for (let key in data) {
                params.push(key + '=' + encodeURIComponent(data[key]))
            }
            return params.join('&')
        }
    })
}
