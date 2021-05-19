<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <main-tab-bar-item></main-tab-bar-item>
  </div>
</template>

<script>
import MainTabBarItem from "./components/conent/mainTabBarItem.vue";
export default {
  name: "App",
  components: {
    MainTabBarItem,
  },
};
</script>

<style>
@import "./assets/css/index.css";
#app{
  height: 100vh;
  overflow: hidden;
}
</style>
