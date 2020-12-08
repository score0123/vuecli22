<template>
  <div class="ele6_Rate">
    <el-rate v-model="value1"></el-rate>
    <el-rate v-model="value2" :colors="colors"></el-rate>

    <el-rate v-model="value3" show-text></el-rate>

    <el-rate
      v-model="value5"
      disabled
      show-score
      text-color="#ff9900"
      score-template="{value}"
    >
    </el-rate>
  </div>
</template>

<script>
export default {
  name: "ele6_Rate",
  data() {
    return {
      value1: null,
      value2: null,
      value3: null,
      colors: ["#99A9BF", "red", "green"],
      // colors: ['#99A9BF', '#F7BA2A','#FF9900']
      // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }

      value5: 3.6,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
