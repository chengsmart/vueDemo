<template>
    <div>
        <div class="coupon">
            <div class="header">dasd</div>
            <div class="info">
                <h3>100元优惠券</h3>
                <h6>使用期限至2018/2/10</h6>
                <div class="clearfix h6">
                    使用规则
                    <span class="pull-right">仅限非药品使用</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Tabbar, TabbarItem } from 'vux'

    export default {
        name: 'tsl-coupon',
        components: { Tabbar, TabbarItem },
        data() {
            return {
                activeUrl: this.$route.path
            }
        }
    }
</script>

<style lang="less">
    .coupon {
        position: relative;
        display: block;
        height: 108px;
        padding-left: 131px;
        .header {
            position: absolute;
            width: 131px;
            top: 0;
            left: 0;
            bottom: 0;
            background: url("~@/assets/images/bg_coupon.png") no-repeat;
            -webkit-background-size: 100% 100%; background-size: 100% 100%;
        }
        .info {
            background-color: #fff;
            height: 108px;
        }
    }
</style>
