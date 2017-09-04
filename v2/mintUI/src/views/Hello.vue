<template>
    <div class="hello has-navbar">
        <mt-header fixed :title="title">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <h3>{{msg}}</h3>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                msg: '二级页面',
                title:'欢迎页'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hello { text-align: center;}
</style>
