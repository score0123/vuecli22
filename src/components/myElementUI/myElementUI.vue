<template>
  <div class="myElementUI">
    <h1>{{ msg }}</h1>

    <router-link to="/login">
      <img src="../../assets/img/a10.jpg" alt="">
    </router-link>
    <router-link to="/myElementUI/ele1_InputNumber">计数器</router-link>
    <router-link to="/myElementUI/ele2_Input">输入框</router-link>
    <router-link to="/myElementUI/ele3_Layout">Layout布局</router-link>
    <router-link to="/myElementUI/ele4_Slider">Slider滑块</router-link>
    <router-link to="/myElementUI/ele5_DataPicker">DataPicker日期选择器</router-link>
    <router-link to="/myElementUI/ele6_Rate">Rate评分</router-link>
    <router-link to="/myElementUI/ele7_Breadcrumb">Breadcrumb面包屑</router-link>
    <router-link to="/myElementUI/ele8_Carousel">Carousel走马灯</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'myElementUI',
  data () {
    return {
      msg: 'myElementUI',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
