import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import VueLazyload from "vue-lazyload";
import animate from 'animate.css'
import router from "./router";
import store from "./store";

import "element-ui/lib/theme-chalk/index.css";
// import 'vue2-animate/dist/vue2-animate.min.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueLazyload);
Vue.use(animate)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
