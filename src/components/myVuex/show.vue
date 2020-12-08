<template>
  <div class="show">
    {{this.$store.state.a}}
    {{this.$store.getters.getB}}
    {{this.$store.getters.getCount}}

  </div>
</template>

<script>
export default {
  name: 'show',
  data () {
    return {
      msg: 'show'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.show{
  padding: 10px;
  margin: 10px;
  border: solid 1px red;
}
</style>