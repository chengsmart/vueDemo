<template>
    <ul class="my-tab-content">
        <li> ID : {{showData.id}}</li>
        <li> 标题 : {{showData.title}}</li>
        <li> 时间 : {{showData.createAt | timestampDateFilter}}</li>
        <li> 作者 : {{showData.createBy}}</li>
    </ul>
</template>
<script>
    import {CellBox} from 'vux'
    import {getTabList} from '@/api/tab'
    import {timestampDateFilter} from '@/filters/index'

    export default {
        name: 'tabContent',
        data() {
            return {
                restfulId: this.itemId,
                showData: {}
            }
        },
//        props: {
//            itemId: {
//                type: String,
//                default:'1'
//            }
//        },
        props: ['itemId'],
        methods: {
            fetchData() {
                console.log(this.restfulId);
                console.log(this.itemId);
                // 获取数据
                getTabList(this.restfulId)
                    .then(data => {
                        console.log(data);
                        this.showData = data;
                    })
            }
        },
        filters: {
            timestampDateFilter
        },
        computed: {
            msg() {
                return '当前活跃页为' + this.restfulId
            }
        },
        mounted: function () {
            this.fetchData();
            this.$emit('listenChild', this.msg)
        }
    }
</script>

<style scoped>
    .my-tab-content {
        display: block;
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    .my-tab-content > li {
        display: block;
        height: 30px;
        line-height: 30px;
        background-color: #9af;
        padding: 0 20px;
        color: #333;
    }
    .my-tab-content > li + li {
        margin-top: 5px;
    }
</style>