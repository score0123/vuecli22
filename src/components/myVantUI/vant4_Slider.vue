<template>
  <div class="vant4_Slider">
    <h1>{{msg}}</h1>
    <van-slider v-model="value" @change="onChange" /> <br/><br/><br/>
    <van-slider v-model="value2" range @change="onChange" />

    指定选择范围
    <van-slider v-model="value3" :min="-50" :max="50"  @change="onChange" />
    禁用
    <van-slider v-model="value4" disabled />
    指定步长
    <van-slider v-model="value5" :step="10" />
    自定义样式
    <van-slider v-model="value" bar-height="10px" active-color="#ee0a24" />
    自定义按钮
    <van-slider v-model="value" active-color="#ee0a24">
      <template #button>
        <div class="custom-button">{{ value }}</div>
      </template>
    </van-slider>
    垂直方向
    设置 vertical 属性后，滑块会垂直展示，且高度为 100% 父元素高度。
    <div :style="{ height: '150px' }">
      <van-slider v-model="value6" vertical @change="onChange" />
      <van-slider
        v-model="value7"
        range
        vertical
        style="margin-left: 100px;"
        @change="onChange"
      />
    </div>
  </div>
</template>

<script>
import {Slider,Toast} from 'vant'
export default {
  name: 'vant4_Slider',
  data () {
    return {
      msg:'vant4_Slider',
      value: 50,
      value2: [45, 55],
      value3: 50,
      value4: 50,
      value5: 50,
      value6: 60,
      value7: [10,20],
    }
  },
  methods: {
    onChange(value) {
      Toast('当前值：' + value);
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: #ee0a24;
    border-radius: 100px;
  }
</style>
