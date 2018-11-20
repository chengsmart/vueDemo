<template>
    <view-box body-padding-bottom="100px">
        <tsl-header :left-options="{showBack:false,backText:''}" :title="title">
            <a slot="right" id="remove">删除</a>
        </tsl-header>
        <div class="cart-wrap">
            <!--满减商品列表-->
            <div class="item-box clearfix">
                <div class="item-title">
                    <span class="tags">满 减</span> 订单满100元 减50元
                </div>
                <div class="item-content">
                    <ul class="product-item">
                        <li>
                            <swipeout>
                                <swipeout-item  transition-mode="red">
                                    <div slot="right-menu">
                                        <swipeout-button @click.native="onButtonClick('delete')" type="primary"><i class="iconfont icon-shanchu"></i>删除</swipeout-button>
                                    </div>
                                    <div slot="content" class="swipeout-content">
                                        <div class="product-radio pull-left">
                                        <check-icon :value.sync="selectBtn"></check-icon>
                                    </div>
                                        <div class="product-img pull-left">
                                            <img src="https://devtoc.blob.core.chinacloudapi.cn/devotcimg/c2359d8939e2459284c0b6023479d7ff.jpg" alt="">
                                        </div>
                                        <div class="product-box pull-left">
                                            <div class="product-detail">
                                                <h4>复方丹参滴丸薄膜衣21</h4>
                                                <p><span>厂商:</span> 士力制药股份有限公司</p>
                                                <p>
                                                    <span>数量:</span>1
                                                    <span>单位:</span>盒
                                                    <span>规格:</span>12/盒
                                                </p>
                                            </div>
                                            <div class="product-price">
                                                <em>￥79.8</em>
                                            </div>
                                            <div class="product-num">
                                                <x-number width="30px" :value="1" :min="1"></x-number>
                                            </div>
                                        </div>
                                    </div>
                                </swipeout-item>
                            </swipeout>
                        </li>
                    </ul>
                </div>
            </div>

            <!--套餐商品列表-->
            <div class="item-box clearfix">
                <div class="item-title">
                    <span class="tags">套 餐</span> 天士力套餐
                </div>
                <div class="item-content">
                    <ul class="product-item">
                        <li>
                            <swipeout>
                                <swipeout-item  transition-mode="red">
                                    <div slot="right-menu">
                                        <swipeout-button @click.native="onButtonClick('delete')" type="primary"><i class="iconfont icon-shanchu"></i>删除</swipeout-button>
                                    </div>
                                    <div slot="content" class="swipeout-content">
                                        <div class="product-radio pull-left">
                                            <check-icon :value.sync="selectBtn"></check-icon>
                                        </div>
                                        <div class="product-img pull-left">
                                            <img src="https://devtoc.blob.core.chinacloudapi.cn/devotcimg/c2359d8939e2459284c0b6023479d7ff.jpg" alt="">
                                        </div>
                                        <div class="product-box pull-left">
                                            <div class="product-detail">
                                                <h4>复方丹参滴丸薄膜衣21</h4>
                                                <p><span>厂商:</span> 士力制药股份有限公司</p>
                                                <p>
                                                    <span>数量:</span>1
                                                    <span>单位:</span>盒
                                                    <span>规格:</span>12/盒
                                                </p>
                                            </div>
                                            <div class="product-price">
                                                <em>￥9.87</em>
                                            </div>
                                            <div class="product-num">
                                                <x-number width="30px" :value="1" :min="1"></x-number>
                                            </div>
                                        </div>
                                    </div>
                                </swipeout-item>
                            </swipeout>
                        </li>
                        <li>
                            <div class="product-radio pull-left">
                                 &nbsp;
                            </div>
                            <div class="product-img pull-left">
                                <img src="https://devtoc.blob.core.chinacloudapi.cn/devotcimg/c2359d8939e2459284c0b6023479d7ff.jpg" alt="">
                                <div class="right-icon taocan"></div>
                            </div>
                            <div class="product-box pull-left">
                                <div class="product-detail">
                                    <h4>复方丹参滴丸薄膜衣201873876</h4>
                                    <p><span>厂商:</span> 士力制药股份有限公司</p>
                                    <p>
                                        <span>数量:</span>1
                                        <span>单位:</span>盒
                                        <span>规格:</span>12/盒
                                    </p>
                                </div>
                                <div class="product-price">
                                    ￥79.8
                                </div>
                                <div class="product-num gift">
                                    <x-number width="30px" :value="1" :min="1"></x-number>
                                </div>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>

            <!--普通商品列表-->
            <div class="item-box clearfix">
                <div class="item-content">
                    <ul class="product-item">
                        <li>
                            <swipeout>
                                <swipeout-item  transition-mode="red">
                                    <div slot="right-menu">
                                        <swipeout-button @click.native="onButtonClick('delete')" type="primary"><i class="iconfont icon-shanchu"></i>删除</swipeout-button>
                                    </div>
                                    <div slot="content" class="swipeout-content">
                                        <div class="product-radio pull-left">
                                            <check-icon :value.sync="selectBtn"></check-icon>
                                        </div>
                                        <div class="product-img pull-left">
                                            <img src="https://devtoc.blob.core.chinacloudapi.cn/devotcimg/c2359d8939e2459284c0b6023479d7ff.jpg" alt="">
                                        </div>
                                        <div class="product-box pull-left">
                                            <div class="product-detail">
                                                <h4>复方丹参滴丸薄膜衣21</h4>
                                                <p><span>厂商:</span> 士力制药股份有限公司</p>
                                                <p>
                                                    <span>数量:</span>1
                                                    <span>单位:</span>盒
                                                    <span>规格:</span>12/盒
                                                </p>
                                            </div>
                                            <div class="product-price">
                                                <em>￥79.8</em>
                                            </div>
                                            <div class="product-num">
                                                <x-number width="30px" :value="1" :min="1"></x-number>
                                            </div>
                                        </div>
                                    </div>
                                </swipeout-item>
                            </swipeout>
                        </li>
                        <li>
                            <swipeout>
                                <swipeout-item  transition-mode="red">
                                    <div slot="right-menu">
                                        <swipeout-button @click.native="onButtonClick('delete')" type="primary"><i class="iconfont icon-shanchu"></i>删除</swipeout-button>
                                    </div>
                                    <div slot="content" class="swipeout-content">
                                        <div class="product-radio pull-left">
                                            <check-icon :value.sync="selectBtn"></check-icon>
                                        </div>
                                        <div class="product-img pull-left">
                                            <img src="https://devtoc.blob.core.chinacloudapi.cn/devotcimg/c2359d8939e2459284c0b6023479d7ff.jpg" alt="">
                                        </div>
                                        <div class="product-box pull-left">
                                            <div class="product-detail">
                                                <h4>复方丹参滴丸薄膜衣21</h4>
                                                <p><span>厂商:</span> 士力制药股份有限公司</p>
                                                <p>
                                                    <span>数量:</span>1
                                                    <span>单位:</span>盒
                                                    <span>规格:</span>12/盒
                                                </p>
                                            </div>
                                            <div class="product-price">
                                                <em>￥79.8</em>
                                            </div>
                                            <div class="product-num">
                                                <x-number width="30px" :value="1" :min="1"></x-number>
                                            </div>
                                        </div>
                                    </div>
                                </swipeout-item>
                            </swipeout>
                        </li>
                        <li>
                            <swipeout>
                                <swipeout-item  transition-mode="red">
                                    <div slot="right-menu">
                                        <swipeout-button @click.native="onButtonClick('delete')" type="primary"><i class="iconfont icon-shanchu"></i>删除</swipeout-button>
                                    </div>
                                    <div slot="content" class="swipeout-content">
                                        <div class="product-radio pull-left">
                                            <check-icon :value.sync="selectBtn"></check-icon>
                                        </div>
                                        <div class="product-img pull-left">
                                            <img src="https://devtoc.blob.core.chinacloudapi.cn/devotcimg/c2359d8939e2459284c0b6023479d7ff.jpg" alt="">
                                        </div>
                                        <div class="product-box pull-left">
                                            <div class="product-detail">
                                                <h4>复方丹参滴丸薄膜衣21</h4>
                                                <p><span>厂商:</span> 士力制药股份有限公司</p>
                                                <p>
                                                    <span>数量:</span>1
                                                    <span>单位:</span>盒
                                                    <span>规格:</span>12/盒
                                                </p>
                                            </div>
                                            <div class="product-price">
                                                <em>￥79.8</em>
                                            </div>
                                            <div class="product-num">
                                                <x-number width="30px" :value="1" :min="1"></x-number>
                                            </div>
                                        </div>
                                    </div>
                                </swipeout-item>
                            </swipeout>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="cart-footer">
