<template>
    <view-box   body-padding-bottom="53px">
        <tsl-header color="light"  :left-options="{showBack:true,backText: ''}" :title="title" slot="header">
                <a href="#good"   :class="{ active : activeTab == 0 }" @click="toggleTab(0)">商品</a>
                <a href="#detail" :class="{ active : activeTab == 1 }" @click="toggleTab(1)">详情</a>
        </tsl-header>
        <div slot="default">
            <div id="good">
                <swiper class="tsl-vux" :list="bannerList" height="311px" auto dots-class="custom-bottom" dots-position="center"></swiper>
                <div class="miaosha-area clearfix">
                    <div class="miaosha-area-left pull-left">
                        <p class="price light-white">￥999.00</p>
                        <div class="miaosha">抢完为止</div>
                    </div>
                    <div class="miaosha-area-right pull-right">
                        <div class="count-down">
                            <h6>距结束还剩：</h6>
                            <clocker time="2018-03-05">
                                <span class="day">%_H1%_H2</span>
                                <span class="day">%_M1%_M2</span>
                                <span class="day">%_S1%_S2</span>
                            </clocker>
                        </div>
                    </div>
                </div>
                <div class="goods-info">
                    <h4 class="keep-twoline">山东东阿阿胶125g阿胶片补血补气滋阴阿里健康 大药房</h4>
                    <p>厂商：天士力制药股份有限公司</p>
                    <p>单位：盒 <span class="size">规格：35/粒*10粒2板/盒</span></p>
                    <p><del>￥2000.00</del></p>
                </div>
                <div class="kind">
                    <div class="kind-item">
                        <span><i class="iconfont  icon-xuanzeb"></i>药师咨询</span>
                    </div>
                    <div class="kind-item">
                        <span><i class="iconfont  icon-xuanzeb"></i>正品保障</span>
                    </div>
                    <div class="kind-item">
                        <span><i class="iconfont  icon-xuanzeb"></i>隐私保护</span>
                    </div>
                    <div class="kind-item">
                        <span><i class="iconfont  icon-xuanzeb"></i>隐私保护</span>
                    </div>
                </div>
                <div class="promotion clearfix">
                    <div class="promotion-title pull-left">
                        促销
                        <img src="@/assets/images/promotion_icon.png">
                    </div>
                    <div class="promotion-activity pull-left">
                        <div class="promotion-activity-item">
                            <span class="title">套餐</span>
                            <span class="info">订单金额满1000赠送100元优惠券</span>
                        </div>
                        <div class="promotion-activity-item">
                            <span class="title">满减</span>
                            <span class="info">三件套餐购买更划算</span>
                        </div>
                        <div class="promotion-activity-item">
                            <span class="title">优惠券</span>
                            <span class="info">订单金额满1000赠送100元优惠券</span>
                        </div>
                    </div>
                </div>
                <div class="count">
                    <div class="count-title">
                        <p>数量</p>
                    </div>
                    <div class="total clearfix">
                    <span class="pull-left total-left">合计：
                        <span class="num"><span class="price ">￥</span>12.00</span>
                    </span>
                        <inline-x-number  :min="1" width="50px" class="total-right pull-right "></inline-x-number>
                    </div>
                </div>
                <div class="taocan-area">
                    <div class="clearfix taocan-activity">
                        <p class="taocan-title pull-left">套餐活动</p>
                        <ul class="taocan-list pull-right" >
                            <li class="pull-left" @click="toggleTaocan(index)" v-for="(tab, index) in buyGiftsLvList" :class="{active:active==index}">套餐{{index+1}}</li>
                        </ul>
                    </div>
                    <div class="sku-group " style=" " v-for="(list, index) in buyGiftsLvList" v-show="currentView==index">
                        <ul class=" buy-item" style="vertical-align:top;">
                            <li class=" "  v-for="(item, index) in list.buyProductList">
                                <div class="" style="display: inline-block; vertical-align: middle;">
                                    <div class="item-img" >
                                        <img v-bind:src="item.productSkuInfo.productShortImage"  alt="">
                                        <div class="num" style="">x{{item.quantity}}</div>
                                    </div>
                                    <h6 class=" keep-inline" >{{item.productSkuInfo.name}}}</h6>
                                    <span class="price"><span>￥</span>200</span>
                                </div>
                                <!--<img  style="width:16px;height:16px;"  src="@/assets/images/goods_details_plus.png">-->
                                <div class="" style="display:inline-block; vertical-align: middle;padding-left:7px;padding-right:11px;"><img  style="width:16px;height:16px;"  src="@/assets/images/goods_details_plus.png"></div>
                            </li>
                        </ul>
                        <ul class=" gift-item" style=" margin-left:42px;vertical-align:top;">
                            <li class=""  v-for="(item, index) in list.giftsProductList">
                                <div class="item-img" >
                                    <img v-bind:src="item.productSkuInfo.productShortImage"  alt="">
                                    <div class="num" style="">x{{item.quantity}}</div>
                                </div>
                                <h6 class=" keep-inline" >{{item.productSkuInfo.name}}}</h6>
                                <!--<span class="price"><span>￥</span>{{item.productSkuInfo.productPrice}}</span>-->
                            </li>
                        </ul>
                    </div>
                    <div class="cart">
                        套餐总计：
                        <span class="cart-total">
                        <span class="price-symbol">￥</span>
                        <span class="price">5640.00</span>
                    </span>
                        <button class="cart-btn">加入购物车</button>
                    </div>
                </div>
                <divider class="h6 tsl-vux">继续拖动，查看商品详情</divider>
            </div>
            <div id="detail" name="detail">
                <img src="@/assets/images/goods_details.png" alt="">
            </div>
        </div>
        <tabbar slot="bottom" class="tsl-vux">
            <tabbar-item selected>
                <i slot="icon" class="iconfont icon-shouyedown"></i>
                <span slot="label">首页</span>
            </tabbar-item>
            <tabbar-item link="/category">
                <i slot="icon" class="iconfont icon-fenlei"></i>
                <span slot="label">分类</span>
            </tabbar-item>
            <tabbar-item link="/cart">
                <i slot="icon" class="iconfont icon-gouwuche"></i>
                <span slot="label">购物车</span>
            </tabbar-item>
            <tabbar-item link="/personal">
                <i slot="icon" class="iconfont icon-wode1"></i>
                <span slot="label">我的</span>
            </tabbar-item>
        </tabbar>
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
        Clocker,
        InlineXNumber,
        Divider

    } from 'vux'
    import TslHeader  from '@/components/tsl-header/TslHeader'


    export default {
        name: 'Home',
        data() {
            return {
                activeTab:0,
//                title: ['商品','详情'],
                skulength:0,
                title: '商品',
                bannerList: [{
                    img: require('@/assets/images/goods_banner.png')
                }, {
                    img: require('@/assets/images/goods_banner.png')
                }],
                time1: '2018-07-13 21:54',
                currentView: 0,

                buyGiftsLvList: [
                    {
                        buyProductList: [
                            {
                                productSkuInfo: {

                                    name: '柴胡滴丸',
                                    productShortImage: 'https://devtoc.blob.core.chinacloudapi.cn/devotcimg/d2c8367b3bd44c7fa36d038a6aeb43c5.jpg',

                                },
                                quantity: 1
                            }, {
                                productSkuInfo: {

                                    name: '柴胡滴丸',
                                    productShortImage: 'https://devtoc.blob.core.chinacloudapi.cn/devotcimg/d2c8367b3bd44c7fa36d038a6aeb43c5.jpg',

                                },
                                quantity: 1
                            },
                            {
                                productSkuInfo: {

                                    name: '柴胡滴丸',
                                    productShortImage: 'https://devtoc.blob.core.chinacloudapi.cn/devotcimg/d2c8367b3bd44c7fa36d038a6aeb43c5.jpg',

                                },
                                quantity: 1
                            }
                        ],
                        giftsProductList: [
                            {
                                productSkuInfo: {

                                    name: '益生菌粉',
                                    productShortImage: 'https://devtoc.blob.core.chinacloudapi.cn/devotcimg/7bc966bcc049488d9bb0c5e0983ed2cc.jpg',
                                },
                                quantity: 1
                            },
                            {
                                productSkuInfo: {

                                    name: '益生菌粉',
                                    productShortImage: 'https://devtoc.blob.core.chinacloudapi.cn/devotcimg/7bc966bcc049488d9bb0c5e0983ed2cc.jpg',
                                },
                                quantity: 1
                            }, {
                                productSkuInfo: {

                                    name: '益生菌粉',
                                    productShortImage: 'https://devtoc.blob.core.chinacloudapi.cn/devotcimg/7bc966bcc049488d9bb0c5e0983ed2cc.jpg',
                                },
                                quantity: 1
                            }
                        ],
                    },
                    {
                        buyProductList: [
                            {
                                productSkuInfo: {
                                    name: '柴胡滴丸',
                                    productShortImage: 'https://devtoc.blob.core.chinacloudapi.cn/devotcimg/d2c8367b3bd44c7fa36d038a6aeb43c5.jpg',
                                },
                                quantity: 2
                            }
                        ],
                        giftsProductList: [
                            {
                                productSkuInfo: {
                                    name: '益生菌粉',
                                    productShortImage: 'https://devtoc.blob.core.chinacloudapi.cn/devotcimg/7bc966bcc049488d9bb0c5e0983ed2cc.jpg',
                                },
                                quantity: 2
                            }
                        ],
                    },
                    {
                        buyProductList: [
                            {
                                productSkuInfo: {
                                    name: '柴胡滴丸',
                                    productShortImage: 'https://devtoc.blob.core.chinacloudapi.cn/devotcimg/d2c8367b3bd44c7fa36d038a6aeb43c5.jpg',
                                },
                                quantity: 3
                            }
                        ],
                        giftsProductList: [
                            {
                                productSkuInfo: {
                                    name: '益生菌粉',
                                    productShortImage: 'https://devtoc.blob.core.chinacloudapi.cn/devotcimg/7bc966bcc049488d9bb0c5e0983ed2cc.jpg',
                                },
                                quantity: 3
                            }
                        ],
                    }
                ],
                active: 0,
            }
        },
        components: {
            ViewBox,
            Tabbar,
            TabbarItem,
            TslHeader,
            Swiper,
            SwiperItem,
            Clocker,
            InlineXNumber,
            Divider
        },

        mounted() {

        },
        methods: {
            toggleTaocan(i){
                this.active = i
                this.currentView = i
            },
            toggleTab(tab){
                this.activeTab=tab
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    @import '~@/assets/styles/variable.less';
    .active{
        color:@tsl-color-main;
    }
    ::-webkit-scrollbar { display: none;    /*隐藏滚动条*/ }
    .miaosha-area{
        height:60px;
        background: url("~@/assets/images/bg_miaosha_area.png") no-repeat;
        background-size: cover;
        margin-bottom:4px;
        color:@tsl-color-white;
        .miaosha-area-left{
            width:71%;
            .price{
                padding:3px 0 0 15px;
                font-size:@tsl-font-h2;
            }
            .miaosha{
                margin-left: 15px;
                padding-left:92px;
                padding-top:3px;
                height:25px;
                background: url("~@/assets/images/miaosha_area.png") no-repeat;
                font-size:13px;
            }
        }
        .miaosha-area-right{
            width:29%;
            font-size:@tsl-font-h6;
            .count-down{
                text-align:center;
                h6{
                    color:#FE4365;
                    margin:8px 15px 2px;
                }
                .day {
                    background-color:#FE4365;
                    color:#fff;
                    display:inline-block;
                    padding:5px 3px;
                    border-radius:2px;
                }
            }
        }
    }
    .goods-info{
        padding:9px 17px 10px 15px;
        background-color:@tsl-color-white;

        h4{
           margin-bottom: 5px;
        }
        p{
            font-size:@tsl-font-h6;
            color:#999;
            margin-bottom:5px;
            .size{
                margin-left:30px;
            }
            del{
                color:#9B9B9B;
                font-size:@tsl-font-h2;

            }
        }

    }
    .kind{
        padding:9px 5px 8px;
        font-size:@tsl-font-h6;
        background:#F1F1F1;
        color:#999;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        box-sizing: border-box;
        width: 100%;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        .kind-item{
            display: -webkit-box; display: -ms-flexbox; display: -webkit-flex; display: flex; flex-direction: column; box-sizing: border-box; width: 100%; height: 100%; -webkit-box-pack: center; -ms-flex-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -ms-flex-align: center; -webkit-align-items: center; align-items: center; -webkit-box-flex: 1; -ms-flex: 1; -webkit-box-orient: vertical; -moz-box-orient: vertical; -ms-flex-direction: column; -webkit-flex-direction: column;
            text-align: center;
            span{
                .iconfont{
                    margin-right:5px;
                    color:@tsl-color-main;
                }
            }
        }
    }
    .promotion{
        margin:10px 0;
        background-color:@tsl-color-white;
        padding:12px 15px 10px;
        font-size:@tsl-font-h6;
        position:relative;
        .promotion-title{
            margin-right:6px;
            img{
                width:14px;
                height:14px;
            }
            &:before {
                 content: "";
                 position: absolute;
                 left: 61px;
                 height: 19px;
                 top: 3px;
                 width: 2px;
                 bottom: 0;
                 border-left: 1px solid #DCDCDC;
                 color: #DCDCDC;
                 -webkit-transform-origin: 0 0;
                 transform-origin: 0 0;
                 -webkit-transform: scaleX(0.5);
                 transform: scaleX(0.5);
                 margin: 7px 0;
             }
        }
        .promotion-activity{
            margin-left:6px;
            .promotion-activity-item{
                margin-bottom:10px;
                .title{
                    border:1px solid #FE4365;
                    padding:0 6px;
                    border-radius: 2px ;
                    color:@tsl-color-main;
                }
                .info{
                    margin-left:9px;
                    color:#666;
                }
            }
        }
    }
    .count{
        background-color:@tsl-color-white;
        padding:12px 0 14px 0;
        margin-bottom:10px;
        .count-title{
            border-left: 5px solid #FF6581;
            height:22px;
            padding-left: 9px;
            padding-bottom:6px;
            p{
                color:#666;

            }
        }
        .total{
            color:#999;
            padding-left:14px;
            padding-right:15px;
            border-top: 2px solid #F6F6F6;
            margin-top: 6px;
            .total-left{
                padding-top:17px;
                .num{
                    color:@tsl-color-price;
                    font-size:@tsl-font-h3;
                    .price{
                        font-size:@tsl-font-normal;
                    }
                }
            }
            .total-right{
                padding-top:14px;
            }
        }
    }
    .taocan-area{
        background-color:@tsl-color-white;
        .taocan-activity{
            padding-right:14px;
            .taocan-title{
                width:105px;
                height:43px;
                line-height: 43px;
                text-align: center;
                background: url("~@/assets/images/taocan_activity.png") no-repeat;
                background-size: cover;
                color:@tsl-color-white;
            }
            .taocan-list{
                color:#999;
                li{
                    width:42px;
                    padding-left:20px;
                    padding-top: 12px;
                    padding-bottom: 9px;
                }
            }
        }
        .sku-group{
            border-bottom: 2px solid #F6F6F6;
            border-top: 2px solid #F6F6F6;
            overflow-x: scroll;
            white-space: nowrap;
            position:relative;
            padding-bottom:4px;
                ul{
                    display:inline-block;
                    white-space: nowrap;
                    li{
                        margin-left:14px;
                        display:inline-block;
                        .item-img{
                            position: relative;
                            width:100px;
                            height:0;
                            padding-bottom:100%;
                            img{
                                position:absolute;
                                width: 100px;
                                height: 100px;
                            }
                            .num{
                                position:absolute;
                                width:100%;
                                text-align: center;
                                bottom:0;
                                background:#000;
                                opacity:0.3;
                                color:white;
                                font-size:@tsl-font-h6;
                            }
                        }
                        h6{
                            color:#999;
                            width:84px;
                            margin-top:3px;
                        }
                        .price{
                            color:@tsl-color-price;
                            span{
                                font-size:13px;
                            }
                        }
                    }
                }
        }
        .cart{
            color:#999;
            font-size:@tsl-font-h6;
            text-align:right;
            padding-top:8px;
            padding-bottom:8px;
            padding-right:17px;
            .cart-total{
                color:@tsl-color-price;
                font-size:@tsl-font-normal;
                .price{
                    font-size:@tsl-font-h4;
                }
            }
            .cart-btn{
                width:79px;
                height:29px;
                border-radius: 2px ;
                color: #FF5C13;
                border:1px solid #FF5C13;
                background-color:@tsl-color-white;
                font-size:@tsl-font-normal;
                margin-left:35px;
            }
        }
    }
</style>
