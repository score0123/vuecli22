<template>
  <div class="vant9_Image">

    基础用法
    基础用法与原生 img 标签一致，可以设置 src、width、height、alt 等原生属性。
    <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />

    <br/>

    填充模式
    通过 fit 属性可以设置图片填充模式  fit=contain / cover / fill
    <van-image width="10rem" height="10rem" fit="fill" src="https://img.yzcdn.cn/vant/cat.jpeg"/>

    <br/>
    圆形图片
    通过 round 属性可以设置图片变圆，注意当图片宽高不相等
    且 fit 为 contain 或 scale-down 时，将无法填充一个完整的圆形。
    <van-image round width="10rem" height="10rem" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
  

    <Load></Load>


  </div>
</template>

<script>
import Load from "./vant11Load"
export default {
  name: 'vant9_Image',
  data () {
    return {

    }
  },
  components:{
    Load
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
