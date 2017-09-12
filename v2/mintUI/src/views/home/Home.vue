<template>
    <div class="home">
        <img src="../../assets/logo.png">
        <h1>{{ msg }}</h1>
        <router-link to="/hello">
            <mt-button size="large">欢迎页</mt-button>
        </router-link>
        <router-link to="/list">
            <mt-button size="large">输入页</mt-button>
        </router-link>

        <router-link to="/login">
            <mt-button size="large">登录页面开发中</mt-button>
        </router-link>
        <router-link to="/detail">
            <mt-button size="large">个人信息</mt-button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                msg: '慢病健康到家 for vue',
                title:'慢病健康到家'
            }
        }
    }
</script>

<style scoped lang="less">
    .home {
        text-align: center;
        h1 { font-size: 24px;}
        a { text-decoration: none;}
    }
</style>
