<template>
  <div class="myVuex">
      <add></add>
      <show></show>
      <minus></minus>
  </div>
</template>

<script>
import add from './add';
import show from './show';
import minus from './minus';
export default {
  name: 'myVuex',
  data () {
    return {
    }
  },
  components:{
      add,
      show,
      minus,
  },
  created(){
    // console.log(this);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>