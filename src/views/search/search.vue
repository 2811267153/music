<template>
  <div id="search">
    <div class="search">
      <input
        type="text"
        id="searchInput"
        v-model="msg"
        autocomplete="off"
        name="search"
        placeholder="想听点什么？"
      />
      <button class="iconfont icon-sousuo" @click="getSearch"></button>
      <div ref="input" class="input-autocomplete  animate__animated  animate__fadeInDownBig" v-show="msg != 0">
        <div class="autocomplete-info" v-for="(ele, index) in songList" :key="ele.id" @touchstart="itemClick(index)" >{{ele.name }}  — {{ ele.artists[0].name}}</div>
      </div>
    </div>
    <search-rec></search-rec>
    <search-tags></search-tags>
  </div>
</template>
<script>
import { getSearchSuggest, getMusicUrl, getAlbumImg, getSearchKey} from "../../network/search";

import searchRec from "./searchREC";
import searchTags from "./searchtags";
export default {
  name: "search",
  components: {
    searchRec,
    searchTags,
  },
  data() {
    return {
      msg: "",
      songList: [],  //歌曲详情
      id: '',  //歌曲id
      album: '',
      sUrl: '',  //歌曲路劲
      aboutSongs: {},  
      imgId: '',
      imgUrl: ''
    };
  },
  watch: {
    msg(old){
      this.getSearchSuggest(old)
    }
  },
  methods: {
    getSearch(){  
      getSearchKey(this.msg).then(res => {
        console.log(res);
      })
    },

    itemClick(index){
      this.id = this.songList[index].id
      getMusicUrl(this.id).then(res => {
        this.aboutSongs = res.songs
        this.$store.commit('addSongList', this.songList[index])  //将数据添加到vuex中 方便同级组件的数据获取
        // console.log(this.songList[index]);
        this.imgId = this.songList[index].album.id
        this.sUrl = res.data.data[0].url
        this.getAlbumImg(this.imgId)
        this.$router.push('/player')
        this.$store.commit('addSongsUrl', this.sUrl)
      })
    },

    getSearchSuggest(old){
      getSearchSuggest(old).then(res => {
        this.songList = res.data.result.songs
      })
    },
    getAlbumImg(id){
      getAlbumImg(id).then(res =>{
        this.imgUrl = res.data.album.blurPicUrl
        this.$store.commit('addImgUrl', this.imgUrl)
      }
    )
    }
  }
};
</script>
<style scoped>
body {
  background-color: #fff;
}
#search {
  height: calc(100vh - 60px);
  width: calc(100% - 4%);
  margin: 0 auto;
  position: relative;
  /* background-color: red; */
}
.search {
  margin-top: 2%;
  width: 100%;
  height: auto;
  display: flex;
  border: 2px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}
.search input{
  height: 50px;
}
.input-autocomplete{
  position: absolute;
  top: 50px;
  left: 0px;
  z-index: 5;
  background-color: #fff;
  width: 100%;
  display: block;
  border: 2px solid #ccc;
  border-top: none;
  border-radius: 8px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
.autocomplete-info{
  padding: 2% 5%;
}
#searchInput {
  flex: 1;
  outline: none;
  border-radius: 8px;

  padding-left: 5%;
  -webkit-appearance: none;
  border: 0px;
}
.search button {
  width: 50px;
  height: 50px;
  outline: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: #fff;
  border: none;
}
.input-autocomplete{
  display: inline ;
}
</style>