<!--                <div class="select-all">
                    <check-icon :value.sync="selectBtn">全选</check-icon>
                </div>
                <div class="total-price">
                    合计：￥ 12.123
                </div>
                <div >
                    <button>结算</button>
                </div>-->
                <flexbox :gutter="0">
                    <flexbox-item :span="1/3">
                        <div class="select-all">
                            <check-icon :value.sync="selectBtn">全选</check-icon>
                        </div>
                    </flexbox-item>
                    <flexbox-item :span="1/3">
                        <div class="total-price">
                            合计: ￥<em>12.123</em>
                        </div>
                    </flexbox-item>
                    <flexbox-item :span="1/3">
                        <div class="generator-order">
                            <x-button type="primary" @click.native="submitOrder()">结算</x-button>
                        </div>
                    </flexbox-item>
                </flexbox>
            </div>

        </div>

        <tsl-menu></tsl-menu>

    </view-box>
</template>

<script>
    import {ViewBox,Tabbar, TabbarItem, Flexbox, FlexboxItem , CheckIcon,Swipeout, SwipeoutItem,SwipeoutButton ,XNumber,XButton} from 'vux'
    import TslHeader from '@/components/tsl-header/TslHeader'
    import TslMenu from '@/components/tsl-menu/TslMenu'

    export default {
        name: 'Cart',
        data() {
            return {
                title: '购物车',
                selectBtn: false

            }
        },
        components: {
            ViewBox,
            Tabbar,
            TabbarItem,
            TslHeader,
            TslMenu,
            Flexbox,
            FlexboxItem,
            CheckIcon,
            Swipeout,
            SwipeoutItem,
            SwipeoutButton,
            XNumber,
            XButton
        },
        computed: {

        },
        methods:{
            submitOrder:function(){
                this.$router.push({
                    path:'submitorder'
                })
            }
        },
        mounted() {
            console.log(this.$route.path)
        }
    }
