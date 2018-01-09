/**
 * Created by chengshuai on 09/01/2018.
 * Email:chengshuai.tj@gmail.com
 * Author:Smart
 * Description:
 */
import fetch from '@/utils/fetch'

// 获取list
export function getTabList(id) {
    return fetch({
        url: '/tabsInformation/' + id,
        method: 'get'
    })
}