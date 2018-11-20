/**
 * Created by chengshuai on 09/01/2018.
 * Email:chengshuai.tj@gmail.com
 * Author:Smart
 * Description:
 */
import fetch from '@/utils/fetch'
import Lockr from 'Lockr'

//获取用户信息
export function getUserInfo(req) {
    return fetch({
        url: '/user/getUserInfo',
        method: 'get',
        headers: {'Authorization': Lockr.get('token')}
    })
}
