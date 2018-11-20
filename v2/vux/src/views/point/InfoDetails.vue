<template>
    <div>
        <div class="detail-item" v-for="item in listData" :key="item.id">
            <div class="item-desc">
                <h5>{{item.titleName}}</h5>
                <p class="number">{{item.orderNumber}}</p>
                <p class="time">{{item.time}}</p>
            </div>
            <div class="item-point" :class="{ 'point-red': (Number(item.point)>0), 'point-green': !(Number(item.point)>0) }">
                {{item.point}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'infoDetails',
        data() {
            return {
            }
        },
        props: ['listData'],
        mounted() {
        }
    }
</script>

<style lang="less" scoped>
    @import '~@/assets/styles/variable.less';
    @points-border-color: #eeeeee;
    .detail-item {
        padding: 10px 13px;
        /*height: 60px;*/
        position: relative;
        border-bottom: 1px solid @points-border-color;
        .item-desc {
            padding-right: 100px;
            /*float: left;*/
            .number {
                font-size: 13px;
            }
            .time {
                font-size: 10px;
                color: #999999;
                line-height: 20px;
            }
        }
        .item-point {
            /*float: right;*/
            font-size: 20px;
            position: absolute;
            top:50%;
            right: 15px;
            transform:translateY(-50%);
            -ms-transform:translateY(-50%);
            -moz-transform:translateY(-50%);
            -webkit-transform:translateY(-50%);
            -o-transform:translateY(-50%);
        }
        .point-red {
            color: #FE4365;
        }
        .point-green {
            color: #3C9401;
        }
    }
</style>
