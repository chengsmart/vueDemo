<template>
    <div class="hello">
        <h1>{{ title }}</h1>
        <small>待开发</small>
    </div>
</template>

<script>
    export default {
        name: 'Detail',
        data() {
            return {
                msg: '这是ID为',
                skuId: this.$route.query.skuId,
                back: '的商品'
            }
        },
        computed: {
            title(){
                return this.msg + this.skuId + this.back
            }
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
