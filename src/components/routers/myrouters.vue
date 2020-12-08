<template>
  <div class="myrouters">
    <router-link v-for="(item,i) in routerArr" :key="i" :to="item.to">
      <div>
        {{item.name}}
      </div>
    </router-link>
    <button @click="myPush('/myrouters/myRouter2#age=10&sex=0')">kky1(hash)</button>
    <button @click="myPush({path:'/myrouters/myRouter2'})">kky2(path)</button>
    <button @click="myPush({name:'myRouter2'})">kky3(name)</button>
    <button @click="myPush({name:'myRouter2',params:{'user':'xiaoming','age':'10','sex':'0'}})">kky3(name+params)</button>
    <button @click="myPush({path:'myRouter2',query:{'user':'xiaoming','age':'20','sex':'1'}})">kky3(path+query)</button>
    <button @click="myPush({path:'myRouter2',query:{'user':'xiaoming','age':'40','sex':'0'}})">kky3(name+query)</button>

    <router-link to="/">kky</router-link>
    <router-link to='/myrouters/myRouter2#age=10&sex=0'>kky(push)</router-link>
    <router-link :to="{name:'myRouter2',params:{'user':'xiaoming','age':'10','sex':'0'}}">kky(name+params)</router-link>
    <router-link :to="{path:'myRouter2',query:{'user':'xiaoming','age':'20','sex':'1'}}">kky(path+query)</router-link>
    <router-link :to="{path:'myRouter2',query:{'user':'xiaoming','age':'40','sex':'0'}}">kky(name+query)</router-link>

    <router-link to="/myrouters/myRouter3Props_router1/小明/20/1">props1</router-link>
    <router-link to="/myrouters/myRouter3Props_router2">props2</router-link>
    <router-link :to="{name:'myRouter3Props_router3',params:{user:'小明',age:'20',sex:'0'},query:{user:'小黑',age:'21',sex:'1'}}">props3</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'myrouters',
  data () {
    return {
      routerArr:[
        {to:"/myrouters/myRouter1/user/小明/sex/0/age/20",name:"myRouter1路由动态传值"},
      ]
    }
  },
  methods:{
    myPush(url){
      this.$router.push(url).catch(err=>err);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
