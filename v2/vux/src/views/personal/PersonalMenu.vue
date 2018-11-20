<template>
    <ul class="personal-menu">
        <li class="column" v-for="item in menu" :key="item.link">
            <router-link :to="item.link">
                <img v-bind:src="item.icon">
                <span class="h6">{{item.name}}</span>
            </router-link>
        </li>
    </ul>
</template>
<script>
    import {CellBox} from 'vux'

    export default {
        name: 'listItem',
        data() {
            return {
                info: ''
            }
        },
        props: {
            menu: [Object,Array]
        },
        methods: {},
        mounted: function () {
        }
    }
</script>

<style lang="less" scoped>

    .personal-menu {
        background-color: #fff;
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
        .column { display: -webkit-box; display: -ms-flexbox; display: -webkit-flex; display: flex; flex-direction: column; box-sizing: border-box; width: 100%; height: 100%; -webkit-box-pack: center; -ms-flex-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -ms-flex-align: center; -webkit-align-items: center; align-items: center; -webkit-box-flex: 1; -ms-flex: 1; -webkit-box-orient: vertical; -moz-box-orient: vertical; -ms-flex-direction: column; -webkit-flex-direction: column;
            text-align: center;
            padding: 15px 0 10px;
            img { width: 44px; height: 30px; margin: 0 auto 3px; display: block;}
            .h6 { color: #666;}
        }
    }
</style>