<template>
  <div id="main">
    <div class="about-main">
      <div class="bar"></div>
      <div class="bar">
        <div class="left">
          <img :src="this.$store.state.user[1].avatarUrl" alt="" />
          <span>{{ this.$store.state.user[1].nickname }}</span>
        </div>
        <span><i class="iconfont icon-youjiantou"></i></span>
      </div>
    </div>
    <div class="shortcut">
      <div class="shortcut-item"><i class="iconfont icon-yinyue"></i></div>
      <div class="shortcut-item"><i class="iconfont icon-shoucang"></i></div>
      <div class="shortcut-item"><i class="iconfont icon-bofanglishi"></i></div>
    </div>

    <favPlayList></favPlayList>
    <favor></favor>
    <rec></rec>
  </div>
</template>

<script>
import favor from './favor'
import favPlayList from './favPllayList'
import rec from './rec'
export default {
  name: "mainUesr",
  data() {
    return {
      uid: "",
      favPlay: []
    };
  },

  components: {
      favPlayList,
      favor,
      rec
  }
};
</script>

<style scoped>
#main {
  width: calc(100% - 4%);
  /* background: pink; */
  height: calc(100vh - 60px);
  margin: 0px auto;
}
.bar {
  display: flex;
  width: 100%;
  height: 10vh;
  justify-content: space-between;
  line-height: 10vh;
}
.bar img {
  height: 90%;
  padding: 1%;
  padding-left: 0;
  vertical-align: middle;
  border-radius: 50px;
}
.bar span {
  line-height: -1%;
  margin-left: 3%;
}
.left {
  width: 60%;
  display: inline-block;
}
.shortcut {
  width: 100%;
  /* background: pink; */
  height: calc(10vh);
  margin: 4% auto;
  border-radius: 8px;
  background-image: linear-gradient(135deg, #abdcff 10%, #0396ff 100%);

  display: flex;
  justify-content: space-around;

  /* position: absolute; */
}
.shortcut-item {
  width: 20%;
  height: 5vh;
  background-color: red;
  position: relative;
  left: 0%;
  top: 50%;
  transform: translate(0%, -50%);
  text-align: center;
  line-height: 5vh;
  border-radius: 8px;
  background-color: #fff;
}
</style>
