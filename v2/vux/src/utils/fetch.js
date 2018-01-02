/**
 * Created by chengshuai on 2017/9/4.
 * Email:chengshuai.tj@gmail.com
 * Author:Smart
 * Description:
 */
import axios from 'axios'
import { Msg } from 'vux'
import { errorCodeMap } from '@/utils/errorCode'
// 创建axios实例
const service = axios.create({
    baseURL: process.env.BASE_API, // api的base_url
    timeout: 15000                  // 请求超时时间
});
// respone拦截器
service.interceptors.response.use(
    response => {
        // TODO 请求接收后，停止等待动画
        // code为非0是抛错
        const res = response.data;
        if (res.status) {
            Msg({
                title:'业务逻辑错误',
                description:errorCodeMap(res.errors[0].code,res.errors[0].message),
                icon:'warn'
            });
            return Promise.reject('error')
        }
        return response.data
    },
    error => {
        // TODO 请求接收后，停止等待动画
        Msg({
            title:'接口错误',
            description: error.message,
            icon:'warn'
        })
        return Promise.reject(error)
    }
);
export default service