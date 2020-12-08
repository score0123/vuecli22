<template>
  <div class="myRouter1">
    <h1>{{ msg }}</h1>
    {{this.$route.params.user}}
    {{this.$route.params.sex==1?"男":"女"}}
    {{this.$route.params.age}}
  </div>
</template>

<script>
export default {
  name: 'myRouter1',
  data () {
    return {
      msg: 'myRouter1'
    }
  },
  created(){
    // console.log(this.$route);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
