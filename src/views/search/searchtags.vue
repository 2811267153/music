<template>
  <div id="search-tags">
    <span>音乐专区</span>
    <div class="tags-info">
      <div class="tags-item" v-for="(ele, index) in tags" @click="getTagsAbouts(index)" :key="ele.id">
        <span>{{ ele.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getTags, getTagsAbout } from "../../network/search.js";
export default {
  name: "searchTags",
  data() {
    return {
      tags: [],
      currentIndexTags: '',
      playListTrack: []
    };
  },
  created() {
    this.getTags();
  },
  methods: {
    getTags() {
      getTags().then((res) => {
        this.tags = res.data.tags;
        console.log(this.tags);
      });
    },
    getTagsAbouts(index){
      getTagsAbout(this.tags[index].id).then(res => {
        console.log('res', res);
        this.playListTrack = res.data
        console.log(this.playListTrack);
      })
    }
  },
  components: {},
};
</script>

<style scoped>
#search-tags {
  padding: 5% 0;
  width: 100%;
}
.tags-info {
  margin-top: 2%;

  padding: 2% 0;
  background-color: #fff;
  height: 100%;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.tags-item {
  width: 48%;
  text-align: center;
  border-radius: 8px;
  background-color: #4c83ff;
  margin: 1% 0;
  height: 50px;
  line-height: 50px;
}
</style>
