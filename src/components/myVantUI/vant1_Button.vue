<template>
  <div class="vant1_Button">
    <h1>{{ msg }}</h1>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>

    <van-button plain type="primary">朴素按钮</van-button>
    <van-button plain type="info">朴素按钮</van-button>

    <van-button plain hairline type="primary">细边框按钮</van-button>
    <van-button plain hairline type="info">细边框按钮</van-button>

    <van-button disabled type="primary">禁用状态</van-button>
    <van-button disabled type="info">禁用状态</van-button>

    <van-button loading type="primary" />
    <van-button loading type="primary" loading-type="spinner" />
    <van-button loading type="info" loading-text="加载中..." />

    <van-button square type="primary">方形按钮</van-button>
    <van-button round type="info">圆形按钮</van-button>

    <van-button icon="plus" type="primary" />
    <van-button icon="plus" type="primary">按钮</van-button>
    <van-button icon="https://img.yzcdn.cn/vant/user-active.png" type="info">按钮</van-button>

    <van-button type="primary" size="large">大号按钮</van-button>
    <van-button type="primary" size="normal">普通按钮</van-button>
    <van-button type="primary" size="small">小型按钮</van-button>
    <van-button type="primary" size="mini">迷你按钮</van-button>
    <van-button type="primary" block>块级元素</van-button>

    <van-button type="primary" url="http://www.baidu.com">URL 跳转</van-button>
    <van-button type="primary" to="/login">路由跳转</van-button>

    <van-button color="#7232dd">单色按钮</van-button>
    <van-button color="#7232dd" plain>单色按钮</van-button>
    <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">渐变色按钮</van-button>
  </div>
</template>

<script>
export default {
  name: 'vant1_Button',
  data () {
    return {
      msg: 'vant1_Button'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
