<template>
  <div id="recommend">
    <div class="recommend" v-for="item in video" :key="item.key" @touchend='itemClick'>
      <img v-if="isShow" :src="item.data.coverUrl" alt="">
      <video controls :src="item.data.urlInfo.url" poster="posterimage.jpg">
      </video>
      <p>{{item.data.title}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "recommendInfo",
  data(){
    return{
      isShow: false
    }
  },
  props: ['video'],
  created() {
    //do something after creating vue instance
    console.log(this.video);
  },
  methods: {    
    isShow(){
      return this.isShow != this.isShow
    }
  },
  computed: {

  }
}
</script>
<style scoped>
#recommend{
  display: flex;
  width: calc(100% - 4%);
  margin: 2%;
  justify-content: space-between;
  flex-wrap: wrap;
}
.recommend{
  width: 48%;
  background-color: #fff;
  height: 20vh;
  margin-top: 2%;
  border-radius: 8px;
}
video{
  width: 100%;
  height: auto;
}

p{
  font-size: 0.9rem;
  width: calc(100% - 2%);
  margin: 0;
  display: -webkit-box;
  margin: 0 1%;
  height: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

</style>
