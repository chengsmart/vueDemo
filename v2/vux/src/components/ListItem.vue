<template>
    <router-link :to="{ name: 'Detail', query: { skuId: info.id }}">
        <li class="item">{{info.title}}</li>
    </router-link>
</template>
<script>
    import {CellBox} from 'vux'
    import { getList } from '@/api/list'

    export default {
        name:'listItem',
        data() {
            return {
                info:this.obj
            }
        },
        props: {
            obj: {
                type: Object
            }
        },
        methods: {
//            queryList:function () {
//                getList()
//                    .then(data => {
//                        console.log(data);
//                        this.list.push(data)
//                    })
//            }
        },
        mounted:function () {
            console.log(this.info);
            console.log(this.obj);
        }
    }
</script>

<style scoped>
    .item {
        width: 100%;
        height: 44px;
        line-height: 44px;
        background-color: #aff;
        padding: 0 10px;
    }
    .item + .item { margin-top: 5px;}
</style>