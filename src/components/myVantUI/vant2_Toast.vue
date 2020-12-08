<template>
  <div class="vant2_Toast">
    <h1>{{ msg }}</h1>
    <van-button type="primary" @click="fn1">提示内容</van-button>
    <van-button type="primary" @click="fn2">加载中</van-button>
    <van-button type="primary" @click="fn3">成功文案</van-button>
    <van-button type="primary" @click="fn4">失败文案</van-button>
    <van-button type="info" @click="fn5">自定义图标</van-button>
    <van-button type="info" @click="fn6">自定义图标</van-button>
    <van-button type="info" @click="fn7">自定义图标</van-button>
    <van-button type="default" @click="fn8">自定义位置</van-button>
    <van-button type="default" @click="fn9">自定义位置</van-button>
  </div>
</template>

<script>
import {Button,Toast} from 'vant'

export default {
  name: 'vant2_Toast',
  data () {
    return {
      msg: 'vant2_Toast'
    }
  },
  methods:{
    fn1(){
      Toast('提示内容');
    },
    fn2(){
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
      });
    },
    fn3(){
      Toast.success('成功文案');
    },
    fn4(){
      Toast.fail('失败文案');
    },
    fn5(){
      Toast({
        message: '自定义图标',
        icon: 'like-o',
      });
    },
    fn6(){
      Toast({
        message: '自定义图片',
        icon: 'https://img.yzcdn.cn/vant/logo.png',
        });
    },
    fn7(){
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
        loadingType: 'spinner',
      });
    },
    fn8(){
      Toast({
        message: '顶部展示',
        position: 'top',
      });
    },
    fn9(){
      Toast({
        message: '底部展示',
        position: 'bottom',
      });
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
