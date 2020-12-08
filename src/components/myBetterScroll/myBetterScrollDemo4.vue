<template>
  <div class="myBetterScrollDemo4">
    <div class="box1" ref="box1">
      <div class="box2" ref="box2">
        <!-- <input type="text"> -->
        <div v-for="n in 25" :key="n">{{n}}</div>
      </div>
    </div>
    当前x值为{{x}}   当前y值为{{y}}
  </div>
</template>

<script>
import BETTERScroll from 'better-scroll'

export default {
  name: 'myBetterScrollDemo4',
  data () {
    return {
      x:0,
      y:0
    }
  },
  methods:{
    stopWheel(){
      let box1=this.$refs.box1;
      box1.onmousewheel=function(){
        return false;
      }
    },
    initBS(){
      let box1=this.$refs.box1;
      let scrollBox1=new BETTERScroll(box1,{
        // scrollX:true,
        // bounceTime:5000,           //设置回弹动画的动画时长 默认800 ms
        scrollY:true,
        probeType:3//派发scroll事件的时机(0,1,2,3)
        // freeScroll:true,
        // startY:10,
        // pullDownRefresh: {
        //   threshold: 50,
        //   stop: 20
        // },
        // zoom: {
        //   start: 1,
        //   min: 1,
        //   max: 4
        //   }
      })
      scrollBox1.on('scroll',(pop)=>{
        // console.log(pop);
        this.x=pop.x;
        this.y=pop.y;
      })

    }
  },

  mounted(){
    this.stopWheel();
    this.initBS();
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box1{
  width: 500px;
  height: 300px;
  background: gray;
  overflow:scroll;
}
.box2{
  width: 1000px;
  height: 1500px;
}
.box2 div{
  height: 50px;
  margin: 10px;
  background: yellow;
}
</style>
