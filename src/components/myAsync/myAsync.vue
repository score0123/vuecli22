<template>
  <div class="myAsync">
    
      <router-link v-for="(item,i) in routerArr" :key="i" :to="item.to">
        <div>{{item.name}}</div>
      </router-link>
    

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'myAsync',
  data () {
    return {
      routerArr:[
        {to:"/myAsync/myAsyncComponent",name:"异步组件"},
        {to:"/myAsync/myAsyncComponent1",name:"异步组件1"},
        {to:"/myAsync/myAsyncComponent2",name:"异步组件2"},
        {to:"/myAsync/myAsyncComponent3",name:"异步组件3"},
        {to:"/myAsync/myAsyncComponent4",name:"异步组件4"},
        {to:"/myAsync/myAsyncComponent5",name:"异步组件5"},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
