/**
 * Created by chengshuai on 2017/9/30.
 * Email:chengshuai.tj@gmail.com
 * Author:Smart
 * Description:
 */

//时间戳转换成yyyy-mm-dd
export function greeting () {
    let now = new Date(),
        hour = now.getHours();
    let welcome = '';
    if(hour < 6){welcome = '凌晨'}
    else if (hour < 9){welcome = '早上'}
    else if (hour < 12){welcome = '上午'}
    else if (hour < 14){welcome = '中午'}
    else if (hour < 17){welcome = '下午'}
    else if (hour < 19){welcome = '傍晚'}
    else if (hour < 22){welcome = '晚上'}
    else {welcome = '深夜'}
    return welcome + '好';
}
