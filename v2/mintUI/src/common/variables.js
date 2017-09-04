/**
 * Created by chengshuai on 2017/9/4.
 * Email:chengshuai.tj@gmail.com
 * Author:Smart
 * Description:
 */
const HOSTNAME = 'http://mtstg.tasly.com/',
    SSOHOSTNAME = 'http://mtstg.tasly.com/',
    HOSTNAME_OTC = 'http://mtstg.tasly.com/';
const ENV_CONFIG = {
    OTCLink: HOSTNAME + 'otc/html/',
    OTCId:51,
    JKXWId:51
}
const BASEURL = HOSTNAME + 'cdm-app/v2/';//网络的url
const BASEURL_PUBLIC = HOSTNAME + 'cdm-app/public/v2/';//不需要授权的网络url
const BASEURL_OTC = HOSTNAME_OTC + 'otc-mobile/api/v1/'; // OTC 接口