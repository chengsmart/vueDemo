<template>
    <div class="order">
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img  src="http://via.placeholder.com/375x300/f60/fff" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img  src="http://via.placeholder.com/375x300/f60/fff" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img  src="http://via.placeholder.com/375x300/f60/fff" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {}
        }
    }
</script>

<style scoped>
    .mint-swipe { height: 300px; }
</style>
