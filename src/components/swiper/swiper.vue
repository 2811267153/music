<template>
    <el-carousel trigger="click" height="200px">
      <el-carousel-item v-for="item in banner" :key="item.key">
        <img :src="item.pic" alt="">
      </el-carousel-item>
    </el-carousel>
</template>
<script>
// import swiperItem from './swiperItem'
export default {
  name: "swiper",
  data(){
    return{

    }
  },
  props: ['banner'],
  components: {
    // swiperItem
  }
}
</script>
<style scoped>

.el-carousel__item img{
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
</style>
