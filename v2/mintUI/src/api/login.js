/**
 * Created by chengshuai on 2017/9/4.
 * Email:chengshuai.tj@gmail.com
 * Author:Smart
 * Description:
 */
import fetch from '@/utils/fetch'

export function login(username, password) {
    return fetch({
        url: '/cdm-app/token',
        method: 'post',
        data: {
            username,
            password
        }
    })
}

export function getInfo(token) {
    return fetch({
        url: '/user/info',
        method: 'get',
        params: { token }
    })
}

export function logout() {
    return fetch({
        url: '/user/logout',
        method: 'post'
    })
}