<template>
<div class="hello">
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
