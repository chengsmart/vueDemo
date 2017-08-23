<template>
    <div id="app">
        <!--<transition name="fade" mode="in-out">-->
            <router-view></router-view>
        <!--</transition>-->
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>
    html, body { margin: 0; padding: 0; }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
    .has-navbar { padding-top: 40px;}
</style>
