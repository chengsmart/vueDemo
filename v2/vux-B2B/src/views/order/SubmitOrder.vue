<template>
    <view-box body-padding-bottom="60px">
        <tsl-header :left-options="{showBack:true,backText:''}" :title="title" color="light" position="fixed"></tsl-header>
        <div class="submit-order">
             <div class="address">
                 <div class="address-tc">
                     <group>
                         <cell-box is-link :link="{path:'/submitorder'}">
                             <i class="iconfont icon-shouhuoxinxi"></i>&nbsp;
                             <h4>收货信息</h4>
                         </cell-box>
                     </group>
                 </div>
                 <div class="address-tb vux-cell-box weui-cell weui-cell_access  hide">
                     <h4 class="pull-left">收货人：王明</h4>
                     <span class="pull-right tel">13788922321</span>
                     <div class="address-tb-list">
                         <i class="iconfont icon-dizhi"></i>&nbsp;
                         收货地址:  天津市
                     </div>
                 </div>
             </div>
             <div class="order-box">
                 <!--买赠活动-->
                 <div class="item-list">
                     <div class="item-title">
                         <span class="tags">买 赠</span>
                         商品参加买赠送优惠活动
                     </div>
                     <div class="item-row">
                         <div class="goods-img">
                             <img src="https://devtoc.blob.core.chinacloudapi.cn/devotcimg/c2359d8939e2459284c0b6023479d7ff.jpg" alt="">
                         </div>
                         <div class="goods-detail">
                             <h5>复方丹参滴丸薄膜衣20170421</h5>
                             <p><span>厂商: </span> 天士力制药股份有限公司</p>
                             <p>
                                 <span>数量: </span>1
                                 <span>单位: </span>盒
                                 <span>规格: </span>12/盒
                             </p>
                             <div class="price">
                                 <em>￥18.23</em>
                             </div>
                         </div>
                     </div>
                     <div class="item-row">
                         <div class="goods-img">
                             <img src="https://devtoc.blob.core.chinacloudapi.cn/devotcimg/c2359d8939e2459284c0b6023479d7ff.jpg" alt="">
                             <div class="right-icon taocan"></div>
                         </div>
                         <div class="goods-detail">
                             <h5>复方丹参滴丸薄膜衣20170421</h5>
                             <p><span>厂商: </span> 天士力制药股份有限公司</p>
                             <p>
                                 <span>数量: </span>1
                                 <span>单位: </span>盒
                                 <span>规格: </span>12/盒
                             </p>
                             <div class="price">
                                 ￥18.23
                             </div>
                         </div>
                     </div>
                 </div>
                 <!--满减活动-->
                 <div class="item-list">
                     <div class="item-title">
                         <span class="tags">满 减</span>
                         商品满100元 减50元
                     </div>
                     <div class="item-row">
                         <div class="goods-img">
                             <img src="https://devtoc.blob.core.chinacloudapi.cn/devotcimg/c2359d8939e2459284c0b6023479d7ff.jpg" alt="">
                         </div>
                         <div class="goods-detail">
                             <h5>复方丹参滴丸薄膜衣参滴丸薄膜衣20170421</h5>
                             <p><span>厂商: </span> 天士力制药股份有限公司</p>
                             <p>
                                 <span>数量: </span>1
                                 <span>单位: </span>盒
                                 <span>规格: </span>12/盒
                             </p>
                             <div class="price">
                                 <em>￥18.23</em>
                             </div>
                         </div>
                     </div>
                     <div class="item-row">
                         <div class="goods-img">
                             <img src="https://devtoc.blob.core.chinacloudapi.cn/devotcimg/c2359d8939e2459284c0b6023479d7ff.jpg" alt="">
                         </div>
                         <div class="goods-detail">
                             <h5>复方丹参滴丸薄膜衣20170421</h5>
                             <p><span>厂商: </span> 天士力制药股份有限公司</p>
                             <p>
                                 <span>数量: </span>1
                                 <span>单位: </span>盒
                                 <span>规格: </span>12/盒
                             </p>
                             <div class="price">
                                 <em>￥18.23</em>
                             </div>
                         </div>
                     </div>
                 </div>

                 <!--普通商品-->
                 <div class="item-list">
                     <div class="item-row">
                         <div class="goods-img">
                             <img src="https://devtoc.blob.core.chinacloudapi.cn/devotcimg/c2359d8939e2459284c0b6023479d7ff.jpg" alt="">
                         </div>
                         <div class="goods-detail">
                             <h5>复方丹参滴丸薄膜衣20170421</h5>
                             <p><span>厂商: </span> 天士力制药股份有限公司</p>
                             <p>
                                 <span>数量: </span>1
                                 <span>单位: </span>盒
                                 <span>规格: </span>12/盒
                             </p>
                             <div class="price">
                                 <em>￥18.23</em>
                             </div>
                         </div>
                     </div>
                 </div>

                 <!--买家留言-->
                 <div class="buyer-msg">
                     <label for="buyerMsg">买家留言:</label>
                     <input name="buyerMsg" type="text" placeholder="选填填写内容已和卖家协商确定" />
                 </div>

                 <!--优惠券和积分-->
                 <group class="discount">
                     <cell is-link>
                         <span slot="title" style="color:#666;" @click.native="">
                             <span style="vertical-align:middle;">优惠券折扣</span>
                             <span class="pull-right" style="vertical-align:middle;">未使用</span>
                         </span>
                     </cell>
                     <cell is-link>
                         <span slot="title" style="color:#666;">
                             <span style="vertical-align:middle;" @click.native="">积分抵扣</span>
                             <span class="pull-right" style="vertical-align:middle;">未使用</span>
                         </span>
                     </cell>
                 </group>

                 <!--商品价格-->
                 <div class="goods-overview clearfix">
                     <div class="list">
                         商品总价:
                         <span class="pull-right">
                             <em>￥0.00</em>
                         </span>
                     </div>
                     <div class="list">
                         优惠券抵用:
                         <span class="pull-right">
                             <em>￥0.00</em>
                         </span>
                     </div>
                     <div class="list">
                         积分抵用:
                         <span class="pull-right">
                             <em>￥0.00</em>
                         </span>
                     </div>
                     <div class="list">
                         折扣金额:
                         <span class="pull-right">
                             <em>￥0.00</em>
                         </span>
                     </div>
                     <div class="list">
                         运费共计:
                         <span class="pull-right">
                             <em>￥0.00</em>
                         </span>
                     </div>
                 </div>

                 <!--支付方式-->
                 <div class="payment">
                     <div class="payment-title">
                         支付方式
                     </div>
                     <div class="payment-list">
                         <checklist label-position="left" :options="paymentList" :max="1" @on-change="" v-model="payment"></checklist>

                     </div>
                 </div>

                 <div class="submit-order-bar">
                     <div class="price">
                         合计: <em> 12.32</em>
                     </div>
                     <div class="submit-button">
                         <button>提交订单</button>
                     </div>
                 </div>


             </div>
        </div>

    </view-box>
