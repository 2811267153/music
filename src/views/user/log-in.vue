<template>
  <div>
    <el-input
      id="text"
      v-model="phone"
      placeholder="输一下你的账户吧"
    ></el-input>
    <el-input
      id="pasd"
      placeholder="输一下你的密码吧（我发誓 绝对不会偷看的）"
      v-model="password"
      show-password
    ></el-input>
  </div>
</template>

<style>
body {
  background-color: #ffffff !important;
}
#user {
  width: calc(100% - 10%);
  margin: 0px auto;
}
.title {
  width: 100%;
  height: auto;
  overflow: hidden;
  background-color: #fff;
}
.title h2 {
  margin: 0px;
  text-align: center;
  font-weight: 400;
}
.title img {
  width: 119%;
  /* height: 7%; */
}
.title .bar {
  height: 18vh;
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
</style>
