<template>
  <div class="myVant">
    <h1>{{ msg }}</h1>
    <router-link to="/myMintUI/mint1_Button_Popup">Button按钮+Popup</router-link>
    <router-link to="/myMintUI/mint2_Swipe">Swipe轮播图</router-link>


    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'myVant',
  data () {
    return {
      msg: 'myVant'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
