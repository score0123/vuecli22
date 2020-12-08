<template>
  <div class="vant8_Circle">
    
    <br/>基础用法
    rate 属性表示进度条的目标进度，v-model 表示动画过程中的实时进度。
    当 rate 发生变化时，v-model 会以 speed 的速度变化，直至达到 rate 设定的值。
    <van-circle v-model="currentRate" :rate="a" :speed="10" :text="text" />
    <br/>宽度定制
    通过 stroke-width 属性来控制进度条宽度。
    <van-circle v-model="currentRate" :rate="a" :stroke-width="100" text="宽度定制" />
    <br/>颜色定制
    通过 color 属性来控制进度条颜色，layer-color 属性来控制轨道颜色。
    <van-circle v-model="currentRate" :rate="a" color="gray" layer-color="gold" text="颜色定制" />
    <br/>渐变色
    color 属性支持传入对象格式来定义渐变色。
    <van-circle v-model="currentRate" :rate="a" :color="gradientColor" text="渐变色" />
  
    <br/>逆时针方向
    将 clockwise 设置为 false，进度会从逆时针方向开始。
    <van-circle v-model="currentRate" :rate="a" :clockwise="false" text="逆时针方向" />
  
    <br/>大小定制
    通过 size 属性设置圆环直径。
    <van-circle v-model="currentRate" :rate="a" size="250px" text="大小定制" />
  
  </div>
</template>

<script>
export default {
  name: 'vant8_Circle',
  data () {
    return {
      currentRate: 0,
      a:70,
      gradientColor: {
        // '0%': '#3fecff',
        // '100%': '#6149f6',
        '0%': 'blue',
        '100%': 'red',
      },
    }
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + '%';
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
