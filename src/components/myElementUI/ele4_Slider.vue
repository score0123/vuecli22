<template>
  <div class="ele4_Slider">
    <el-slider v-model="value1" @change="h"></el-slider>
    <el-slider v-model="value2" :show-tooltip="false"  @change="h"></el-slider>
    <el-slider v-model="value3" :format-tooltip="formatTooltip"  @change="h"></el-slider>
  </div>
</template>

<script>
export default {
  name: 'ele4_Slider',
  data () {
    return {
      value1:30,
      value2:50,
      value3:70
    }
  },
  methods: {
    formatTooltip(val) {
      return val / 100;
    },
    h(e){
      console.log(e);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
