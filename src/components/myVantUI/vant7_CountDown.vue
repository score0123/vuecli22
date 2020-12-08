<template>
  <div class="vant7_CountDown">
    基础用法<van-count-down :time="time" />
    自定义格式<van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
    毫秒级渲染<van-count-down millisecond :time="time" format=" HH:mm:ss:SS" />
    <van-count-down millisecond :time="time" format="DD 天 HH 时 mm 分 ss 秒 HH:mm:ss:SS" />

    自定义样式
    通过插槽自定义倒计时的样式，timeData 对象格式见下方表格。

    <van-count-down :time="time">
      <template #default="timeData">
        <span class="block">{{ timeData.hours }}</span>
        <span class="colon">:</span>
        <span class="block">{{ timeData.minutes }}</span>
        <span class="colon">:</span>
        <span class="block">{{ timeData.seconds }}</span>
      </template>
    </van-count-down>

  </div>
</template>

<script>
export default {
  name: 'vant7_CountDown',
  data () {
    return {
      time: 30 * 60 * 60 * 1000
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.colon {
    display: inline-block;
    margin: 0 4px;
    color: #ee0a24;
  }
  .block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #ee0a24;
  }
</style>
