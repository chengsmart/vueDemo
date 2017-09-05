<template>
    <div class="login has-navbar">
        <mt-header fixed :title="title">
            <mt-button icon="back" v-on:click="back()" slot="left">返回</mt-button>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" v-model="password"></mt-field>
        <mt-button size="large" type="primary" @click.native="handleLogin()">登录</mt-button>
    </div>
</template>

<script>
    import { login } from '@/api/login'
    export default {
        name: 'hello',
        data () {
            return {
                msg: '二级页面',
                title:'登录页',
                username:'110111133332222',
                password:'111111'
            }
        },
        methods:{
            back(){
                this.$router.back()
            },
            handleLogin(){
                login(this.username,this.password,0)
                    .then(data => {
                        this.$toast('登录成功')
                        this.$router.push('/');
                    })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
