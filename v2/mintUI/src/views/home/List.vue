<template>
<div class="hello">
    <router-link to="/login">
        <mt-button>登录页面开发中</mt-button>
    </router-link>
        <mt-cell v-for="n in 10" :title="'列表项' + n"></mt-cell>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {

            }
        }
    }
</script>

<style scoped>

</style>
