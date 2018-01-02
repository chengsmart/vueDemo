/**
 * Created by chengshuai on 2017/9/4.
 * Email:chengshuai.tj@gmail.com
 * Author:Smart
 * Description:
 */
import fetch from '@/utils/fetch'
//获取订单列表
export function querySkuInformation(skuId) {
    return fetch({
        url: '/item/' + skuId,
        method: 'get'
    })
}
