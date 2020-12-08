<template>
  <div class="myBetterScroll">
    <!-- 用鼠标拉动使用betterScroll的dom，会有弹性效果 -->

    <!-- <router-link to="/myBetterScroll/myBetterScrollDemo1">Demo1(无滚动)</router-link>
    <router-link to="/myBetterScroll/myBetterScrollDemo2">Demo2(引入BS，上下滚动)</router-link>
    <router-link to="/myBetterScroll/myBetterScrollDemo3">Demo3(引入BS，左右滚动)</router-link>
    <router-link to="/myBetterScroll/myBetterScrollDemo4">Demo4(引入BS，监听纵向滚动效果)</router-link>
    <router-link to="/myBetterScroll/myBetterScrollDemo5">Demo5</router-link>
    <router-link to="/myBetterScroll/myBetterScrollDemo6">老师做的和demo4一样</router-link>
    <router-view></router-view> -->

      <router-link v-for="(item,index) in routerArr" :key="index" :to="item.to">
        <div>{{item.name}}</div>
      </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'myBetterScroll',
  data () {
    return {
      routerArr:[
        {to:"/myBetterScroll/myBetterScrollDemo1",name:"Demo1(无滚动)"},
        {to:"/myBetterScroll/myBetterScrollDemo2",name:"Demo2(引入BS，上下滚动)"},
        {to:"/myBetterScroll/myBetterScrollDemo3",name:"Demo3(引入BS，左右滚动)"},
        {to:"/myBetterScroll/myBetterScrollDemo4",name:"Demo4(引入BS，监听纵向滚动效果)"},
        {to:"/myBetterScroll/myBetterScrollDemo5",name:"获取本地json数据"},
        {to:"/myBetterScroll/myBetterScrollDemo6",name:"Demo6"},
        {to:"/myBetterScroll/myBetterScrollDemo7",name:"Demo7"},
        {to:"/myBetterScroll/myBetterScrollDemo8",name:"老师做的和demo4一样"},
        {to:"/myBetterScroll/myBetterScrollDemo9GoodsList",name:"老师做的饿了么"},
        {to:"/myBetterScroll/myBetterScrollDemo10AddressList",name:"老师做的2"},
      ]
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
