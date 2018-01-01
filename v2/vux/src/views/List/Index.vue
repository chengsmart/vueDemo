<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <ul>
            <list-item :obj="item" v-for="item in list"></list-item>
        </ul>
    </div>
</template>

<script>
    import listItem from '../../components/ListItem'
    import {Group} from 'vux'
    import { getList } from '@/api/list'

    export default {
        name: 'List',
        data() {
            return {
                msg: '列表页面',
                list:[]
            }
        },
        components: {listItem,Group},
        methods: {
            queryList:function () {
                getList()
                    .then(data => {
                        console.log(data);
//                        this.list = data;
                        data.map(item => {
                            this.list.push(item)
                        })
//                        Array.prototype.push.apply(this.list,data);
//                        console.log(this.list);
                    })
            }
        },
        mounted() {
            this.queryList();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
</style>
