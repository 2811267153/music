<template>
  <div class="play-list">
    <span>{{ this.$store.state.user[1].nickname }}的歌单 (๑*◡*๑)</span>
    <div v-for="item in favPlay" :key="item">
      <div class="play-list-item">
        <img :src="item.coverImgUrl" alt="" />
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { getFacPlayList } from "../../network/user.js";
export default {
  name: "favPlayList",
  data() {
    return {
      uid: "",
      favPlay: [],
    };
  },

  mounted() {
    this.uid = this.$store.state.user[0].id;
    console.log(this.uid);
    this.getFacPlayList(this.uid);
  },
  methods: {
    getFacPlayList(uid) {
      getFacPlayList(uid).then((res) => {
        console.log(res);
        this.favPlay = res.data.playlist;
        console.log(this.favPlay);
      });
    },
  },
};
</script>

<style scoped>
.play-list {
  background-image: linear-gradient(135deg, #abdcff 10%, #0396ff 100%);
  width: calc(100% - 4%);
  /* height: 20vh; */
  padding: 2%;
  border-radius: 8px;
}
.play-list > span {
  display: block;
  padding-bottom: 2%;
  margin: 2% 0;
}
.play-list-item {
  height: 8vh;
  line-height: 8vh;
  padding-left: 2%;
  border-radius: 8px;
  margin-top: 2%;
  padding: 2%;
}
.play-list-item img {
  width: 7vh;
  vertical-align: middle;
  border-radius: 8px;
}
</style>
