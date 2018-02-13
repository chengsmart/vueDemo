<template>
    <view-box body-padding-top="46px" body-padding-bottom="0">
        <tsl-header :left-options="{backText:''}" slot="header" class="tsl-vux" :title="title" color="light">
        </tsl-header>
        <div slot="default"></div>
    </view-box>
</template>

<script>
    import {ViewBox} from 'vux'
    import TslHeader from '@/components/tsl-header/TslHeader'

    export default {
        name: 'List',
        data() {
            return {
                title: '我的订单'
            }
        },
        components: {ViewBox, TslHeader},
        methods: {
            goBack(){
                this.$router.back()
            }
        },
        mounted() {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
