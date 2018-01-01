/**
 * Created by mudianwei on 2017/9/30.
 */
import fetch from '@/utils/fetch'

//查询用户列表
export function queryUserList(data) {
    return fetch({
        url: '/pes/sysUser/pageSysUsers',
        method: 'get',
        params: {
            loginName: data.loginName || null,
            userName: data.userName || null,
            pageNo: data.pageNo || 1,
            pageSize: data.pageSize || 20
        }
    })
}

//新增用户
export function addUser(data) {
    return fetch({
        url: '/pes/sysUser',
        method: 'post',
        data
    })
}

//查询用户名是否存在
export function checkLoginName(loginName) {
    return fetch({
        url: '/pes/sysUser/checkLoginName/' + loginName,
        method: 'get'
    })
}

//用户停用启用
export function userCtrl(data) {
    return fetch({
        url: '/pes/sysUser/enable',
        method: 'put',
        data
    })
}

//查询当前登录用户信息
export function currentSysUser() {
    return fetch({
        url: '/pes/sysUser/currentSysUser',
        method: 'get'
    })
}

//查询当前登录用户信息
export function resetPassword (oldPassword,newPassword) {
    return fetch({
        url: '/pes/sysUser/reset',
        method: 'post',
        data:{
            oldPassword,
            newPassword
        }
    })
}
