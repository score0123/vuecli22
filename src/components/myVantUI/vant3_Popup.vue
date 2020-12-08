<template>
  <div class="vant3_Popup">
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <!-- <van-popup v-model="show">内容</van-popup> -->
    <!-- <van-popup v-model="show" position="top" :style="{ height: '30%' }">内容</van-popup> -->
    <!-- <van-popup v-model="show" position="bottom" :style="{ height: '30%' }" /> -->
    <!-- <van-popup v-model="show" position="left" :style="{ height: '30%' }" /> -->
    <!-- <van-popup v-model="show" position="right" :style="{ height: '30%' }" /> -->

    <van-popup v-model="show" round position="left" :style="{ height: '30%' }" />
  </div>
</template>

<script>
export default {
  name: 'vant3_Popup',
  data () {
    return {
      show: false,
    }
  },
  methods: {
    showPopup() {
      this.show = true;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
