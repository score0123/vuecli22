<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-link to="/login">登录</router-link>
    <router-link to="/myElementUI">myElementUI</router-link>
    <router-link to="/myVantUI">myVant</router-link>
    <router-link to="/myMintUI">myMintUI</router-link>
    <router-link to="/Audio">Audio</router-link>
    <router-link to="/myBetterScroll">myBetterScroll</router-link>
    <router-link to="/myAsync">异步组件</router-link>
    <router-link to="/myImage">图片</router-link>
    <router-link to="/myrouters">路由传值方式</router-link>
    <router-link to="/myVuex">myVuex</router-link>

    <div class="routerview">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
.lac{
  background: red;
  color:white;
  font-size:20px;
}
.routerview{
  padding: 10px;
  border: solid 1px red;
}
</style>
