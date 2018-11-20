<template>
    <div class="tob-delivery-address">
        <group>
            <x-input title="收货人 " v-model="addressData.receiver"></x-input>
            <x-input title="联系方式" v-model="addressData.contact"></x-input>
            <popup-picker title="所在地区" :data="areaData" :columns="3" v-model="addressData.location" show-name
                          placeholder="请选择" value-text-align=""></popup-picker>

            <div class="title-name">
                详细地址
            </div>

            <div>
                <span>111111</span>
                <check-icon :value.sync="defaultFlag">
                </check-icon>
            </div>

            <div class="button-style">
                <x-button type="primary" text="保存" @click.native.prevent="saveData"></x-button>
            </div>
        </group>
    </div>
</template>

<script>
    import {Group, XInput, PopupPicker, XButton,CheckIcon} from 'vux';

    export default {
        name: 'to-c-delivery-address',
        data() {
            return {
                title: '',
                defaultFlag:false,
                areaData: [{
                    name: '中国',
                    value: 'china',
                    parent: 0
                }, {
                    name: '美国',
                    value: 'USA',
                    parent: 0
                }, {
                    name: '广东',
                    value: 'china001',
                    parent: 'china'
                }, {
                    name: '广西',
                    value: 'china002',
                    parent: 'china'
                }, {
                    name: '美国001',
                    value: 'usa001',
                    parent: 'USA'
                }, {
                    name: '美国002',
                    value: 'usa002',
                    parent: 'USA'
                }, {
                    name: '广州',
                    value: 'gz',
                    parent: 'china001'
                }, {
                    name: '深圳',
                    value: 'sz',
                    parent: 'china001'
                }, {
                    name: '广西001',
                    value: 'gz',
                    parent: 'china002'
                }, {
                    name: '广西002',
                    value: 'sz',
                    parent: 'china002'
                }, {
                    name: '美国001_001',
                    value: '0003',
                    parent: 'usa001'
                }, {
                    name: '美国001_002',
                    value: '0004',
                    parent: 'usa001'
                }, {
                    name: '美国002_001',
                    value: '0005',
                    parent: 'usa002'
                }, {
                    name: '美国002_002',
                    value: '0006',
                    parent: 'usa002'
                }],
                addressData: {
                    receiver: '',
                    contact: '',
                    location: [],
                    fullAddress: '',
                    defFlag: false
                }
            }
        },
        components: {Group, XInput, PopupPicker, XButton,CheckIcon},
        methods: {
            saveData() {
                console.log(this.addressData)
            }
        },
    }
</script>

<style lang="less">
    .tob-delivery-address {
        .weui-cells {
            margin-top: 0;
            font-size: 14px;
        }
        .weui-cell {
            height: 48px;
        }
        .vux-popup-picker-placeholder {
            float: right;
        }
        .vux-popup-picker-value {
            position: relative;
            left: 16px;
            color:#333;
        }
        .vux-cell-box:not(:first-child):before {
            -webkit-transform: scaleY(0.3);
            transform: scaleY(0.3);
            left: 0
        }
        .title-name {
            line-height: 48px;
            background-color: #F6F6F6;
            padding: 0 15px;
        }
        .button-style {
            position: fixed;
            bottom: 0;
            width: 100%;
            .weui-btn {
                border-radius: 0
            }
            .weui-btn:after {
                border-radius: 0
            }
        }
    }
</style>
