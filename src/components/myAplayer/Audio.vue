<template>
  <div class="Audio">
    <router-link to="/Audio/myAplayer">myAplayer</router-link>
    <router-link to="/Audio/myVueVideoPlayer">myVueVideoPlayer</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Audio',
  data () {
    return {
      msg: 'Audio'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
