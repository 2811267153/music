<template>
  <div id="rec">
    <span>推荐歌单</span>
  </div>
</template>

<script>
import  {getFavorPlayList} from '../../network/user.js'
export default {
  name: "rec",
  data() {
    return {
        favvorList: []
    };
  },

  created(){
      this.getFavorPlayList()
  },
  methods: {
      getFavorPlayList(){
          getFavorPlayList().then(res => {
              console.log(res);
              this.favvorList.push(res.data.recommend)
              console.log(this.favvorList);
          })
      }
  }
};
</script>

<style scoped>
#rec {
  background-image: linear-gradient(135deg, #abdcff 10%, #0396ff 100%);
  width: calc(100% - 4%);
  /* height: 20vh; */
  padding: 2%;
  border-radius: 8px;
  margin: 4% 0;
}
span {
  display: block;
  padding-bottom: 2%;
  margin: 2% 0;
}
</style>
