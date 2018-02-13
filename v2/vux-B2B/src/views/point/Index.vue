<template>
    <view-box body-padding-top="46px" body-padding-bottom="0">
        <tsl-header :left-options="{backText:''}" slot="header" class="tsl-vux" :title="title" color="light">
            <a slot="right">积分使用规则</a>
        </tsl-header>
        <div class="points-bg-color" slot="default">
            <div class="points-header text-center">
                <div class="content-position">
                    <h1>{{totalPoints}}</h1>
                    <div class="points-explain-img">当前可用积分</div>
                </div>
            </div>
            <div class="points-applied-details">
                <h5>积分使用明细</h5>
                <img src="@/assets/images/img_drop_down.png" alt="">
            </div>
            <div class="points-details-list" v-if="pointsData.length > 0">
                <tsl-info-details :listData="pointsData"></tsl-info-details>
            </div>
            <div class="points-details-empty" v-else>
                抱歉暂无数据
            </div>
        </div>
    </view-box>
</template>

<script>
    import {ViewBox} from 'vux';
    import { queryPointsList } from '@/api/point'

    import TslHeader from '@/components/tsl-header/TslHeader';
    import TslInfoDetails from '@/views/point/InfoDetails'

    export default {
        name: 'List',
        data() {
            return {
                title: '我的积分',
                totalPoints:'899',
                pointsData:[
                    {
                        'titleName': '交易获得',
                        'orderNumber': 'B2B2017119867543',
                        'time':'2017-11-14 13:30:00',
                        'point': '+10'
                    },
                    {
                        'titleName': '活动兑换使用',
                        'orderNumber': 'B2B2017119867543',
                        'time':'2018-10-14 13:30:00',
                        'point': '-130'
                    },
                    {
                        'titleName': '买赠活动交易获得',
                        'orderNumber': 'B2B2017119867543',
                        'time':'2018-10-11 12:00:00',
                        'point': '+301'
                    },
                    {
                        'titleName': '交易获得',
                        'orderNumber': 'B2B2017119867543',
                        'time':'2018-10-12 10:10:00',
                        'point': '+50'
                    },
                    {
                        'titleName': '交易获得',
                        'orderNumber': 'B2B11111111111111',
                        'time':'2018-11-02 20:10:00',
                        'point': '-10'
                    }
                ]
            }
        },
        components: {ViewBox, TslHeader,TslInfoDetails},
        methods: {

        },
        mounted() {
            // queryPointsList()
            //     .then(res => {
            //         let resData = res.data;
            //         this.totalPoints = resData.totalPoints ? resData.totalPoints : 0;
            //         this.pointsData = resData.pointData;
            //     })
            //     .catch(error => {
            //     })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    @import '~@/assets/styles/variable.less';
    @points-explain-contents: #D4D4D4;
    @points-border-color: #eeeeee;

    .points-bg-color{
        background-color: @tsl-color-white;
        .points-header {
            background: url("~@/assets/images/img_points_header.png") no-repeat;
            width: 100%;
            height: 173px;
            -webkit-background-size: 100% 100%;
            background-size: 100% 100%;
            .content-position {
                /*margin: 37px auto 0 auto;*/
                position: relative;
                top: 37px;
                h1 {
                    color: @tsl-color-white;
                    font-size: @tsl-font-points;
                }
                span {
                    color: @points-explain-contents;
                    font-size: @tsl-font-h6;
                }
                .points-explain-img {
                    background: url("~@/assets/images/img_points_explain_bg.png") no-repeat;
                    -webkit-background-size: cover;
                    background-size: cover;
                    display: inline-block;
                    line-height: 22px;
                    font-size: @tsl-font-h6;
                    width: 90px;
                    height: 24px;
                    color: @points-explain-contents;
                    margin-top: 8px;
                }
            }
        }
        .text-center {
            text-align: center;
        }
        .points-applied-details {
            text-align: center;
            padding-top: 10px;
            img {
                width:15px;
                height: auto;
                padding: 4px 0;
            }
        }
        .points-details-list {
            border-top: 1px solid @points-border-color
        }
    }
</style>
