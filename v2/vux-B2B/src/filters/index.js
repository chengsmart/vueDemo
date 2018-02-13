/**
 * Created by mudianwei on 2017/9/30.
 */

import { needTimeString } from '@/utils/time'

//时间戳转换成yyyy-mm-dd hh:mm:ss
export function timestampFilter (value) {
    return needTimeString(value, true);
}
//时间戳转换成yyyy-mm-dd
export function timestampDateFilter (value) {
    return needTimeString(value, false);
}