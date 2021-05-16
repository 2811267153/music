import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/home/Home.vue");
const User = () => import("../views/user/user.vue");
const Search = () => import("../views/search/search.vue");

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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
