<template>
  <div id="login">
    <div class="titles">
      <div class="bars">
        <el-alert v-if="isMsgShow" :title="title" type="success" center show-icon>
        </el-alert>
      </div>
      <img src="https://files.catbox.moe/elptri.svg" alt="" />
    </div>
    <!-- <div class="filling"></div> -->
    <div class="login">
      <div class="about">
        <p>Welcome</p>
      </div>
      <div class="filling"></div>
      <div class="input">
        <el-input
          id="text"
          v-model="phone"
          placeholder="在这里输入账户呦"
        ></el-input>
        <el-input
          id="pasd"
          placeholder="你的密码输在我这里"
          v-model="password"
          show-password
        ></el-input>
      </div>
      <div class="flex">
        <button>取消</button>
        <button class="log-in" @touchstart="getUser">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getLogin } from "../../network/home";
export default {
  name: "login",
  data() {
    return {
      phone: "17572696252",
      password: "xybwdhxd0422",
      isMsgShow: false,
      title: '',
      account: []
    };
  },
  methods: {
    getUser() {
      if (this.phone.trim() != "" && this.password.trim() != "") {
        getLogin(this.phone, this.password).then((res) => {
          console.log(res);
          if(res.data.code === 200){
            this.isMsgShow = true,
            this.title = 'OK, 数据请求完成'
            this.account.push(res.data.account),
            this.account.push(res.data.profile)
            this.$store.commit('addUser', this.account )
            this.$router.push('/my/main')
          }else{
            this.isMsgShow = true,
            this.title = '账号或密码驶入错误， 请重新输入'
          }
        });
      }
    },
  },
};
</script>

<style>
body {
  background-color: #ffffff !important;
}
#login {
  width: calc(100% - 10%);
  margin: 0px auto;
}
.titles {
  width: 100%;
  height: auto;
  overflow: hidden;
  background-color: #fff;
}
.titles h2 {
  margin: 0px;
  text-align: center;
  font-weight: 400;
}
.titles img {
  width: 119%;
  /* height: 7%; */
}
.titles .bars {
  height: calc(13vh - 3vh);
  text-align: center;
  padding-top: 3vh;
}
.about p {
  margin: 0 auto;
  width: 100%;
  text-align: center;
  font-size: 3rem;
}
.login {
  width: 100%;
  background-color: #fff;
  /* border-top: 1px solid #ccc; */
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
.replace {
  border-top: 1px solid #ccc;
  padding-top: 4%;
  width: 100%;
  text-align: center;
}
.replace p {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
.replace i {
  margin: 5vh;
  font-size: 1.3rem;
}
.log-in {
  background: cornflowerblue;
  color: #fff;
}
.filling {
  width: 100%;
  height: 11vh;
  background: #fff;
}
.login-item {
  border: 1px solid #ccc;
}
#text,
#pasd {
  margin: 4% auto;
  width: calc(100% - 8%);
}
.input {
  text-align: center;
}
#pasd {
  margin-top: 0;
}
.flex {
  display: flex;
}
</style>
