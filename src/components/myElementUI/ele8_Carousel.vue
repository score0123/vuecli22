<template>
  <div class="ele8_Carousel">

    <el-carousel indicator-position="outside">
      <!-- <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item> -->
      <el-carousel-item v-for="item in arrImg2" :key="item">
        <!-- <h3>{{ item }}</h3> -->
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>

    <el-carousel :interval="4000" type="card" height="200px">
      <!-- <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item> -->
      <el-carousel-item v-for="item in arrImg" :key="item">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>

    <el-carousel height="200px" direction="vertical" :autoplay="false">
      <!-- <el-carousel-item v-for="item in 3" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item> -->
      <el-carousel-item v-for="item in arrImg" :key="item">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>

    <img src='../../assets/img/1.jpg' alt="">
    <img :src='Arr' alt="">

    <!-- <a href="http://www.baidu.com">点击</a>
    <a :href="url">点击</a> -->
  </div>
</template>

<script>
import arr1 from "../../assets/img/1.jpg"
import arr2 from "../../assets/img/2.jpg"
import arr3 from "../../assets/img/3.jpg"
import arr4 from "../../assets/img/4.jpg"

export default {
  name: 'ele8_Carousel',
  data () {
    return {
      Arr:arr3,
      //引的assets下的图片
      arrImg:[arr1,arr2,arr3,arr4],

      //引的静态资源static下的图片
      arrImg2:["static/img/1.jpg","static/img/2.jpg","static/img/3.jpg","static/img/4.jpg"]
      
      
      // url:"http://www.baidu.com",
      // img_list:[
      //   "/static/image/1.jpg",
      //   "/static/image/2.jpg",
      //   "/static/image/3.jpg",
      //   "/static/image/4.jpg",
      // ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-carousel__item img{
  width:100%;
  height: 100%;
  /* background-size: 100% 100%; */
  background-repeat: no-repeat;
}









.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
