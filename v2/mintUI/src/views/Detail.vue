<template>
    <div class="detail has-navbar">
        <mt-header fixed :title="title">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>

        <mt-cell title="姓名" :value="info.name"></mt-cell>
        <mt-cell title="社保卡号" :value="info.sin"></mt-cell>
        <mt-cell title="社保卡号" :value="info.mobileNumber"></mt-cell>

        <mt-button size="large" @click="logout()">登出</mt-button>
    </div>
</template>

<script>
    import { getUserInfo } from '@/api/personal'
    import { removeToken } from '@/utils/auth'
    export default {
        name: 'detail',
        data () {
            return {
                title: '详情页面',
                info:{}
            }
        },
        methods:{
            logout:function () {
                removeToken()
                this.$router.push('HomeTab')
            }
        },
        mounted:function () {
            getUserInfo()
                .then(data => {
                    this.info = data
                })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .item { text-align: center;}
</style>
