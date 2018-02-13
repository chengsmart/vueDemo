<template>
        <view-box body-padding-top="46px" body-padding-bottom="0">
            <tsl-header :left-options="{backText:''}" slot="header" class="tsl-vux" :title="title" color="light">
            </tsl-header>
            <div slot="default">
                <div v-if="type === 'c'">
                    <to-c-address></to-c-address>
                </div>
                <div v-else-if="type === 'e'">
                    <to-b-address></to-b-address>
                </div>
            </div>
        </view-box>
</template>

<script>
    import {ViewBox} from 'vux';
    import TslHeader from '@/components/tsl-header/TslHeader';
    import toCAddress from '@/views/address/childComponents/ToCDeliveryAddress';
    import toBAddress from '@/views/address/childComponents/ToBDeliveryAddress';

    export default {
        name: 'add-address',
        data(){
            return{
                title:'',
                type:''
            }
        },
        components: {ViewBox, TslHeader,toCAddress,toBAddress},
        methods:{

        },
        mounted(){
            if(this.$route.query.type === 'create'){
                this.title = '新增收货地址';
                this.type = 'c';
            }else if(this.$route.query.type === 'edit'){
                this.title = '编辑收货地址'
                this.type = 'e';
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
