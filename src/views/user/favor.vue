<template>
  <div class="favor">
    <span>收藏的歌单</span>
    <div class="favor-item"></div>
  </div>
</template>

<script>
export default {
  name: "favor",
};
</script>

<style scoped>
.favor {
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
