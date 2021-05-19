import Vue from "vue";
import VueRouter from "vue-router";
// import { component } from "vue/types/umd";

const Home = () => import("../views/home/Home.vue");
const User = () => import("../views/user/user.vue");
const Search = () => import("../views/search/search.vue");

const Login = () => import("../views/user/login.vue");
const HomeLongs = () => import("../views/user/log-in.vue");
const HomeMain = () => import("../views/user/main.vue");

const Player = () => import('../views/player.vue')

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/my",
    component: User,
  },
  {
    path: "/my/login",
    component: Login,
  },
  {
    path: "/my/log-in",
    component: HomeLongs,
  },
  {
    path: "/my/main",
    component: HomeMain,
  },
  {
    path: '/player',
    component: Player
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