</template>

<script>
    import { ViewBox, Flexbox, FlexboxItem ,Cell,CellBox,Group,Checklist} from 'vux'
    import TslHeader from '@/components/tsl-header/TslHeader'

    export default {
        data() {
            return {
                title: '确认订单',
                paymentList: [ '<i class="iconfont icon-zhifubaozhifu" style="color:#5cb4fb"></i>支付宝'],
            }
        },
        components: { ViewBox, TslHeader, Flexbox, FlexboxItem,Cell,CellBox,Group,Checklist},
        computed: {

        },
        methods:{

        },
        mounted() {

            console.log(this.$route.path)
        }
    }
</script>

<style lang="less" scoped>
    @import '~@/assets/styles/variable.less';
    .weui-cells{
        margin:0;
    }
    .weui-cell{
        &:before{
            left:0;
            border:1px solid #F6F6F6;
        }
    }

    .submit-order{
        em{
            color: @tsl-color-main;
            font-style: normal;
        }

        .address{
            margin-top:46px;
            h4{
                font-size: @tsl-font-normal;
                line-height: @tsl-font-normal * 1.4285;
                color:#666;
            }
            background:@tsl-color-white url('~@/assets/images/color_border.png') repeat-x bottom;
            .address-tc{

            }
            .address-tb{
                display:block;
                color:#666;
                h4{
                    margin-left: 25px;
                }
                .address-tb-list{
                    clear: both;
                    padding:10px 0 5px;
                    color:#999;
                    font-size: @tsl-font-normal;
                    line-height: @tsl-font-normal * 1.5;
                }
                .tel{
                    margin-right: 20px;
                }
            }
        }

        .order-box{
            margin-top: 10px;
            overflow: hidden;
            .item-list{
                background: @tsl-color-white;
                margin-bottom: 10px;
                .item-title{
                    height: 38px;
                    line-height: 38px;
                    padding:0 15px;
                    font-size: @tsl-font-h6;
                    color:#666;
                    border-bottom: 1px solid #F6F6F6;
                    .tags{
                        margin-right: 10px;
                        padding:0 3px;
                        font-size: 10px;
                        color:@tsl-color-main;
                        line-height: @tsl-font-h6;
                        border:1px solid @tsl-color-main;
                        .tsl-border-radius(3px);
                    }
                }
                .item-row {
                    display:flex;
                    border-bottom: 1px solid #F6F6F6;
                    padding:10px 15px;
                    .goods-img{
                        position: relative;
                        flex: 0 0 130px;
                        img{
                            width: 120px;
                            height: 120px;
                        }
                        .right-icon{
                            position: absolute;
                            top:0;
                            right: 10px;
                            z-index: 999;
                        }
                        .taocan{
                            width: 40px;
                            height: 40px;
                            background:url('~@/assets/images/taocan_right_icon_x1.png');
                        }
                    }
                    .goods-detail{
                        position: relative;
                        flex:1;
                        overflow: hidden;
                        h5{
                            font-size: @tsl-font-h5;
                            .tsl-text-overflow();
                            color:#333;
                            line-height: @tsl-font-h5 * 1.43;
                            margin:7px 0 4px;
                        }
                        p{
                            color:#999;
                            font-size:@tsl-font-h6;
                            line-height: 17px;
                        }
                        .price{
                            position: absolute;
                            left:0;
                            bottom:14px;
                            font-size: @tsl-font-h3;
                            line-height:  @tsl-font-h3 * 1.25;
                        }

                    }
                }
            }
            .buyer-msg{
                margin-top:-10px;
                padding:0 15px;
                color:#666;
                width:100%;
                height: 38px;
                line-height: 38px;
                background:@tsl-color-white;
                font-size: @tsl-font-normal;
                overflow: hidden;
                input{
                    overflow: hidden;
                    border:0;
                    outline:0;
                    -webkit-appearance:none;
                    width: 65%;
                }

            }
            .discount{
                font-size:@tsl-font-normal;
                margin-top: -10px;
            }
            .goods-overview{
                background: @tsl-color-white;
                padding:0 15px;
                margin:10px auto;
                .list{
                    font-size: @tsl-font-normal;
                    color:#666;
                    margin:12px 0;
                }
            }
            .payment{
                font-size: @tsl-font-normal;
                line-height: 20px;
                color:#666;
                .payment-title{
                    padding:0 15px;
                    height: 37px;
                    line-height: 37px;
                    border-bottom:1px solid #EAEAEA;
                    font-size: @tsl-font-normal;
                    background-color:@tsl-color-white;
                }
                .payment-list{
                    ul{
                        padding:0 15px;
                        li{
                            font-size: @tsl-font-normal;
                        }
                    }
                }
            }

            .submit-order-bar{
                position: fixed;
                bottom:0;
                width:100%;
                margin-top:10px;
                background-color: @tsl-color-white;
                font-size: @tsl-font-normal;
                color:#333;
                height: 50px;
                line-height: 50px;
                display: flex;
                .price{
                    flex:1;
                    text-align: right;
                    margin-right: 15px;
                }
                .submit-button{
                    button{
                        width: 120px;
                        height: 50px;
                        line-height: 50px;
                        color:@tsl-color-white;
                        font-size: @tsl-font-h4;
                        background:@tsl-color-main;
                        border:0;
                        outline: 0;
                    };
                }
            }

        }
    }

</style>
