<template>
    <div>
        <tabbar slot="bottom" class="tsl-vux">
            <tabbar-item :selected="activeUrl == '/home' ? true : false" link="/home">
                <i slot="icon" v-if="activeUrl == '/home'" class="iconfont icon-shouyedown"></i>
                <i slot="icon" v-if="activeUrl != '/home'" class="iconfont icon-shouye"></i>
                <span slot="label">首页</span>
            </tabbar-item>
            <tabbar-item :selected="activeUrl == '/category' ? true : false" link="/category">
                <i slot="icon" v-if="activeUrl == '/category'" class="iconfont icon-fenlei-down"></i>
                <i slot="icon" v-if="activeUrl != '/category'" class="iconfont icon-fenlei"></i>
                <span slot="label">分类</span>
            </tabbar-item>
            <tabbar-item :selected="activeUrl == '/cart' ? true : false" link="/cart">
                <i slot="icon" v-if="activeUrl == '/cart'" class="iconfont icon-gouwuche-down"></i>
                <i slot="icon" v-if="activeUrl != '/cart'" class="iconfont icon-gouwuche"></i>
                <span slot="label">购物车</span>
            </tabbar-item>
            <tabbar-item :selected="activeUrl == '/personal' ? true : false" link="/personal">
                <i slot="icon" v-if="activeUrl == '/personal'" class="iconfont icon-wodedown"></i>
                <i slot="icon" v-if="activeUrl != '/personal'" class="iconfont icon-wode1"></i>
                <span slot="label">我的</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
    import { Tabbar, TabbarItem } from 'vux'

    export default {
        name: 'tsl-menu',
        components: { Tabbar, TabbarItem },
        data() {
            return {
                activeUrl: this.$route.path
            }
        }
    }
</script>

<style lang="less">

</style>
