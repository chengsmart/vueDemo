<template>
    <div class="home-tab has-navbar">
        <mt-header fixed :title="title"></mt-header>
        <mt-tab-container class="page-tabbar-container" v-model="selected">
            <mt-tab-container-item id="home">
                <Home></Home>
            </mt-tab-container-item>
            <mt-tab-container-item id="list">
                <List></List>
            </mt-tab-container-item>
            <mt-tab-container-item id="order">
                <Order></Order>
            </mt-tab-container-item>
            <mt-tab-container-item id="personal">
                <Personal></Personal>
            </mt-tab-container-item>
        </mt-tab-container>
        <mt-tabbar fixed v-model="selected">
            <mt-tab-item id="home">
                <img slot="icon" src="http://via.placeholder.com/50x50">
                外卖
            </mt-tab-item>
            <mt-tab-item id="list">
                <img slot="icon" src="http://via.placeholder.com/50x50">
                列表
            </mt-tab-item>
            <mt-tab-item id="order">
                <img slot="icon" src="http://via.placeholder.com/50x50">
                订单
            </mt-tab-item>
            <mt-tab-item id="personal">
                <img slot="icon" src="http://via.placeholder.com/50x50">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
    import Home from '@/views/home/Home'
    import Order from '@/views/home/Order'
    import List from '@/views/home/List'
    import Personal from '@/views/home/Personal'
    export default {
        name: 'HomeTab',
        components: {
            Home,Order,List,Personal
        },
        data () {
            return {
                selected: 'home',
                title: '慢病APP'
            }
        }
    }
</script>

<style scoped>

</style>
