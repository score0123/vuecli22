<template>
  <div class="vant10_Swipe">

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>

    图片懒加载
    当 Swipe 中含有图片时，可以配合 Lazyload 组件实现图片懒加载。
    <!-- <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe> -->
    <div>
      <strong>懒加载</strong>
      <van-swipe :autoplay="30000000" class="my-swipe">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>

    监听 change 事件
    <van-swipe @change="onChange" :autoplay="30000000" class="my-swipe" >
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>

    纵向滚动
    设置 vertical 属性后滑块会纵向排列，此时需要指定滑块容器的高度。
    <van-swipe style="height: 200px;" vertical indicator-color="red" :autoplay="30000000" class="my-swipe">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>

    自定义指示器
    通过 indicator 插槽可以自定义指示器的样式。
    <van-swipe style="height: 200px;" @change="onChange2" vertical :autoplay="30000000" class="my-swipe">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">
          {{ current + 1 }}/4
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script>
import imgs1 from '../../assets/img/1.jpg'
import imgs2 from '../../assets/img/2.jpg'
import imgs3 from '../../assets/img/3.jpg'
import imgs4 from '../../assets/img/4.jpg'


import Vue from 'vue';
import { Lazyload } from 'vant';
import { Toast } from 'vant';
Vue.use(Lazyload);

export default {
  name: 'vant10_Swipe',
  data () {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        imgs1,
        imgs2,
        imgs3,
        imgs4,
      ],

      current: 0,
    }
  },
  methods: {
    onChange(index) {
      Toast('当前 Swipe 索引：' + index);
    },
    onChange2(index) {
      this.current = index;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.van-swipe__indicator--active{
  width: 10px;
  height: 10px;
}

.my-swipe .van-swipe-item {
  height: 200px;
}
.van-swipe-item img{
  width:100%;
  height: 100%;
  background-repeat: no-repeat;
}


.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
</style>
