<template>
  <div id="paid-albums">
    <div class="paidAlbums" v-if="paidAlbums.length != 0 " >
      <div class="paidAlbums-info" v-for="item in paidAlbums" :key="item.key">
      </div>
    </div>
    <div class="paidAlbums-info" v-else>
      <span>你好像还没购买专辑吧</span>
      <img src="https://files.catbox.moe/jmg2ik.svg" alt="">
      <div class="">
        需要去购买吗？
      </div>
    </div>
    <span>已经没有内容了</span>
  </div>
</template>

<script>
export default {
  name: "",
  data(){
    return{}
  },
  props: ['paidAlbums']
}
</script>

<style scoped>
#paid-albums{
  margin-top: 10px;
}
.paidAlbums-info{
  height: 20vh;
  background-color: #fff;
  width: calc(100% - 5%);
  padding-top: 15%;
  text-align: center;
  border-radius: 8px;

  margin: 0 auto;
}
#paid-albums > span{
  margin-top: 2%;
  width: calc(100% - 5%);
  text-align: center;
  padding-bottom: 10px;
  display: inline-block;
}
.paidAlbums-info img{
  width: 14%;
}
</style>
