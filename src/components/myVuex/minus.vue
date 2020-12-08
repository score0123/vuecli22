<template>
  <div class="minus">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'minus',
  data () {
    return {
      msg: 'minus'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.minus{
  padding: 10px;
  margin: 10px;
  border: solid 1px red;
}
</style>