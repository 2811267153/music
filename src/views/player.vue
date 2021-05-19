<template>
  <div id="player">
    <div class="title">
      <div class="title-item iconfont icon-arrow-left" @click="goBlack()"></div>
      <div class="title-item center">{{ this.$store.state.songList.name }}</div>
      <div class="title-item"></div>
    </div>
    <div class="song-img">
      <img class="rotate-center " :src="this.$store.state.imgUrl" alt="" />
      <div class="lyrics"></div>
    </div>

    <div class="nav">
      <span class="iconfont icon-ziyuan"></span
      ><span class="iconfont icon-tinghouwenda"></span
      ><span class="iconfont icon-fenxiang"></span>
    </div>
    <div class="controller">
      <div class="controller-progress" ref="controllerProgress" >
        <div ref="progress" class="progress" :style="{width: offserWidth}"><div></div></div>
      </div>
      <audio ref="audio" :src="this.$store.state.sUrl"></audio>
      <div class="controller-item">
        <i class="iconfont icon-shangyishou-yuanshijituantubiao"></i>
      </div>
      <div class="controller-item center" @click="itemClick">
        <i :class="[play ? 'iconfont icon-bofang' : 'iconfont icon-zanting']">
        </i>
      </div>
      <div class="controller-item">
        <i class="iconfont icon-xiayishou-yuanshijituantubiao"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { getLyrics } from "../network/search";
export default {
  name: "player",
  data() {
    return {
      id: "",
      lyric: "",
      play: false,
      currentTimes: 0,
      duration: "",
      currentSong: "",
      offserWidth: ''
    };
  },
  created() {
    this.id = this.$store.state.songList.id;
    // this.getLyrics(this.id); //获取歌词
  },

  methods: {
    itemClick() {
      this.play ? this.$refs.audio.play() : this.$refs.audio.pause();
      this.play = !this.play;
    console.log(parseInt(this.$refs.audio.duration));
      // console.log(this.$refs.audio.currentTime);
      // console.log(this.currentTime);
      // this.$refs.controllerProgress.style.width = `${(this.currentTime / this.duration) * 100}%` + 'px'
    },

    goBlack() {
      this.$router.go(-1);
    },

    getLyrics(id) {
      getLyrics(id).then((res) => {
        // console.log(res);
        this.lyric = res.data.lrc.lyric;
        // console.log(this.lyric);
      });
    },
  },
  watch: {
    play(old, newPlay) {
      let that = this;
      if (newPlay == true) {
        that.getCurrentTimes = setInterval(() => {
          // console.log(parseInt(that.$refs.audio.currentTime));
          that.currentTimes = parseInt(that.$refs.audio.currentTime);
        }, 1000);
      } else {
        clearTimeout(that.getCurrentTimes);
      }
    },

    currentTimes(old) {
      this.offserWidth = (old - this.duration) / 1 + '%'
      console.log(old, this.offserWidth);
    },
  },
};
</script>

<style scoped>
#player {
  width: calc(100% - 4%);
  height: 100vh;
  z-index: 7;
  overflow: hidden;
  background-color: #fff;
  position: relative;
  padding: 2%;
}
.title {
  height: 50px;
  width: 100%;
  display: flex;
  text-align: center;
  line-height: 50px;
  font-size: 1.2rem;
}
.title-item {
  flex: 1;
}
.center {
  flex: 5;
}
.iconfont {
  font-size: 1.4rem;
}
.song-img {
  width: 100%;
  height: 70vh;
  text-align: center;
  position: relative;
}
.song-img img {
  width: 70%;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
  margin-top: 20vh;
}
.lyrics {
  height: 20vh;
  position: absolute;
  bottom: 0px;
  width: 100%;
}
.nav {
  display: flex;
}
.nav .iconfont {
  flex: 1;
  text-align: center;
  padding: 3% 0;
}
.controller {
  height: 20vh;
  /* background-color: #ff3400; */
}
.controller-progress {
  margin: 0 2.5%;
  margin-top: 5%;
  width: 95%;
  height: 2%;
  /* padding: 0 2.5%; */
  border-radius: 10px;
  background-color: #4c83ff;
}
.progress {
  position: relative;
  width: 1%;
  height: 100%;
  background-color: red;
}
.progress div {
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translate(-0px, -50%);
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: red;
}
.controller-item {
  float: left;
  height: 10vh;
  text-align: center;
  line-height: 10vh;
  font-size: 2rem;
  width: 33%;
}
.controller-item .iconfont {
  font-size: 2rem;
}
.center {
  font-size: 20px;
}

.rotate-center {
  -webkit-animation: rotate-center;
  animation: rotate-center;
}

@-webkit-keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
