<template>
  <div class="myRouter3Props_router3">
    <h1>{{ msg }}</h1>
    {{this.$props}}
    {{this.$props.user1}}<br>
    {{user1}}<br>
    {{this.$props.user2}}<br>
    {{user2}}<br>
    {{this.$props.age1}}<br>
    {{age1}}<br>
    {{this.$props.age2}}<br>
    {{age2}}<br>
    {{this.$props.sex1}}<br>
    {{sex1}}<br>
    {{this.$props.sex2}}<br>
    {{sex2}}<br>
    
  </div>
</template>

<script>
export default {
  props:["user1","age1","sex1","user2","age2","sex2"],
  name: 'myRouter3Props_router3',
  data () {
    return {
      msg: 'myRouter3Props_router3'
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
