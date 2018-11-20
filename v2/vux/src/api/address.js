import fetch from '@/utils/fetch'

//查询收货地址列表
export function queryMyAddressList(req) {
    return fetch({
        //TODO 等接口开发好了替换url
        url: 'http://localhost:3000/list',
        method: 'get',
        /*        params: {
                    pageNo: req.pageNo || 1,
                    pageSize: req.pageSize || 10
                }*/
    })
}

//默认地址接口
export function selectDefaultFlag(req) {
    return fetch({
        //TODO 等接口开发好了替换url
        url: 'http://localhost:3000/list',
        method: 'get',
        /*        params: {
                    pageNo: req.pageNo || 1,
                    pageSize: req.pageSize || 10
                }*/
    })
}

//删除地址接口
export function delAddress(req) {
    return fetch({
        //TODO 等接口开发好了替换url
        url: 'http://localhost:3000/list',
        method: 'get',
        /*        params: {
                    pageNo: req.pageNo || 1,
                    pageSize: req.pageSize || 10
                }*/
    })
}
