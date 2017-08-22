<template>
    <div class="detail">
        <mt-header :title="title">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>

        <router-link to="/list">
            <mt-button icon="home">列表</mt-button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'detail',
        data () {
            return {
                title: '详情页面'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
