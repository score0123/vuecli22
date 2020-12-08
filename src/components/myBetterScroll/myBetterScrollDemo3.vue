<template>
  <div class="myBetterScrollDemo3">
    <div class="box1" ref="box1">
      <div class="box2" ref="box2">
        <div v-for="n in 10" :key="n">{{n}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'myBetterScrollDemo3',
  data () {
    return {
      
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
      let scroll=new Bscroll(box1,{
        scrollX:true,
        // click:true
      })
    }
  },
  mounted(){
    this.stopWheel();
    this.initBS();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box1{
  overflow: scroll;
  background: gray;
}
.box2{
  width: 1500px;
}
.box2 div{
  width: 100px;
  height: 50px;
  background: yellow;
  margin: 5px;
  display: inline-block;
}
</style>
