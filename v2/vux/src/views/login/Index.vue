<template>
    <view-box body-padding-top="46px" body-padding-bottom="53px">
        <tsl-header :left-options="{backText:''}" slot="header"
                  class="tsl-vux" :title="title" color="light">
            <div slot="overwrite-left" class="left-link" @click="goBack()">
                <i class="iconfont icon-cuowu"></i>
            </div>
        </tsl-header>
        <group slot="default" class="page-login">
            <x-input title="账号" v-model="username"></x-input>
            <x-input title="密码" v-model="password" :type=" showPsw ? 'text':'password' ">
                <i class="iconfont icon-bukejian" slot="right" @click="showPsw = !showPsw"></i>
            </x-input>
            <!-- 用于展示最后一行下划线 -->
            <x-input readonly style="padding: 0;height: 25px;">
            </x-input>
            <x-button type="primary" text="登录" @click.native.prevent="fetchToken"></x-button>
        </group>
        <tsl-empty></tsl-empty>
    </view-box>
</template>

<script>
    import {ViewBox, Group, XInput, XButton} from 'vux'
    import TslHeader from '@/components/tsl-header/TslHeader'
    import TslEmpty from '@/components/tsl-empty/TslEmpty'
    import Lockr from 'Lockr'
    import { login } from '@/api/login'

    export default {
        name: 'Home',
        data() {
            return {
                title: '会员登录',
                username:'高雅静test7',
                password:'222222',
                showPsw:false,
                uri:this.$route.query.uri
            }
        },
        components: {ViewBox, Group, XInput, XButton,TslHeader, TslEmpty},
        methods:{
            fetchToken(){
                login(
                    this.username,
                    this.password
                )
                    .then( res => {
                        console.log(res);
                        Lockr.set('token',res.token);
                        this.$router.replace({
                            path: this.uri
                        });
                    })
                    .catch(error => {
                        console.warn(error.response.data.message);
                        this.$vux.toast.show({
                            text: error.response.data.message,
                            type: 'cancel'
                        })
                    });
            },
            goBack(){
                this.$router.back()
            }
        },
        mounted() {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .page-login {
        padding: 15px;
        .vux-no-group-title.weui-cells:before {
            opacity: 0!important;
        }
        .weui-cell {
            font-size:16px;
        }
    }
</style>
<style>
    .page-login  .vux-no-group-title.weui-cells:before {
            opacity: 0!important;
        }
</style>
