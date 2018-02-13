<template>
    <view-box   body-padding-top="46px" body-padding-bottom="53px">
        <header slot="header">
            <div class="search-area">
                <router-link to="/personal">
                    <div class="search">
                       <i class="iconfont  icon-sousuo "></i>
                        <h6 class="search-content">
                            复方丹参滴丸
                        </h6>
                    </div>
                </router-link>
            </div>
            <router-link to="/personal"><i class="iconfont  icon-xiaoxi tel"></i></router-link>
            <router-link to="/personal"><i class="iconfont  icon-dianhuazixun message"></i></router-link>
        </header>
        <div slot="default">
            <swiper class="tsl-vux" :list="bannerList" height="165px" auto dots-class="custom-bottom" dots-position="center"></swiper>
            <activity-area :items="activityItem"></activity-area>
            <div class="news h6">
                <div class="title">新闻资讯</div>
                <div class="new-item clearfix" style="">
                    <img class="pull-left"  src="@/assets/images/bg_home_news.png">
                     <swiper auto height="17px" direction="vertical" :interval="2000"
                             class="text-scroll color-999"
                             :show-dots="false">
                            <swiper-item><p class="keep-inline">b2b上线</p></swiper-item>
                            <swiper-item><p class="keep-inline">我们的项目棒棒哒</p></swiper-item>
                        </swiper>
                </div>
                <router-link to="/personal"><div class="more h6 color-999">更多</div></router-link>
            </div>
            <div class="drug" v-for="(item,index) in drugTypePicItem">
                <div class="drug-type h4" >
                    <h4>化 学 药 剂</h4>
                    <a href="#" class="btn-more">更多 &gt;</a>
                </div>
                <div class="list clearfix">
                    <tsl-product-item
                            images="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3907778686,1308980482&fm=173&s=C7155B8443AB0AAD388485320300D082&w=218&h=146&img.JPEG"
                            skuName="jalsd fasdj asjfl adsfj f d fasdf a f jalsd fasdj asjfl adsfj f d fasdf a f"
                            price="0.00"
                            links="/login">
                        <div slot="oldPrice"></div>
                    </tsl-product-item>
                    <tsl-product-item
                            images="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3907778686,1308980482&fm=173&s=C7155B8443AB0AAD388485320300D082&w=218&h=146&img.JPEG"
                            skuName="bmw"
                            price="0.00"
                            links="/login">
                    </tsl-product-item>
                    <tsl-product-item
                            images="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3907778686,1308980482&fm=173&s=C7155B8443AB0AAD388485320300D082&w=218&h=146&img.JPEG"
                            skuName="bmw"
                            price="0.00"
                            links="/login">
                    </tsl-product-item>
                </div>
            </div>
        </div>
        <tsl-menu></tsl-menu>
    </view-box>

</template>

