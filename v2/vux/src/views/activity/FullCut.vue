<template>
    <div class="page-fullcut">
        <x-header :left-options="{backText:''}" :title="title">
            <div solt="overwrite-title" class="search-input">
                <input type="text">
            </div>
        </x-header>
    </div>
</template>

<script>
    import { XHeader} from 'vux'

    export default {
        name: 'Detail',
        data() {
            return {
                title: '满减活动'
            }
        },
        components: { XHeader},
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
.search-input { width: 100%; }
.search-input input { width: 100%;margin: 0; margin-left: -20px; margin-right: -20px; height: 30px; line-height: 30px;}
</style>
<style lang="less">
    .page-fullcut .vux-header .vux-header-title { margin: 0 50px!important;}
</style>