<template>
    <div class="hello has-navbar">
        <mt-header fixed :title="msg">
        </mt-header>
        <img src="../assets/logo.png">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <span v-for="n in 10">{{ n }} </span>
        <router-link to="/detail">
            <mt-button icon="loading">更多</mt-button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                link:'detail'
            }
        },
        methods: {
            links:function () {
                this.$router.push({path:'detail'})
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hello { text-align: center;}
    a {
        color: #42b983;
    }
</style>
