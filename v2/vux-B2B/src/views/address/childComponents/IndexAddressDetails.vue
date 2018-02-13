<template>
    <div>
        <div class="tsl-address-detail-item" v-for="(user,index) in listData" :key="user.id">
            <div class="item-desc" @click="selectDefAddress(index)">
                <span>{{user.name}}</span>
                <span>{{user.phone}}</span>
                <p class="desc-address">{{user.address}}</p>
            </div>
            <div class="item-operate">
                <check-icon :value.sync="user.defaultFlag"
                            @click="chooseDefFlag(index,user.defaultFlag)">
                    <span :class="{ 'selected-color': user.defaultFlag}">默认地址</span>
                </check-icon>
                <ul class="button-menu">
                    <li class="column column-position" @click="editAddress()">
                        <a>
                            <img src="@/assets/images/edit_img.png">
                            <span class="name-style">编辑</span>
                        </a>
                    </li>
                    <li class="column" @click="delAddress()">
                        <a>
                            <img src="@/assets/images/delete_img.png">
                            <span class="name-style">删除</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import {CheckIcon, ConfirmPlugin} from 'vux';

    Vue.use(ConfirmPlugin);
    import {selectDefaultFlag, delAddress} from '@/api/address'

    export default {
        name: 'delivery-address',
        props: ['listData'],
        components: {CheckIcon},
        data() {
            return {
                addressData: this.listData,
                buttonInfo: [
                    {
                        name: '编辑',
                        icon: require('@/assets/images/edit_img.png'),
                        link: ''
                    }
                ]
            }
        },
        methods: {
            //单选默认地址操作
            chooseDefFlag(index, flag) {
                if (flag) {
                    this.addressData.forEach((item, i) => {
                        if (i !== index) {
                            item.defaultFlag = !flag;
                        }
                    });
                }
                //Todo 选中默认地址 与服务器交互
            },
            selectDefAddress(index) {
                console.log(index)
            },
            //删除地址
            delAddress() {
                this.popUPConfirm();
            },
            //编辑地址
            editAddress() {
                this.$router.push({
                    path:'/operateAddress',
                    query:{type:'edit'}
                })
            },
            //弹框
            popUPConfirm() {
                this.$vux.confirm.show({
                    title: '是否删除?',
                    onCancel() {
                        console.log('plugin cancel')
                    },
                    onConfirm() {
                        //Todo 删除地址 与服务器交互
                        console.log('plugin confirm')
                    }
                })
            }
        }
    }
</script>

<style lang="less">
    @import '~@/assets/styles/variable.less';
    @tsl-color-item-gray: #666666;
    @tsl-address-fontsize: 13px;

    .tsl-address-detail-item {
        background-color: @tsl-color-white;
        margin-bottom: 12px;
        p {
            font-size: @tsl-address-fontsize;
            color: @tsl-color-item-gray;
        }
        .item-desc {
            padding: 10px 13px;
            border-bottom: 1px solid #eeeeee;
            span {
                font-size: @tsl-font-h5;
                line-height: 30px;
            }
            .desc-address {
                line-height: 20px;
                padding-left: 2px;
            }
        }
        .item-operate {
            padding: 10px 15px;
            height: 18px;
            position: relative;
            .vux-check-icon {
                float: left;
                span {
                    font-size: @tsl-address-fontsize;
                    line-height: 0;
                    .selected-color {
                        color: @tsl-color-main;
                    }
                }
            }
            .weui-icon-success {
                font-size: 16px;
            }
            .weui-icon-circle {
                font-size: 16px;
            }
            .button-menu {
                display: inline;
                position: absolute;
                right: 15px;
                .column {
                    display: inline;
                    img {
                        width: 20px;
                        height: 20px;
                        vertical-align: bottom;
                    }
                    .name-style {
                        font-size: @tsl-address-fontsize;
                        color: @tsl-color-item-gray;
                    }
                }
                .column.column-position {
                    position: relative;
                    right: 15px;
                }
            }
        }
    }
</style>
