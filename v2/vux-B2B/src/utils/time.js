/**
 * Created by chengshuai on 2017/9/30.
 * Email:chengshuai.tj@gmail.com
 * Author:Smart
 * Description:
 */

//时间戳转换成yyyy-mm-dd
export function needTimeString (str, status) {//传参则进行整理，缺任意参数均为获取当天日期
    let now = new Date(parseInt(str));
    let year = now.getFullYear(),
        month = now.getMonth() + 1,
        date = now.getDate(),
        hour = (now.getHours() < 10)? '0' + now.getHours() : now.getHours(),
        minute = (now.getMinutes() < 10)? '0' + now.getMinutes() : now.getMinutes(),
        second = (now.getSeconds() < 10)? '0' + now.getSeconds() : now.getSeconds();
    let dataStr = '';
    if (status) {
        dataStr = getTodayString(year, month, date) + ' ' + hour + ':' + minute + ':' + second;
    } else {
        dataStr = getTodayString(year, month, date)
    }
    return dataStr;
}

// 获取今天日期
export function getTodayString (year, month, day) { //传参则进行整理，缺任意参数均为获取当天日期
    let _today = new Date();
    let _year, _month, _date;
    if (year && month && day) {
        _year = year;
        _month = month;
        _date = day;
    } else {
        _year = _today.getFullYear();
        _month = _today.getMonth() + 1; //月份从0开始
        _date = _today.getDate();
    }
    if (_month < 10) {
        _month = '0' + _month;
    }
    if (_date < 10) {
        _date = '0' + _date;
    }
    return _year + '-' + _month + '-' + _date;
}
