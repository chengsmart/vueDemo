<template>
    <div id="name">
        <h1>{{name}} 测试 内联页面 ajax</h1>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h1>豆瓣电影排行榜</h1>
            </div>
            <div v-for="article in articles" class="text item">
                {{article.title}}
      </div>
        </el-card>
    </div>
</template>

<script type="text/javascript">
    export default {
        data () {
            return {
                name: 'Smart',
                articles:[]
            };
        },
        mounted: function() {
            let that = this;
            this.$axios.get('https://api.douban.com/v2/movie/top250?count=10')
                .then(function (response) {
                    that.articles = response.data.subjects;
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });

        }
    };
</script>

<style>
</style>
