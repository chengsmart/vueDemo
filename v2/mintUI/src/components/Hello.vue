<template>
    <div class="hello">
        <mt-header :title="msg">
        </mt-header>
        <img src="../assets/logo.png">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <router-link to="/detail">更多</router-link>
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
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
