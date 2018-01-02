<template>
    <div class="hello">
        <x-header :left-options="{backText:'返回'}" :title="title"></x-header>
        <form-preview :header-label="'商品名称'" :header-value="skuInfo.title" :body-items="infoLabel">
        </form-preview>
    </div>
</template>

<script>
    import {XHeader,FormPreview} from 'vux'
    import { querySkuInformation } from '@/api/detail'
    export default {
        name: 'Detail',
        data() {
            return {
                msg: '这是ID为',
                skuId: this.$route.query.skuId,
                back: '的商品',
                skuInfo:{},
                infoLabel:[]
            }
        },
        components: {XHeader,FormPreview},
        computed: {
            title(){
                return this.msg + this.skuId + this.back
            }
        },
        methods:{
            querySkuInfo (){
                querySkuInformation(this.skuId)
                    .then(data => {
                        this.skuInfo = data;
                        this.infoLabel = [{
                            label:'价格',
                            value:data.price
                        },{
                            label:'产地',
                            value:data.from
                        }]
                    })
            }
        },
        mounted() {
            this.querySkuInfo();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
