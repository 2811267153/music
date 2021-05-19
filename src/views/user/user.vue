<template>
  <div id="user">
    <commen></commen>
    <button class="log-in" @touchstart="login">登录</button>
    <button class="login-item" @touchstart="logIn">注册</button>
  </div>
</template>
<script>
import { getLogin } from "../../network/home.js";

import commen from "../user/commen-user";
export default {
  name: "user",
  data() {
    return {
      phone: "",
      password: "",
      err: "",
      personal: "",
      uid: "",
      isShow: false,
    };
  },
  created() {
    //do something after creating vue instanceg
  },

  methods: {
    login() {
      this.$router.push("my/login");
    },
    logIn() {
      this.$router.push("my/log-in");
    },
    getLogin(phone, password) {
      getLogin(phone, password).then((res, err) => {
        console.log(res, err);
        this.personal = res.data.profile;
        this.uid = this.personal.userId;
      });
    },
  },
  components: {
    // mainUserText
    commen,
  },
  computed: {
    getPath() {
      return this.$router == "/my/login";
    },
  },
};
</script>
<style scoped>
#user {
  height: calc(100vh - 60px);
}
button {
  display: block;
  width: 50%;
  padding: 5%;
  border-radius: 50px;
  outline: none;
  border: 1px solid #fff;
  margin: 5% auto;
}

.login-item {
  border: 1px solid #ccc;
}
.log-in {
  background: cornflowerblue;
  color: #fff;
}
#text {
  margin: 4%;
  width: calc(100% - 8%);
}
#pasd {
  margin: 0 4%;
  width: calc(100% - 8%);
}
</style>
