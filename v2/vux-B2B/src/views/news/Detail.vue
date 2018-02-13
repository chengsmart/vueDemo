<template>
    <view-box>
        <div class="news-detail-box">
        <tsl-header :left-options="{showBack:true,backText: ''}" :title="title"></tsl-header>
        <div class="news-detail">
            <div class="article">
                <h3 class="article-title">天士力战略投资健亚生物，重磅胰岛素加速布,重磅胰岛素加速布</h3>
                <div class="article-content">
                    <p>
                        【2017年12月5日，常州】天士力全资子公司与国内领先的胰岛素研制公司健亚生物在江苏常州签署战略投资合作协议，将投入5000万美元支持健亚生物胰岛素类似物国际产业化发展。健亚目前拥有甘精胰岛素等多款领先在研产品，天士力将获得其甘精胰岛素等相关产品在中国大陆地区的销售优先权，此举不仅为天士力在糖尿病领域增添重磅品种，丰富了创新药管线布局，同时加速了天士力布局糖尿病闭环解决方案的进程，实现与健亚生物未来长期的合作共赢。
                    </p>
                    <img src="//www.tasly.com/uploadfile/2018/01/31/1517371136170726.jpg" alt="">
                    <p>
                        健亚生物是一家立足中国、面向全球， 旨在打造“产品质量第一，生产成本最低， 产业规模领先”的胰岛素先进制造企业。公司由国家“千人计划”特聘专家创办，核心产品胰岛素类似物先后经欧洲和中国两家第三方权威机构进行全套质量检测，比对检测项目结果显示均超过现行欧洲药典标准，且与跨国药企原研药一致，产品纯度和生产效率均超过目前国内外三代胰岛素的行业平均水平。
                    </p>
                    <p>
                       iewoqruqopwruqopweurqopwurpqworuoqwperueqwioruioqewruieqwurioqewurqoooooooooo
34rfeeu897d9safyu8a9sd7f8a9sd7f09asdf089uads890fu8ads9uf09dsa8uf90eawu8f09uawe
                    </p>
                </div>
                <div class="article-footer pull-right">
                    <p>发布时间</p>
                    <p>2017-09-12</p>
                </div>
            </div>
        </div>
    </div>
    </view-box>
</template>

<script>
    import { ViewBox } from 'vux';
    import  TslHeader  from '@/components/tsl-header/TslHeader';
    import { queryNewsDetail } from '@/api/news';

    export default {
        data() {
            return {
                title: '新闻资讯',
                position: 'relative'
            }
        },
        components: {
            ViewBox,
            TslHeader
        },
        computed: {
        },
        methods:{
            queryData(){
                /*获取文章id*/
                const id = this.$route.query.id;
                queryNewsDetail(id)
                    .then(res => {
                        this.newsListData = res.data;
                    })
                    .catch(error => {
                        //console.log(error.data)
                    })
            }
        },
        mounted() {
            this.queryData()
        }
    }
</script>

<style lang="less" scoped>
    @import '~@/assets/styles/variable.less';
    .news-detail-box{
        background: @tsl-color-white;
        height: 100vh;
    }
    .news-detail {
        padding-top: 46px;
        .article{
            margin:0 15px;
            overflow: hidden;
            .article-title{
                font-size: @tsl-font-h3;
                line-height: @tsl-font-h3*1.4;
                color:#333;
                margin:7px 0;
            }
            .article-content{
                overflow: hidden;
                p{
                    color:#666;
                    font-size:@tsl-font-normal;
                    line-height: 25px;
                    text-indent: 2em;
                    .tsl-text-break();
                }
                img {
                    .tsl-img-responsive();
                    margin:11px 0;
                }
            }
            .article-footer{
                margin-bottom: 1em;
                color:#9D9D9D;
                p{
                    text-align: right;
                    font-size: @tsl-font-h6;
                    line-height: @tsl-font-h6 * 1.5 ;
                }
            }
        }
    }

</style>