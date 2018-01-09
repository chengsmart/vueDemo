<template>
    <div class="hello">
        <x-header :left-options="{backText:'返回'}" :title="msg"></x-header>
        <button-tab>
            <button-tab-item
                    v-for="(item, index) in tabList"
                    :key="'h' + index"
                    :selected="item.active"
                    @on-item-click="search(index)">{{item.title}}
            </button-tab-item>
        </button-tab>
        <ul class="my-tab-content"
            v-for="(item, index) in tabList"
            :key="'c' + index"
            v-if="item.active">
            <li> ID : {{item.data.id}}</li>
            <li> 标题 : {{item.data.title}}</li>
            <li> 时间 : {{item.data.createAt | timestampDateFilter}}</li>
            <li> 作者 : {{item.data.createBy}}</li>
        </ul>
        <h1
                v-for="(item, index) in tabList"
                :key="'key' + index"
                v-if="item.active">当前活跃标签页为{{index + 1}}</h1>
    </div>
</template>

<script>
    import {XHeader, ButtonTab, ButtonTabItem} from 'vux'
    import { getTabList } from '@/api/tab'
    import { timestampDateFilter } from '@/filters/index'

    export default {
        name: 'Tab',
        data() {
            return {
                msg: 'tab页面',
                tabList: [{
                    title:'标签页1',
                    data:[],
                    active:false
                },{
                    title:'标签页2',
                    data:[],
                    active:false
                },{
                    title:'标签页3',
                    data:[],
                    active:false
                }]
            }
        },
        components: {XHeader,ButtonTab, ButtonTabItem},
        methods: {
            search (index = 0) {
                // 全部置空
                this.tabList.map(item=>{
                    item.active = false
                });
                // 设置活跃标签页
                this.tabList[index].active = true;
                // 获取数据
                getTabList( index + 1)
                    .then(data => {
                        this.tabList[index].data = data;
                    })
            }
        },
        filters:{
            timestampDateFilter
        },
        mounted() {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
