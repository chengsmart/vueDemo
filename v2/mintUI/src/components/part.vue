<template>
    <div class="detail has-navbar">
        <mt-header fixed :title="title">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>

        <mt-cell title="列表页面" to="/list" is-link value="查看列表"></mt-cell>
        <mt-cell :title="item.title" v-for="item in articles" class="item"></mt-cell>

    </div>
</template>

<script>
    export default {
        name: 'part',
        data () {
            return {
                title: '详情页面',
                articles:[]
            }
        },
        methods:{
            getVideoList () {
                let that = this;
                this.$axios.get('https://api.douban.com/v2/movie/top250?count=10')
                    .then(function (response) {
                        that.$indicator.close();
                        that.articles = response.data.subjects;
                    })
                    .catch(function (error) {
                        window.console.log(error);
                    });
            }
        },
        mounted:function () {
//            this.$indicator.open({
//                spinnerType:'double-bounce'
//            });
//            this.getVideoList()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .item { text-align: center;}
</style>
