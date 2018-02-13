<template>
    <div>
        <tsl-header :left-options="{showBack:true,backText: ''}" :title="title"></tsl-header>
        <div class="list-wrap">
            <div class="list-content">
                <a @click.stop.prevent="goNewsDetail(item.id)" class="article_link clearfix" v-for="(item, index) in newsListData" :key="item.id">
                    <div class="item-detail" :class="{ desc : item.pic.length == 1 }">
                        <h3 class="item-title">{{item.title}}</h3>
                        <div class="list-image" v-if="item.pic.length >= 3">
                            <ul class="clearfix">
                                <li v-for="list in item.pic.slice(0,3)" >
                                    <img :src="list.imgUrl" alt="">
                                </li>
                            </ul>
                        </div>
                        <div class="item-info">
                            <span class="time">
                                <i class="iconfont icon-shijian"></i>
                                {{item.time}}
                            </span>
                        </div>
                    </div>
                    <div class="list-img-holder" v-if="item.pic.length == 1">
                        <img :src="item.pic[0].imgUrl" alt="">
                    </div>
                </a>
            </div>

        </div>

    </div>
</template>

<script>
    import { Scroller,LoadMore } from 'vux';
    import  TslHeader  from '@/components/tsl-header/TslHeader';
    import { queryNewsList } from '@/api/news';

    export default {
        data() {
            return {
                title: '新闻资讯',
                position: 'relative',
                newsListData: [],
                bottomCount: 20,
            }
        },
        components: {
            TslHeader,
            Scroller,
            LoadMore
        },
        computed: {
        },
        methods: {
            queryData(){
                queryNewsList()
                    .then(res => {
                        this.newsListData = res.data;
                    })
                    .catch(error => {
                        console.log(error.data)
                    })
            },
            goNewsDetail(id) {
                this.$router.push({
                    path: '/news/detail',
                    query:{
                        'id':id
                    }
                });
            }
        },
        mounted() {
            this.queryData()
        }
    }
</script>

<style lang="less" scoped>
    @import '~@/assets/styles/variable.less';

    .list-wrap{
        background: @tsl-color-white;
        padding-top:46px;
        .list-content {
            .tsl-utils-box-sizing(border-box);
            -webkit-margin-after-collapse: separate;
            -webkit-margin-before-collapse: discard;
            -webkit-user-select: none;
            padding:0 15px;
            .article_link {
                display: block;
                position: relative;
                padding: 10px 0px;
                text-decoration: none;
                border-bottom: 1px solid #f5f5f5;
            }
            .item-detail {
                .item-title{
                    color: #666;
                    font-size: @tsl-font-h5;
                    line-height: @tsl-font-h5 * 1.4;
                    -webkit-box-orient: vertical;
                }
                .list-image{
                    margin-top: 5px;
                    ul{
                        display: block;
                        margin: 0;
                        padding: 0;
                        list-style-type: none;
                        font-size: 0;
                        text-align: center;
                        li {
                            display: inline-block;
                            overflow: hidden;
                            position: relative;
                            height:70px;
                            max-height: 70px;
                            width: 32%;
                            margin-left: 2%;
                            .tsl-utils-box-sizing(border-box);
                            &:first-child{
                                margin-left:0;
                            }
                            img {
                                .tsl-img-responsive(block);
                                height: 100%;
                            }
                        }
                    }
                }
                .item-info{
                    .icon-shijian{
                        font-size: @tsl-font-h6;
                    }
                    .time {
                        color: #bbb;
                        font-size: @tsl-font-h6;
                        line-height: 20px;
                    }
                }
            }
            .desc{
                width: 65%;
                float:left;
            }
            .list-img-holder{
                overflow: hidden;
                position: relative;
                width: 32%;
                margin-left:2%;
                float: left;
                vertical-align: middle;
                img {
                    .tsl-img-responsive(block);
                    width: 100%;
                    height: 70px;
                }
            }
        }
    }
</style>
