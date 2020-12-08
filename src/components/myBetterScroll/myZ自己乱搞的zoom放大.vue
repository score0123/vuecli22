<template>
  <div class="myBetterScrollDemo7">
    <button @click="ss">点击</button>
    <div class="box1" ref="box1">
      <div class="box2">
        <div v-for="n in 10" :key="n">
          {{n}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import BETTERScroll from 'better-scroll'
export default {
  name: 'myBetterScrollDemo7',
  data () {
    return {
      sss:1
    }
  },
  methods:{
    ss(){
      ++this.sss;
      console.log(this.sss);
      this.fn();
    },
    fn(){
      let h=this.$refs.box1;
      let scrollh=new BETTERScroll(h,{
        scrollY:true,
        // 这个配置用于对滚动内容的缩放，默认为 false。当设置为 true 或者是一
        // 个 Object 的时候，可以开启缩放
        // start 表示开始的缩放比例，min 表示最小缩放比例，max 表示最大缩放比例
        zoom: {
        start: this.sss,
        min: 1,
        max: 4
        },
        // 这个配置可以开启滚动条，默认为 false。当设置为 true 或者是一个 Object 的时候，
        // 都会开启滚动条，例如：(滚动条在页面最下方)
        scrollbar: {
          fade: true,
          interactive: false // 1.8.0 新增
        },
      })
    },
    stopWheel(){
      let h=this.$refs.box1;
      h.onmousewheel=function(){
        return false;
      }
    }
  },
  mounted(){
    this.stopWheel();
    this.fn();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box1{
  height: 350px;
  background: gray;
  overflow: scroll;
}
.box2 {
  padding: 1px 0;
}
.box2 div{
  height: 100px;
  margin: 10px;
  background: gold;
}
</style>