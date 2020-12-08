<template>
  <div class="myAsyncComponent">
    <h1>{{ msg }}</h1>
    <myAsync1></myAsync1>
    <myAsync2></myAsync2>
    <myAsync3></myAsync3>
    <myAsync4></myAsync4>
    <myCom></myCom>
  </div>
</template>

<script>
import myError from './myError';
import myLoading from './myLoading';
let myCom=()=>({
  component:import("./myCom"),//加载成功时的组件
  Loading:myLoading,          //加载过程中的组件
  error:myError,              //加载失败时的组件
  timeout:1000,  //超时(超过该时长就加载error组件)
  delay:100,    //延迟加载时间
})




let myAsync1= resolve =>require(['@/components/myAsync/myAsyncComponent1'],resolve)
import myAsync2 from './myAsyncComponent2'
let myAsync3 = ()=>import("./myAsyncComponent3");
// console.log("myAsync1:",myAsync1);
// console.log("myAsync2:",myAsync2);
// console.log("myAsync3:",myAsync3);

export default {
  name: 'myAsyncComponent',
  data () {
    return {
      msg: 'myAsyncComponent'
    }
  },
  components:{
    myAsync1,
    myAsync2,
    myAsync3,
    myAsync4:()=>import("./myAsyncComponent4"),
    myCom,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
