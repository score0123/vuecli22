<template>
  <div class="myBetterScrollDemo2">
    <h1>{{ msg }}</h1>
    <div class="box1" ref="box1">
      <ul class="box2" ref="box2">
        <li v-for="n in 10" :key="n">{{n}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
// var BScroll = require('better-scroll')     ES5写法
import BScroll from 'better-scroll'// cnpm i better-scroll --save-dev

export default {
  name: 'myBetterScrollDemo2',
  data () {
    return {
      msg: 'myBetterScrollDemo2'
    }
  },
  mounted() {
    this.initBS();//4.初始化better-scroll

    this.stopWheel();
  },
  methods: {
    initBS(){
      let box1=this.$refs.box1;//获取滚动元素(父元素)
      let scroll = new BScroll(box1,{
        scrollY:true,
        // click:true,
      });
    },
    stopWheel(){
      let box1=this.$refs.box1;
      // console.log(this.$refs.box1);
      box1.onmousewheel=function(){//子元素的鼠标滚动事件
        return false;
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box1{
  height: 300px;
  background: gray;
  overflow: auto;
}
.box2>li{
  height: 50px;
  margin: 10px;
  background: goldenrod;
}
</style>
