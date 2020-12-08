<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <img src="../../assets/img/1.jpg" alt="">
    <img :src="a" alt=""><!-- 不用脚手架能出，使用了脚手架之后，要通过 import 或 require的方式获取图片 -->
  <button @click="fn">点击</button>
  {{msgArr.a}}
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'login',
      a:"../../assets/img/1.jpg",
      msgArr:{"a":"aaa","b":"bbb"},
    }
  },
  methods:{
    fn(){
      this.msgArr.a="sd";
    }
  },
  created(){
    // console.log(this.$root.isShow);
    // console.log(this.$root.userInfo);
    
    // console.log(this.$parent);
    // console.log(this.$parent.$parent);
    // console.log(this.$root===this.$parent.$parent);//true
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
