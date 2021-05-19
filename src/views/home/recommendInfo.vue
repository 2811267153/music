<template>
  <div id="recommend">
    <div class="recommend" v-for="(item, index) in video" :key="item.key" @touchend='isShows(index)'>
      <img v-show="isShow" v-lazy="item.data.coverUrl" alt="">
      <video ref="video" v-show="!isShow" :src="item.data.urlInfo.url">
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
        isShow: true,
        isPlay: false,
    }
  },
  props: ['video'],
  created() {
  },
  methods: {
    isShows(index){
      let that = this
      if(this.isPlay == true){
        that.isPlay = false
        that.$refs.video[index].play()
      }else{
        that.$refs.video[index].pause()
        that.isPlay = true
      }
      // if(this.isPlay){
      //   !this.isPlay
      // }
      return this.isShow = false
    }
  },
  computed: {

  },
  mounted() {
    //do something after mounting vue instance
  }
}
</script>
<style scoped>
#recommend{
  display: flex;
  margin: 2%;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0px 2%;
  background-color: #fff;
  border-radius: 8px;
}
.recommend{
  width: 48%;
  height: 20vh;
  margin-top: 2%;
  border-radius: 8px;
  overflow: hidden;
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
img{
  width: 100%;
  border-radius: 0px;
  border-radius: 8px;
}
img[lazy=loading] {
  background-color: blue;
 }
</style>
