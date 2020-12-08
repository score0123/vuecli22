<template>
  <div class="muVantUI">
    <h1>{{ msg }}</h1>

    <router-link to="/myVantUI/vant1_Button">Button按钮</router-link>
    <router-link to="/myVantUI/vant2_Toast">Toast轻提示</router-link>
    <router-link to="/myVantUI/vant3_Popup">Popup弹出层</router-link>
    <router-link to="/myVantUI/vant4_Slider">Slider滑块</router-link>
    <router-link to="/myVantUI/vant5_Uploader">Uploader文件上传</router-link>
    <router-link to="/myVantUI/vant6_PullRefresh">PullRefresh下拉刷新</router-link>
    <router-link to="/myVantUI/vant7_CountDown">CountDown倒计时</router-link>
    <router-link to="/myVantUI/vant8_Circle">Circle环形进度条</router-link>
    <router-link to="/myVantUI/vant9_Image">Image图片</router-link>
    <router-link to="/myVantUI/vant10_Swipe">Swipe轮播</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'muVantUI',
  data () {
    return {
      msg: 'muVantUI'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
