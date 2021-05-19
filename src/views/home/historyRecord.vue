<template>
  <div id="historyRecord">
    <h3>最近在听</h3>
    <div class="song" v-if="listenMusicHistury.length != 0">
      <div class="song-info" v-for="elem in listenMusicHistury" :key="elem.key">
        <span>{{elem.song.name}}</span>
        <span>{{elem.song.ar[0].name}}</span>
        <span class="iconfont icon-bofang iconfonts"></span>
      </div>
    </div>
    <div class="song" v-else>
      <span>登录后 可同步你的听歌历史噢</span>
      <img v-lazy="imgURL[currentImgIndex]" />
    </div>
  </div>
</template>
<script>
export default {
  name: "historyRecord",
  data() {
    return {
      imgURL: [
        "https://files.catbox.moe/rhm233.svg",
        "https://files.catbox.moe/bz5cho.svg",
        "https://files.catbox.moe/jmg2ik.svg",
        "https://files.catbox.moe/hv0mgf.svg",
        "https://files.catbox.moe/ssg0x6.svg",
        "https://files.catbox.moe/c196gr.svg",
        "https://files.catbox.moe/nicqsy.svg",
        "https://files.catbox.moe/bz5cho.svg",
        "https://files.catbox.moe/mn9ehj.svg",
      ],
      currentImgIndex: '',
    };
  },
  props: ['listenMusicHistury'],
  created() {
    function GetRandomNum(Min, Max) {
      var Range = Max - Min;
      var Rand = Math.random();
      return Min + Math.round(Rand * Range);
    }
    var num = GetRandomNum(0, this.imgURL.length);
    this.currentImgIndex = num - 1
  },
};
</script>
<style scoped>
#historyRecord {
  background-color: #fff;
  width: calc(100% - 5%);
  /* height: 200px; */
  border-radius: 8px;
  margin: 0 2%;
  /* padding: 0 2%; */
}
.song {
  text-align: center;
  /* line-height:  */
  margin: 2%;
  /* width: 100%; */
  padding: 2% 0;
  font-size: 14px;
}
h3 {
  font-weight: 400;
  padding: 2%;
  border-bottom: 1px solid #ccc;
  padding-right: 2%;
  padding-top: 4%;
  margin: 0;
}
.song-info{
  display: flex;
  text-align: left;
  padding: 10px 2%;
  border: 1px solid #f1f1f1;
  border-radius: 8px;
  margin: 2% 0;
  /* padding: 0 2%; */
}
.song-info span{
  width: 100%;
}
.iconfonts{
  width: 5% !important;
}
</style>
