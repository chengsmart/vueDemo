/**
 * Created by chengshuai on 2017/9/4.
 * Email:chengshuai.tj@gmail.com
 * Author:Smart
 * Description:
 */
import axios from 'axios'

export default function (Vue) {

    // 创建axios实例
    const service = axios.create({
        baseURL: process.env.BASE_API + '/taslyb2bappmobile/b2b', // api的base_url
        timeout: 15000 // 请求超时时间
    });

    // respone拦截器
    service.interceptors.response.use(
        response => {
            // TODO 请求接收后，停止等待动画
            // code为非0是抛错
            const res = response.data;
            alert(res.message);// 正常alert

            Vue.$vux.toast.show({text: '业务报错信息'});
            if (res.resCode != 200) {
                return Promise.reject('error')
            }
            return response.data
        },
        error => {
            Vue.$vux.toast.show({text: 'http报错'});
            // TODO 请求接收后，停止等待动画

            return Promise.reject(error)
        }
    );
}