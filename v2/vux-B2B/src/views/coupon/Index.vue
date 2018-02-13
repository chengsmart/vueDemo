<template>
    <view-box body-padding-top="96px" body-padding-bottom="0">
        <div slot="header">
            <tsl-header :left-options="{backText:''}" class="tsl-vux" :title="title" color="light">
            </tsl-header>
            <ul class="sub-header clearfix">
                <li :class="{ active : activeTab == 0 }" @click="toggleTab(0)">
                    <span>未使用</span>
                </li>
                <li :class="{ active : activeTab == 1 }" @click="toggleTab(1)">
                    <span>已使用</span>
                </li>
                <li :class="{ active : activeTab == 2 }" @click="toggleTab(2)">
                    <span>已失效</span>
                </li>
            </ul>
        </div>
        <div slot="default">
            <div class="box">
                <tsl-coupon></tsl-coupon>
            </div>
        </div>
    </view-box>
</template>

<script>
    import {ViewBox} from 'vux'
    import TslHeader from '@/components/tsl-header/TslHeader'
    import TslCoupon from '@/components/tsl-coupon/TslCoupon'

    export default {
        name: 'List',
        data() {
            return {
                title: '我的优惠券',
                activeTab:0
            }
        },
        components: {ViewBox, TslHeader, TslCoupon},
        methods: {
            toggleTab(tab){
                this.activeTab = tab
            }
        },
        mounted() {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    @import '~@/assets/styles/variable.less';
    .sub-header{
        position: fixed;
        top: 46px;
        width: 100%;
        background-color: #fff;
        border-top:1px solid #f6f6f6;
        li {
            width: 33%;
            display: block;
            float: left;
            height: 50px;
            line-height: 50px;
            text-align: center;
            span {
                color: #666;
                display: inline-block;
                line-height: 48px;
                padding: 0 10px;
                border-bottom:2px solid transparent;
            }
            &.active {
                span {
                    border-color: @tsl-color-assist;
                    color: @tsl-color-assist;
                }
            }
        }
    }
    .box { padding: 10px;}
</style>
