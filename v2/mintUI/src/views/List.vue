<template>
    <div class="list has-navbar">
        <mt-header fixed :title="title">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-button icon="success" @click="addItem()">添加</mt-button>
        <mt-button icon="field-warning" @click="cleanAll()">清除</mt-button>
        <transition-group name="bounceUp">
            <mt-cell :title="item" v-for="item in personList" class="item" v-bind:key="item"></mt-cell>
        </transition-group>
    </div>
</template>

<script>
    export default {
        name: 'list',
        data () {
            return {
                title: '第三页：列表页面',
                username:'',
                personList:[]
            }
        },
        methods:{
            addItem:function () {
                !this.username && this.$toast({
                    message: '填写姓名',
                    position: 'middle',
                    duration: 5000
                })
                this.username && this.personList.push(this.username);this.username = '';
            },
            cleanAll:function () {
                this.personList = [];
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item { background-color: #d0e0f0; border-top:1px solid #fff; border-bottom:1px solid #fff;}
</style>
