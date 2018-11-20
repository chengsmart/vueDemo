<template>
    <view-box body-padding-top="150px" body-padding-bottom="53px">
        <header slot="header">
            <div class="setting">
                <router-link to="/">
                    <i class="iconfont icon-shezhi"></i>
                </router-link>
            </div>
            <img class="portrait" src="@/assets/images/img_portrait.png">
            <div class="info">
                <h3>用户名小帅</h3>
                <p>程序员</p>
            </div>
        </header>
        <div slot="default">
            <personal-menu :menu="menuLinks"></personal-menu>
            <group class="personal-list" gutter="10px">
                <cell is-link link="/point">
                    <h5 slot="title">我的积分</h5>
                    <img slot="icon" class="icon" src="@/assets/images/icon_personal_points.png">
                </cell>
                <cell is-link link="/coupon">
                    <h5 slot="title">我的优惠券</h5>
                    <img slot="icon" class="icon" src="@/assets/images/icon_personal_coupon.png">
                </cell>
                <cell is-link link="/address">
                    <h5 slot="title">我的收货地址</h5>
                    <img slot="icon" class="icon" src="@/assets/images/icon_personal_address.png">
                </cell>
                <cell is-link link="/">
                    <h5 slot="title">消息中心</h5>
                    <img slot="icon" class="icon" src="@/assets/images/icon_personal_message.png">
                </cell>
            </group>
        </div>
        <tsl-menu></tsl-menu>
    </view-box>
</template>

<script>
    import {ViewBox, Tabbar, TabbarItem, XHeader, Group, Cell} from 'vux'
    import PersonalMenu from '@/views/personal/PersonalMenu'
    import TslMenu from '@/components/tsl-menu/TslMenu'

    export default {
        name: 'List',
        data() {
            return {
                title: '个人中心',
                menuLinks: [{
                    name: '全部订单',
                    icon: require('@/assets/images/icon_all_orders.png'),
                    link: '/order?type=0'
                }, {
                    name: '待审核',
                    icon: require('@/assets/images/icon_pending_audited.png'),
                    link: '/order?type=0'
                }, {
                    name: '待支付',
                    icon: require('@/assets/images/icon_unpaid.png'),
                    link: '/order?type=0'
                }, {
                    name: '待发货',
                    icon: require('@/assets/images/icon_pending_delivery.png'),
                    link: '/order?type=0'
                }, {
                    name: '退货退款',
                    icon: require('@/assets/images/icon_refund.png'),
                    link: '/order?type=0'
                }]
            }
        },
        components: {ViewBox, Tabbar, TabbarItem, XHeader, PersonalMenu, Group, Cell, TslMenu},
        methods: {},
        mounted() {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    header {
        background: url("~@/assets/images/bg_personal_header.png") no-repeat;
        width: 100%;
        z-index: 300;
        height: 150px;
        position: fixed;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
        .setting {
            position: absolute;
            right: 15px;
            top: 10px;
            i {
                color: #fff;
                font-size: 25px;
            }
        }
        .portrait {
            width: 70px;
            height: 70px;
            position: absolute;
            top: 50px;
            left: 15px;
        }
        .info {
            padding: 60px 15px 0 100px;
            color: #fff;
        }
    }
    .weui-cells.vux-no-group-title:before {
        border-color: #f6f6f6;
    }
    .weui-cell {
        padding: 9px 15px;
        &:before {
            border-color: #f6f6f6;
        }
        .icon {
            width: 30px;
            height: auto;
            vertical-align: -6px;
            margin-right: 8px;
        }
    }
</style>
