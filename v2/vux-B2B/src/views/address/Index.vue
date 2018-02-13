<template>
    <div class="my-address">
        <view-box body-padding-top="46px" body-padding-bottom="50px">
            <tsl-header :left-options="{backText:''}" slot="header" class="tsl-vux" :title="title" color="light">
                <a slot="right">取消</a>
            </tsl-header>
            <div slot="default">
                <tsl-address-details :listData="AddressData"></tsl-address-details>
            </div>
            <div class="button-style">
                <x-button type="primary" text="+ 新增地址" @click.native="addNewAddress"></x-button>
            </div>
        </view-box>
    </div>
</template>

<script>
    import {ViewBox, XButton} from 'vux';
    import {queryMyAddressList} from '@/api/address'
    import TslHeader from '@/components/tsl-header/TslHeader';
    import TslAddressDetails from '@/views/address/childComponents/IndexAddressDetails'

    export default {
        name: 'myAddress',
        data() {
            return {
                title: '选择收货地址',
                AddressData:[
                    {
                        'name': '王建刚',
                        'phone': '15922988901',
                        'address':'天津市北辰区天士力控股集团（天士力大健康）',
                        'defaultFlag': true
                    },
                    {
                        'name': '陈毅',
                        'phone': '15922988902',
                        'address':'天津市北辰区天士力控股集团天之娇园区',
                        'defaultFlag': false
                    },
                    {
                        'name': '李四',
                        'phone': '13822988888',
                        'address':'天津市河西区梅江道',
                        'defaultFlag': false
                    },
                    {
                        'name': '张1',
                        'phone': '13322988911',
                        'address':'火星',
                        'defaultFlag': false
                    },
                    {
                        'name': '张2',
                        'phone': '13322988911',
                        'address':'水星',
                        'defaultFlag': false
                    },
                    {
                        'name': '张3',
                        'phone': '13322988911',
                        'address':'土星',
                        'defaultFlag': false
                    },
                    {
                        'name': '张4',
                        'phone': '13322988911',
                        'address':'月亮',
                        'defaultFlag': false
                    },
                    {
                        'name': '走你',
                        'phone': '13322988111',
                        'address':'地球',
                        'defaultFlag': false
                    }
                ]
            }
        },
        components: {ViewBox, TslHeader, XButton,TslAddressDetails},
        methods: {
            addNewAddress() {
                //Todo 路由跳转
                this.$router.push({
                    path:'/operateAddress',
                    query:{type:'create'}
                })
            }
        },
        mounted() {
        }
    }
</script>

<style lang="less" scoped>
    .my-address {
        .button-style {
            position: fixed;
            bottom: 0;
            width: 100%;
        }
        .weui-btn {
            border-radius: 0
        }
        .weui-btn:after {
            border-radius: 0
        }
    }

</style>
