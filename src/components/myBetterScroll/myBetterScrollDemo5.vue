<template>
  <div class="myBetterScrollDemo5">
    <!-- <h1>{{ msg }}</h1> -->
    <button @click="fn">点击</button>
  </div>
</template>

<script>
// import axios from 'axios'

//          获取 本地 数据
//方式一:(ES5中的方式)
// let god=require('./data/goodsList');
// console.log(god);
//方式二:(ES6中的方式)
// import god from './data/goodsList'
// console.log(god);
//方式三:
// axios获取static中的静态资源文件

export default {
  name: 'myBetterScrollDemo5',
  data () {
    return {
      goods:'',
    }
  },
  methods:{
    fn(){
      this.axios.get("./static/goodsList.json")
      .then(res=>{
        console.log("res.data.goods:",res.data.goods);
        this.goods=res.data.goods;//等待this.goods中数据渲染完毕,this.$nextTick再执行
      })
      .catch(err=>{
        console.log("err:",err);
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>