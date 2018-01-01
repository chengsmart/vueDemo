/* 业务逻辑代码*/
export function errorCodeMap (code,msg) {
    const map = {
        '401':'登录超时',
        '100001':'测试错误',
        '200001':'没有查询到相关记录',
        '500001':'积分值不能为负',
        '500002':'积分信息不存在'
        // '500003':'积分值不能为负'
    };
    return map[code] || msg;
}
