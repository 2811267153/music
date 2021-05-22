<template>
  <div id="player">
    <div class="title">
      <div class="title-item iconfont icon-arrow-left" @click="goBlack()"></div>
      <div class="title-item center">{{ this.$store.state.songList.name }}</div>
      <div class="title-item"></div>
    </div>
    <div class="song-img">
      <img class="rotate-center " :src="this.$store.state.imgUrl" alt="" />
      <div class="lyrics">
        <div class="lyrics-item" ref="lyric" :style="{transform: transfrom}">
          <div
            ref="lyrics"
            v-for="(lrcItem, index) in lyricArr"
            @dblclick="selectMusicProgress(lrcItem.time)"
            :class="{ active: index === currentLyricIndex }"
            :key="index"
          >
            {{ lrcItem.lyc }}
          </div>
        </div>
      </div>
    </div>

    <div class="nav">
      <span class="iconfont icon-ziyuan"></span
      ><span class="iconfont icon-tinghouwenda"></span
      ><span class="iconfont icon-fenxiang"></span>
    </div>
    <div class="controller">
      <div class="controller-progress" ref="controllerProgress">
        <div ref="progress" class="progress" :style="{ width: offserWidth }">
          <div></div>
        </div>
      </div>
      <audio
        ref="audio"
        :src="this.$store.state.sUrl"
        @timeupdate="playing"
      ></audio>
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
      play: "",
      currentTimes: 0,
      duration: "",
      currentSong: "",
      offserWidth: "",
      currentLyricIndex: "",
      lrcTime: "",
      offsetTop: "0px",
      transfrom: ''
    };
  },
  created() {
    this.id = this.$store.state.songList.id;
    this.getLyrics(this.id); //获取歌词
  },
  mounted() {
    this.play = this.$refs.audio.pause();
    setTimeout(() => {}, 1000);
  },
  methods: {
    playing(e) {
      // console.log(e.target.currentTime, "aa"); // // 根据event事件对象获取 audio元素, 在通过currentTime属性获取audio的播放时间
      let now = e.target.currentTime;

      //遍历所有歌词 与 现在的播放时间对比
      for (let i = 0; i < this.lyric.length; i++) {
        // 如果已经便利到 最后 ， 那么 直接 最后一条高亮

        if (i === this.lyric.length - 1) {
          this.currentLyricIndex = i;
          break;
        }
        this.lrcTime = this.lyricArr[i].time;
        //获取 下一条 个去播放时间
        let nextTime = this.lyricArr[i + 1].time;
        // 当前媒体播放时间大于等于本条歌词播放时间, 并且小于下一条歌词的播放时间
        if (now >= this.lrcTime && now < nextTime) {
          // console.log('赏花');
          this.currentLyricIndex = i;
          if (i > 1) {
            this.transfrom = `translateY(${40 - (18 * (i + 1))}px)`
            console.log(this.transfrom );
          }else{
            this.transfrom = `translateY(${0}px)`
          }
          break;
        }
      }
    },

    itemClick() {
      this.play ? this.$refs.audio.play() : this.$refs.audio.pause();
      this.play = !this.play;

      this.duration = parseInt(this.$refs.audio.duration); //获取 歌曲总时长
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
  computed: {
    lyricArr() {
      let arr = this.lyric.split(/\n/);
      // 正则组匹配
      return arr.map((l) => {
        // "[01:00.125] 歌词"
        // 正则小括号组匹配,如果正则与字符串匹配成功
        // RegExp就可以通过$n属性,获取正则表达式中对应组匹配的文本
        /\[(\d+):(\d+\.\d+)\](.+)/.test(l);
        // console.log(RegExp.$1, RegExp.$2, RegExp.$3)
        return {
          time: parseInt(RegExp.$1) * 60 + parseFloat(RegExp.$2),
          lyc: RegExp.$3,
        };
      });
    },
  },

  watch: {
    play(old) {
      let that = this;
      if (old == false) {
        that.getCurrentTimes = setInterval(() => {
          // console.log(parseInt(that.$refs.audio.currentTime));
          that.currentTimes = parseInt(that.$refs.audio.currentTime);
        }, 1000);
      } else {
        clearTimeout(that.getCurrentTimes);
      }
    },

    currentTimes(old) {
      this.offserWidth = (this.currentTimes / this.duration) * 100 + "%";
      if (old == this.duration) {
        this.play = true;
      }
    },
    id(old){
      this.getLyrics(old)
    }
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
  height: 18vh;
  position: absolute;
  font-size: 1rem;
  letter-spacing: 0.6px;
  bottom: 0px;
  width: 100%;
  overflow: hidden;
}
.lyrics-item{
  transition: all .2s;
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
.active {
  color: #4c83ff;
  font-size: 1.2rem;
  margin: 2%, 0;
  padding: 5%, 0;
}
</style>
