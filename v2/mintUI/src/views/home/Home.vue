<template>
    <div class="home">
        <mt-header fixed :title="title"></mt-header>
        <img src="../../assets/logo.png">
        <h1>{{ msg }}</h1>
        <router-link to="/hello">
            <mt-button>欢迎页</mt-button>
        </router-link>
        <router-link to="/list">
            <mt-button>输入页</mt-button>
        </router-link>

        <router-link to="/login">
            <mt-button>登录页面开发中</mt-button>
        </router-link>
        <router-link to="/list">
            <mt-button>ajax测试</mt-button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                title:'慢病健康到家'
            }
        }
    }
</script>

<style scoped>
    .home { text-align: center;}
    a {
        color: #42b983;
    }
</style>
