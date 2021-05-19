<template>
  <tab-bar>
    <tab-bar-item :link="'/home'">
      <i slot="icon" class="iconfont icon-Home"></i>
      <p slot="text">首页</p>
    </tab-bar-item>
    <tab-bar-item link="/my">
      <i slot="icon" class="iconfont icon-user"></i>
      <p slot="text">我的</p>
    </tab-bar-item>
    <tab-bar-item link="/search">
      <i slot="icon" class="iconfont icon-search"></i>
      <p slot="text">搜索</p>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../tabBar/tabBar";
import TabBarItem from "../tabBar/tabBarItem";
export default {
  name: "MainTabBarItem",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
.tab-bar-item {
  width: 29%;
}
.activeStyle {
  color: blueviolet;
}

p{
  width: 100%;
  margin: 0px;
  padding-top: 3px;
}
</style>
