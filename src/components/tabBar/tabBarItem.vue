
<template>
  <div class="tab-bar-item" @click="itemClick">
    <div :style="activeStyle"><slot name="icon"></slot></div>
    <div :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  methods: {
    itemClick() {
      this.$router.push(this.link);
    }
  },
  computed: {
      isActive(){
          return this.$route.path.indexOf(this.link) != -1
      },
      activeStyle(){
          return this.isActive ? {'color': 'skyblue'} : {}
      }
  },
  props: {
    link: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
  .tab-bar-item{
    flex: 1;
  }
</style>
