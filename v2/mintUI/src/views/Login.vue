<template>
    <div class="login has-navbar">
        <mt-header fixed :title="title">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" v-model="password"></mt-field>
        <mt-button size="large" type="primary">登录</mt-button>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                msg: '二级页面',
                title:'登录页',
                username:'',
                password:''
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
