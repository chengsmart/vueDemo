<template>
    <div class="hello">
        <x-header :left-options="{backText:'返回'}" :title="msg"></x-header>
        <button-tab>
            <button-tab-item
                    v-for="(item, index) in tabList"
                    :key="'h' + index"
                    :selected="item.active"
                    @on-item-click="change(index)">{{item.title}}
            </button-tab-item>
        </button-tab>
        <my-tab-content :item-id="reqId" v-if="reqId" @listenChild="showMessage"></my-tab-content>
        <h1>{{message}}</h1>
    </div>
</template>

<script>
    import myTabContent from '@/components/TabContent'
    import {XHeader, ButtonTab, ButtonTabItem} from 'vux'
    import { getTabList } from '@/api/tab'

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
                }],
                reqId : '',
                message:''
            }
        },
        components: {myTabContent,XHeader,ButtonTab, ButtonTabItem},
        methods: {
            change (index = 0) {
                // 全部置空
                this.tabList.map(item => {
                    item.active = false
                });
                // 设置活跃标签页
                this.tabList[index].active = true;
                // 获取数据
                this.reqId = String(index + 1);
                console.log(this.reqId);
            },
            showMessage(data){
                this.message = data;
            }
        },
        mounted() {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
