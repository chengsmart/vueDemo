import fetch from '@/utils/fetch'

//查询积分列表
export function queryPointsList(req) {
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