<script>
    import
    {
        ViewBox,
        Tabbar,
        TabbarItem,
        Swiper,
        SwiperItem,
        Flexbox,
        FlexboxItem
    } from 'vux'
    import TslHeader  from '@/components/tsl-header/TslHeader'
    import TslProductList from '@/components/tsl-product-list/TslProductList'
    import TslProductItem from '@/components/tsl-product-item/TslProductItem'
    import TslMenu from '@/components/tsl-menu/TslMenu'
    import ActivityArea from '@/views/Home/ActivityAreaItem'

    export default {
        name: 'Home',
        data() {
            return {
                title: '首页',
                bannerList: [{
                    img: require('@/assets/images/shoubanner.png')
                }, {
                    img: require('@/assets/images/shoubanner.png')
                }],
                miaoshaPic: require('@/assets/images/miaosha.png'),
                manjianPic: require('@/assets/images/manjian.png'),
                taocanPic: require('@/assets/images/taocanzhuanqu.png'),
                qidaiPic: require('@/assets/images/jingqingqidai.png'),
                activityItem: [{
                    name: '秒杀专区',
                    images: require('@/assets/images/miaosha.png'),
                    link: '/login'
                }, {
                    name: '满减专区',
                    images: require('@/assets/images/manjian.png'),
                    link: '/login'
                }, {
                    name: '套餐专区',
                    images: require('@/assets/images/taocanzhuanqu.png'),
                    link: '/login'
                }, {
                    name: '敬请期待',
                    images: require('@/assets/images/jingqingqidai.png'),
                    link: '/login'
                }],
                drugTypePicItem:[1, 2, 3, 4, 5, 6, 7,1]
            }
        },
        components: {
            ViewBox,
            Tabbar,
            TabbarItem,
            TslHeader,
            TslProductList,
            TslProductItem,
            Swiper,
            SwiperItem,
            Flexbox,
            FlexboxItem,
            ActivityArea,
            TslMenu
        },
        mounted() {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    @import '~@/assets/styles/variable.less';
    .list {
        margin-left: -2px;
        margin-right: -2px;
    }
    header {
        background-color: @tsl-color-main;
        width: 100%;
        height: 40px;
        position: fixed;
        z-index: 300;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
        padding:3px 0;
        .search-area {
            padding: 6px 89px 7px 16px;
            color: #fff;
            .search{
                height:30px;
                background:rgba(255,255,255,1);
                border-radius: 5px;
                color:#ccc;
                .icon-sousuo{
                    color:#ccc;
                    font-size:@tsl-font-normal;
                    padding: 7px 0 4px 8px;
                }
                .search-content{
                    padding: 7px 0px 6px 32px;

                }
            }
        }
        i {
            color: #fff;
            position: absolute;
        }
        .message {
            top:11px;
            right: 50px;
            font-size: 22px;
        }
        .tel {
            top: 8px;
            right: 11px;
            font-size: 26px;
        }
    }
    .color-999 {
        color: #999;
    }
    .news{
        position:relative;
        background-color:@tsl-color-white;
        padding:10px 0;
        margin-bottom:9px;
        .title{
            position: absolute;
            color:#333;
            left:15px;
        }
        .new-item{
            padding-left:74px;
            padding-right:53px;
            img{
                width:34px;
                height:15px;
                margin-right:10px;
                margin-top:2px;
            }
        }
        .more{
            position: absolute;
            top:10px;
            right:13px;
            &:before {
                content: "";
                height:19px;
                position: absolute;
                right: 38px;
                top: -8px;
                width: 1px;
                border-left: 1px solid #D9D9D9;
                color: #D9D9D9;
                -webkit-transform-origin: 0 0;
                transform-origin: 0 0;
                -webkit-transform: scaleX(0.5);
                transform: scaleX(0.5);
                margin: 7px 0;
                }
        }
    }
    .drug{
        overflow: hidden;
        &:nth-child(7n-3){
            .drug-type{
                background: url("~@/assets/images/drug_type_one.png") no-repeat;
                background-size:100% 100%;
                -webkit-background-size: 100% 100%;
                .btn-more{
                    color: #AD79FD;
                }
            }
        }
        &:nth-child(7n-2){
            .drug-type{
                background: url("~@/assets/images/drug_type_two.png") no-repeat;
                background-size:100% 100%;
                -webkit-background-size: 100% 100%;
                .btn-more{
                    color: #FF8BB1;
                }

            }
        }
        &:nth-child(7n-1){
            .drug-type{
                background: url("~@/assets/images/drug_type_three.png") no-repeat;
                background-size:100% 100%;
                -webkit-background-size: 100% 100%;
                .btn-more{
                    color: #DF86EA;
                }

            }
        }
        &:nth-child(7n){
            .drug-type{
                background: url("~@/assets/images/drug_type_four.png") no-repeat;
                background-size:100% 100%;
                -webkit-background-size: 100% 100%;
                .btn-more{
                    color: #6DD7BE;
                }

            }
        }
        &:nth-child(7n+1){
            .drug-type{
                background: url("~@/assets/images/drug_type_five.png") no-repeat;
                background-size:100% 100%;
                -webkit-background-size: 100% 100%;
                .btn-more{
                    color: #87BAFF;
                }

            }
        }
        &:nth-child(7n+2){
            .drug-type{
                background: url("~@/assets/images/drug_type_six.png") no-repeat;
                background-size:100% 100%;
                -webkit-background-size: 100% 100%;
                .btn-more{
                    color: #FF8BB1;
                }

            }
        }
        &:nth-child(7n+3){
            .drug-type{
                background: url("~@/assets/images/drug_type_seven.png") no-repeat;
                background-size:100% 100%;
                -webkit-background-size: 100% 100%;
                .btn-more{
                    color: #FF8BB1;
                }

            }
        }
        .drug-type {
            text-align: center;
            position: relative;
            height:42px;
            h4{
                text-align:center;
                line-height:42px;
                color: @tsl-color-white;
            }
            a.btn-more {
                width: 45px;
                height: 17px;
                line-height:17px;
                background: rgba(255,255,255,1);
                border-radius: 9px;
                font-size: 10px;
                position: absolute;
                top: 0;
                right: 0;
                text-align: center;
                margin: 13px 15px 10px 0;
                text-align: center;
            }
        }
    }
</style>
