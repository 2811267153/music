<template>
  <div id="historyRecord">
    <h3>最近在听</h3>
    <div class="song" v-if="listenMusicHistury.length != 0">
      <a href="#">
        <span>{{listenMusicHistury[0].name}}</span>
        <span>{{listenMusicHistury[0].id}}</span>
      </a>
    </div>
    <div class="song" v-else>
      <span>ennn， 你还没听歌呢</span>
      <img :src="imgURL[currentImgIndex]" />
    </div>
  </div>
</template>
<script>
export default {
  name: "historyRecord",
  data() {
    return {
      listenMusicHistury: [
        {id: 12787288, imgpic: 'https://files.catbox.moe/rhm233.svg', name: '测试'},
      ],
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
  props: {
    recmmengSong: Object,
  },
  created() {
    console.log(this.listenMusicHistury);
    function GetRandomNum(Min, Max) {
      var Range = Max - Min;
      var Rand = Math.random();
      return Min + Math.round(Rand * Range);
    }
    var num = GetRandomNum(0, this.imgURL.length);
    this.currentImgIndex = num - 1
    console.log(this.currentImgIndex);
  },
};
</script>
<style scoped>
#historyRecord {
  background-color: #fff;
  width: calc(100% - 4%);
  height: 200px;
  border-radius: 8px;
  margin: 0 2%;
  /* padding: 0 2%; */
}
.song {
  text-align: center;
  /* line-height:  */
  margin: 2%;
  /* width: 100%; */
  padding: 4% 0;
}
h3 {
  font-weight: 400;
  padding: 2%;
  border-bottom: 1px solid #ccc;
  padding-right: 2%;
  padding-top: 4%;
  margin: 0;
}
</style>
