<template>
  <div>
    <div class="titles">
      <div class="bar"></div>
      <img src="https://files.catbox.moe/elptri.svg" alt="" />
    </div>
    <!-- <div class="filling"></div> -->
    <div class="login">
      <div class="about">
        <p>Welcome</p>
      </div>
      <div class="filling"></div>
    </div>
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
.titles .bar {
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
.filling {
  width: 100%;
  height: 11vh;
  background: #fff;
}
</style>
