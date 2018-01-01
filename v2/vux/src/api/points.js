/**
 * Created by chengshuai on 2017/9/4.
 * Email:chengshuai.tj@gmail.com
 * Author:Smart
 * Description:
 */
import fetch from '@/utils/fetch'

// 用户积分列表查询
export function pageComplexUserPoints (weworkUserId = '',name = '',mobile = '',pageNo = 1,pageSize = 20) {
    return fetch({
        url: '/pes/userPoint/pageComplexUserPoints',
        method: 'get',
        params:{
            weworkUserId,
            name,
            mobile,
            pageNo,
            pageSize,
        }
    })
}
// 用户积分详情查询
export function pageUserPointAction (userId) {
    return fetch({
        url: '/pes/userPoint/pageUserPointAction',
        method: 'get',
        params:{
            userId
        }
    })
}
// 维护用户积分
export function userPoint (data) {
    return fetch({
        url: '/pes/userPoint',
        method: 'put',
        data
    })
}
// 确认批量导入数据
export function batchPointExcel (batchNumber) {
    return fetch({
        url: '/pes/userPoint/batchPointExcel/' + batchNumber,
        method: 'put'
    })
}