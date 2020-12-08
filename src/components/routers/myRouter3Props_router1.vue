<template>
  <div class="myRouter3Props_router1">
    <h1>{{ msg }}</h1>
    {{this.$props}}
    {{this.$props.user}}
    {{this.$props.age}}
    {{this.$props.sex==0?"男":"女"}}
    {{user}}
    {{age}}
    {{sex}}
  </div>
</template>

<script>
export default {
  props:["user","age","sex"],
  name: 'myRouter3Props_router1',
  data () {
    return {
      msg: 'myRouter3Props_router1'
    }
  },
  created(){
    console.log(this);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
