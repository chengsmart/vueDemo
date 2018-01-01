/**
 * Created by chengshuai on 2017/9/4.
 * Email:chengshuai.tj@gmail.com
 * Author:Smart
 * Description:
 */
import fetch from '@/utils/fetch'

// 商品列表
export function pageBaseProducts (sku = '',name = '',online = '',pageNo = 1,pageSize = 20) {
    return fetch({
        url: '/pes/product/pageBaseProducts',
        method: 'get',
        params:{
            sku,
            name,
            online,
            pageNo,
            pageSize,
        }
    })
}
// 商品上下架
export function online (sku,online) {
    return fetch({
        url: '/pes/product/online',
        method: 'put',
        data:{
            sku,
            online
        }
    })
}
// 新增商品
export function createProduct (data) {
    return fetch({
        url: '/pes/product',
        method: 'post',
        data
    })
}
// 更新商品详情
export function updateProduct (data) {
    return fetch({
        url: '/pes/product',
        method: 'put',
        data
    })
}
// 商品详情
export function detailedProduct (skuId) {
    return fetch({
        url: '/pes/product/detailedProduct/' + skuId,
        method: 'get'
    })
}