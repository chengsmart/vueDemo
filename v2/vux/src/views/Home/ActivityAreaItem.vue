<template>
    <div class="activity">
        <div class="activity-item" v-for="item in items" :key="item.link">
            <router-link :to="item.link">
                <img v-bind:src="item.images">
                <p class="activity-name h6">{{item.name}}</p>
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'activityItem',
        data() {
            return {}
        },
        props: {
            activityName: String,
            images: String,
            links: String,
            items: [Object,Array]
        },
        methods: {},
        mounted: function () {
        }
    }
</script>

<style lang="less" scoped>
    .activity {
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        box-sizing: border-box;
        width: 100%;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        background: #FDFDFD;
        border-radius: 20px 20px 0 0;
        margin-top: -25px;
        position: relative;
        overflow: hidden;
        padding-bottom: 13px;
        border-bottom: 1px solid #F5F5F5;
            .activity-item {
                display: -webkit-box;
                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                -webkit-justify-content: center;
                justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                -webkit-align-items: center;
                align-items: center;
                -webkit-box-flex: 1;
                -ms-flex: 1;
                -webkit-box-orient: vertical;
                -moz-box-orient: vertical;
                -ms-flex-direction: column;
                -webkit-flex-direction: column;
                text-align: center;
            img {
                width: 60px;
                margin:15px 0 2px;
            }

            .activity-name {
                color: #333;

            }
    }

    }


</style>
