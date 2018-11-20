<template>
  <div class="item">
    <router-link :to="links">
      <img :src="images" alt="">
      <h1>{{skuName}}</h1>
      <div>{{skuId}}</div>
      <div>{{price}}</div>
      <slot name="oldPrice"></slot>
    </router-link>
  </div>
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

<style scoped>
  .item {
    width: 50%;
    float: left;
  }
</style>
