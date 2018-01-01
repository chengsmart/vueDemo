<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>{{title}}</h2>
        <group>
            <cell-box is-link="true" link="list">跳转到列表页</cell-box>
        </group>
    </div>
</template>

<script>
    import {Group, CellBox} from 'vux'

    export default {
        name: 'Home',
        data() {
            return {
                msg: 'Vue.js项目demo',
                title: '基于vux框架'
            }
        },
        components: {Group, CellBox},
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        text-align: center;
        font-weight: normal;
    }
</style>
