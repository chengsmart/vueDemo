<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    @import '~@/assets/styles/variable.less';
    @import '~@/assets/styles/global.less';
    // 覆盖vux样式
    .tsl-vux.weui-tabbar {
        position: fixed;
        background-color: #fff;
        &:before {
            border: 0;
        }
    }
    .tsl-vux.vux-flexbox { background-color: #fff; position: relative; margin-bottom: 7px; }
    .weui-cells {
        &:before,
        &:after {
            border-color: #eee !important;
        }
        // item描边强制到最左侧
        .weui-cell {
            &:before {
                left: 0;
                border-color: #eee;
            }
        }
    }
    .tsl-vux.vux-slider{
        .vux-swiper{
            .vux-swiper-item{
                a{
                    .vux-swiper-desc{
                        text-shadow:none;
                        background-image: none;
                    }
                }
            }
        }
        .vux-indicator{
            position: absolute;
            bottom: 36px;
        }
    }
    //购物车样式覆盖
    .weui-cell{
        .vux-number-selector svg{
            fill:#979797;
        }
        .vux-number-selector-sub{
            padding:1px;
        }
        .vux-number-selector-plus{
            padding:1px;
        }
        .vux-number-input{
            padding:1px;
            font-size: @tsl-font-h6;
        }
    }
    .cart-wrap{
        .weui-icon-circle{
            font-size: @tsl-font-h2!important;
        }
        .weui-icon-success{
            font-size: @tsl-font-h2!important;
        }
    }
    //覆盖确认订单页面样式
    .submit-order{
        .weui-icon-checked{
            &:before{
                font-size: 16px!important;
            }
        }
        .payment-list{
            .iconfont{
                position: relative;
                top:5px;
                font-size: 25px;
                margin-right: 10px;
            }
        }
    }

    .tsl-vux.vux-divider{
        padding: 10px 25px;
        color:#999;
    }

</style>
