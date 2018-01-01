/**
 * Created by chengshuai on 2017/9/4.
 * Email:chengshuai.tj@gmail.com
 * Author:Smart
 * Description:
 */
import fetch from '@/utils/fetch'

// 获取list
export function getList() {
    return fetch({
        url: '/list',
        method: 'get'
    })
}