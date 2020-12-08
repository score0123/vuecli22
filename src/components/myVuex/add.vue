<template>
  <div class="add">
    <button @click="addA1">点击+1</button>
    <button @click="addA2">点击+10</button>
    <button @click="addAS1">点击+1</button>
    <button @click="addAS2">点击+10</button>
    <br>
    <button @click="moaddA1">点击+1</button>
    <button @click="moaddA2">点击+15</button>
    <button @click="moaddAS1">点击+1</button>
    <button @click="moaddAS2">点击+15</button>
  </div>
</template>

<script>
// import {ADD,BDD} from '../aaa/a1'

export default {
  name: 'add',
  data () {
    return {
      msg: 'add'
    }
  },
  methods:{
    addA1(){
      this.$store.commit("add1");
    },
    addA2(){
      this.$store.commit("add2",{n:10});
    },
    addAS1(){
      this.$store.dispatch("Sadd1");
    },
    addAS2(){
      this.$store.dispatch("Sadd2",{n:10});
    },

    moaddA1(){
      this.$store.commit("moadd1");
    },
    moaddA2(){
      this.$store.commit("moadd2",{nn:15});
    },
    moaddAS1(){
      this.$store.dispatch("moSadd1");
    },
    moaddAS2(){
      this.$store.dispatch("moSadd2",{nn:15});
    },
  },
  mounted(){
    console.log(this.$store);
    // console.log(ADD);
    // console.log(BDD);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add{
  padding: 10px;
  margin: 10px;
  border: solid 1px red;
}
</style>