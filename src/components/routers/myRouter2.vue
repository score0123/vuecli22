<template>
  <div class="myRouter2">
    <h1>{{ msg }}</h1>
    this.$route.meta.sss:{{this.$route.meta.sss}}
    <br><br><br>
    hash:{{this.$route.hash}}         <br>
    params:{{this.$route.params}}     <br>
    user:{{this.$route.params.user}}  <br>
    age:{{this.$route.params.age}}    <br>
    sex:{{this.$route.params.sex==0?"男":"女"}}
    <br><br>
    query :{{this.$route.query}}      <br>
    user:{{this.$route.query.user}}   <br>
    age:{{this.$route.query.age}}     <br>
    sex:{{this.$route.query.sex}}     <br>
    query :{{this.$route.query.sex==0?"男":"女"}} <br>
  </div>
</template>

<script>
export default {
  name: 'myRouter2',
  data () {
    return {
      msg: 'myRouter2'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
