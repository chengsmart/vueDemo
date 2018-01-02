<template>
    <div class="hello">
        <x-header :left-options="{backText:'返回'}" :title="msg"></x-header>
        <ul>
            <list-item :obj="item" v-for="item in list"></list-item>
        </ul>
    </div>
</template>

<script>
    import listItem from '../../components/ListItem'
    import {Group, XHeader} from 'vux'
    import { getList } from '@/api/list'

    export default {
        name: 'List',
        data() {
            return {
                msg: '列表页面',
                list:[]
            }
        },
        components: {listItem,Group,XHeader},
        methods: {
            queryList () {
                getList()
                    .then(data => {
                        data.map(item => {
                            this.list.push(item)
                        })
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
