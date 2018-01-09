<template>
    <div class="hello">
        <x-header :left-options="{backText:'返回'}" title="首页"></x-header>
        <h1>{{ msg }}</h1>
        <h2>{{title}}</h2>
        <group>
            <cell-box :is-link="true" :link="nextPage">跳转到列表页</cell-box>
            <cell-box :is-link="true" :link="tabsPage">跳转到tab页</cell-box>
        </group>
    </div>
</template>

<script>
    import {Group, CellBox, XHeader} from 'vux'

    export default {
        name: 'Home',
        data() {
            return {
                msg: 'Vue.js项目demo',
                title: '基于vux框架',
                nextPage:'list',
                tabsPage:'tab'
            }
        },
        components: {Group, CellBox, XHeader}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        text-align: center;
        font-weight: normal;
    }
</style>
