<template>
    <div>
        <tsl-header :left-options="{showBack:false,backText:''}" slot="header" class="tsl-vux" :title="title">
        </tsl-header>
        <tsl-menu></tsl-menu>
    </div>
</template>

<script>
    import {Tabbar, TabbarItem} from 'vux'
    import TslMenu from '@/components/tsl-menu/TslMenu'
    import TslHeader from '@/components/tsl-header/TslHeader'

    export default {
        name: 'Detail',
        data() {
            return {
                title: '商品分类'
            }
        },
        components: {TslHeader, Tabbar, TabbarItem, TslMenu},
        computed: {

        },
        methods:{

        },
        mounted() {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>