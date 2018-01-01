/**
 * Created by mudianwei on 2017/9/27.
 * Description:订单管理模块接口
 */
import fetch from '@/utils/fetch'
//获取订单列表
export function getOrderList(data) {
    return fetch({
        url: '/pes/order/orderView',
        method: 'get',
        params: {
            exchangeStartTime: data.exchangeStartTime || null,
            exchangeEndTime: data.exchangeEndTime || null,
            pageNo: data.pageNo || 1,
            pageSize: data.pageSize || 20,
            name: data.name || null,
            userName: data.userName || null,
            status: data.status || null
        }
    })
}

//获取兑换统计列表
export function getOrderProductList(req) {
    return fetch({
        url: '/pes/order/orderViewProduct?status=' + req.status + '&exchangeStartTime=' + req.exchangeStartTime + '&exchangeEndTime=' + req.exchangeEndTime + '&pageNo=' + req.pageNo + '&pageSize=' + req.pageSize,
        method: 'get'
    })
}

//商品发放接口
export function giveOut(data) {
    return fetch({
        url: '/pes/order/giveOutManyOrder',
        method: 'post',
        data
    })
}

//订单取消
export function cancelOrder(orderId) {
    return fetch({
        url: '/pes/order/cancelOrder/' + orderId,
        method: 'put'
    })
}
