<template>
  <div class="ele1_InputNumber">
    <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
    <el-input-number v-model="num2" :disabled="false"></el-input-number>
    <el-input-number v-model="num3" :step="10"></el-input-number>
    <el-input-number v-model="num4" :precision="5" :step="0.5" :max="10"></el-input-number>

    <el-input-number v-model="num"></el-input-number>
    <el-input-number size="medium" v-model="num"></el-input-number>
    <el-input-number size="small" v-model="num"></el-input-number>
    <el-input-number size="mini" v-model="num"></el-input-number>

    <el-input-number v-model="num" controls-position="right" :min="1" :max="5"></el-input-number>
  </div>
</template>

<script>
// import Vue from "vue";
// import {InputNumber} from "element-ui"


export default {
  name: 'ele1_InputNumber',
  data () {
    return {
      num: 1,
      num2: 10,
      num3: 0,
      num4: 0,
    }
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
