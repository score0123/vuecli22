<template>
  <div class="myImage">
    <img src="@/assets/img/a1.jpg" alt="">
    <img src="./a1.jpg" alt="">
    <img src="static/img/a1.jpg" alt="">
    <img :src="imgs1" alt="">
    <img :src="imgs2" alt="">
    <img :src="imgs3" alt="">
    <img :src="imgs4" alt="">
    <img :src="imgs5" alt="">
    <img :src="imgs6" alt="">
    <img :src="imgs7" alt="">
  </div>
</template>

<script>
import imgs1 from '@/assets/img/a1.jpg';
import imgs2 from './a1.jpg';
let imgs3 = require("@/assets/img/a1.jpg");
let imgs4 = require("./a1.jpg");


export default {
  name: 'myImage',
  data () {
    return {
      imgs1,//简写 imgs1:imgs1
      imgs2,//简写 imgs2:imgs2
      imgs3,//简写 imgs3:imgs3
      imgs4,//简写 imgs4:imgs4

      imgs5:require("@/assets/img/a1.jpg"),
      imgs6:require("./a1.jpg"),
      imgs7:"static/img/a1.jpg",



      // imgs:'@/assets/img/a1.jpg',//不要尝试这样获取图片，给不到的
      // imgs:'./a1.jpg',           //不要尝试这样获取图片，给不到的
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
