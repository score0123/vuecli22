<template>
  <div class="myBetterScrollDemo1">
    <h1>{{ msg }}</h1>
    <div class="box1" ref="box1">
      <ul class="box2" ref="box2">
        <li v-for="n in 10" :key="n">{{n}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myBetterScrollDemo1',
  data () {
    return {
      msg: 'myBetterScrollDemo1'
    }
  },
  mounted() {
    this.stopWheel();
  },
  methods: {
    stopWheel(){
      let box1=this.$refs.box1;
      console.log(this.$refs.box1);
      // console.log(this.$refs.box2);
      box1.onmousewheel=function(){
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