</script>

<style lang="less" scoped>
    @import '~@/assets/styles/variable.less';
    .weui-cell{
        padding:0;
        .vux-number-selector-sub {
            padding:0;
        }
    }
    .swipeout-content{
        height:110px;
        overflow: hidden;
        z-index: -1;
    }
    #remove{
        color:@tsl-color-white;
    }

    .cart-wrap{
        margin-top: 46px;
        em{
            color: @tsl-color-main;
            font-style: normal;
        }
        .item-box{
            .tsl-utils-box-sizing(border-box);
            background-color:@tsl-color-white;
            clear: both;
            margin-bottom:10px;
            .item-title{
                color: #666;
                height: 38px;
                line-height: 38px;
                padding:0 15px;
                font-size: @tsl-font-h6;
                .tags{
                    color:@tsl-color-main;
                    font-size: 10px;
                    line-height: @tsl-font-h6;
                    border:1px solid @tsl-color-main;
                    .tsl-border-radius(3px);
                    padding:0 3px;
                    margin-right: 10px;
                }
            }
            .item-content{
                background-color: @tsl-color-white;
                .product-item{
                    & > li {
                        height:110px;
                        line-height: 110px;
                        text-align: right;
                        border-top:1px solid #F6F6F6;
                        overflow: hidden;
                        .tsl-utils-clearfix();
                        .product-radio{
                            width: 10%;
                            text-align: right;
                        }
                        .product-img{
                            position: relative;
                            .tsl-img-responsive();
                            width: 25%;
                            padding-top:10px;
                            overflow: hidden;
                            max-height: 110px;
                            img {
                                width: 90px;
                                height: 90px;
                            }
                            .right-icon{
                                position: absolute;
                                top:10px;
                                right: 0;
                                z-index: 99;
                            }
                            .taocan{
                                width: 40px;
                                height: 40px;
                                background:url('~@/assets/images/taocan_right_icon_x1.png');
                            }
                        }
                        .product-box{
                            position: relative;
                            height: 90px;
                            width: 65%;
                            padding-top:10px;
                            .product-detail{
                                position: absolute;
                                top:0;
                                left:0;
                                z-index: 99;
                                padding-top:10px;
                                padding-left:10px;
                                text-align: left;
                                max-width:90%;
                                h4{
                                    font-size: @tsl-font-normal;
                                    .tsl-text-overflow();
                                    color:#333;
                                    line-height: @tsl-font-normal * 1.43;
                                }
                                p{
                                    color:#999;
                                    font-size:@tsl-font-h6;
                                    line-height: 17px;
                                }
                            }
                            .product-price{
                                position: absolute;
                                left:0;
                                bottom:0;
                                padding-left:10px;
                                //color:@tsl-color-main;
                                font-size: @tsl-font-normal;
                                line-height:  @tsl-font-normal;
                            }
                            .product-num{
                                position: absolute;
                                right:15px;
                                bottom:0;
                                &.gift{
                                    a {

                                    }
                                }
                            }

                        }
                    }

                }

            }
        }
        .cart-footer{
            position: fixed;
            bottom: 51px;
            background-color: @tsl-color-white;
            border-bottom:1px solid #F6F6F6;
            margin-bottom: 2px;
            height: 50px;
            width:100%;
            line-height: 50px;
            .select-all{
                padding-left:10px;
                font-size:@tsl-font-normal;
                line-height: 20px;
            }
            .total-price{
                font-size:@tsl-font-normal;
                line-height: 20px;
            }
            .generator-order{
                button{
                    .tsl-border-radius(0);
                    height: 50px;
                    line-height: 50px;
                    font-size:@tsl-font-h5;
                }
            }
        }
    }
</style>
