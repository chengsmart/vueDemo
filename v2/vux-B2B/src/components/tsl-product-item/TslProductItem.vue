<template>
    <div class="item">
        <router-link :to="links">
            <div class="inner">
                <div class="images">
                    <img :src="images">
                </div>
                <h6 class="keep-twoline">{{skuName}}</h6>
                <p class="price">¥ {{price}}</p>
                <slot name="oldPrice"></slot>
            </div>
        </router-link>
    </div>
</template>
<script>
    import {CellBox} from 'vux'

    export default {
        name: 'tsl-product-item',
        data() {
            return {
                info: ''
            }
        },
        props: {
            skuId: [String, Number],
            skuName: String,
            price: String,
            images: String,
            links: String,
        },
        methods: {},
        mounted: function () {
        }
    }
</script>

<style lang="less" scoped>
    @import '~@/assets/styles/variable.less';
    .item {
        width: 50%;
        padding: 0 2px;
        float: left;
        margin-bottom: 4px;
        .tsl-utils-box-sizing(border-box);
        .inner {
            padding: 5px 10px;
            background-color: #fff;
            color: #333;
            .images {
                width:100%;
                height:0;
                padding-bottom: 100%;
                position:relative;
                img {
                    width:100%;
                    height:100%;
                    position:absolute;
                }
            }
            .price {
                color: @tsl-color-price;
            }
        }
    }
</style>