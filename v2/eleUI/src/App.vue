<template>
    <div id="app">
        <img src="./assets/logo.png">
        <h1>{{title}}</h1>
        <name></name>
        <router-link to="/page1">No.1</router-link>
        <router-link to="/second">No.2</router-link>
        <router-view class="view"></router-view>
    </div>
</template>

<script>
    import name from './component/name.vue';
    export default {
        name: 'app',
        data () {
            return {
                title: 'Vue.js 测试'
            };
        },
        components: {name}
    };
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
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
