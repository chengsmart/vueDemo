<template>
    <div id="name">
        <h1>{{name}} 测试 内联页面</h1>
        <ul class="list">
            以下是ajax数据
            <li v-for="article in articles">
                {{article.title}}
            </li>
        </ul>
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
    .list { background-color: #f60; color: #fff;}
    .list > li { display: block; width: 100%; color: #666; background-color: #fff; font-size: 12px; padding: 3px; margin: 1px 0;}
</style>
