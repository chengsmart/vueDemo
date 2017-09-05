/**
 * Created by chengshuai on 2017/9/5.
 * Email:chengshuai.tj@gmail.com
 * Author:Smart
 * Description:
 */
import fetch from '@/utils/fetch'
import { removeToken, setToken } from '@/utils/auth'

export function getUserInfo() {
    return fetch({
        url: '/cdm-app/v2/user/getUserInfo',
        method: 'get'
    })
}

export function logout() {
    return fetch({
        url: '/user/logout',
        method: 'post'
    })
}