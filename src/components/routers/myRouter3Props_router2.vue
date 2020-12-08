<template>
  <div class="myRouter3Props_router2">
    <h1>{{ msg }}</h1>
    {{this.$props}}
    {{this.$props.suibian}}
    {{this.$props.jingtai}}
    {{suibian}}
    {{jingtai}}
  </div>
</template>

<script>
export default {
  props:["suibian","jingtai"],
  name: 'myRouter3Props_router2',
  data () {
    return {
      msg: 'myRouter3Props_router2'
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
