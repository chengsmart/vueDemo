/**
 * Created by sly on 2018/02/02.
 */

import fetch from '@/utils/fetch'

//查询新闻列表
export function queryNewsList(req) {
    return fetch({
        url: 'https://easy-mock.com/mock/5a73c190b4ec7020fa2f636e/b2b/newsList',
        method: 'get',
/*        params: {
            pageNo: req.pageNo || 1,
            pageSize: req.pageSize || 10
        }*/
    })
}

//查询文章详情
export function queryNewsDetail(req) {
    return fetch({
        url: '',
        method: 'get',
        params:{
            'id':req
        }
    })
}