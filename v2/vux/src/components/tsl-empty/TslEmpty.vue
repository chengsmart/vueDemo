<template>
    <div class="empty">
        <img :src="active">
        <h4>{{activeText}}</h4>
    </div>
</template>

<script>

    export default {
        name: 'tsl-empty',
        data() {
            return {
                placeholders:[
                    require('@/assets/images/bg_empty_cart.png'),
                    require('@/assets/images/bg_empty_coupon.png'),
                    require('@/assets/images/bg_empty_order.png'),
                    require('@/assets/images/bg_empty_search.png')
                ],
                active: '',
                activeText:'asdasd'
            }
        },
        mounted(){
            if(this.$route.path == '/cart'){
                // 购物车页面为空
                this.active = this.placeholders[0];
                this.activeText = '购物车是空的~';
            }else if(this.$route.path == '/coupon'){
                // 优惠券页面为空
                this.active = this.placeholders[1];
                this.activeText = '暂无优惠券';
            }else if(this.$route.path == '/login'){
                //TODO 订单页面为空
                this.active = this.placeholders[2];
                this.activeText = '暂无订单';
            }else{
                // 搜索页面为空
                this.active = this.placeholders[3];
                this.activeText = '没有搜到您要找的商品';
            }
        }
    }
</script>

<style lang="less">
    .empty {
        padding-top: 100px;
        img { display: block;width: 104px; height: auto; margin: 0 auto;}
        h4{ color: #a5a5a5; text-align: center; margin-top: 25px;}
    }
</style>
