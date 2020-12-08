<template>
  <div class="ele5_DataPicker">
        <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
        <el-date-picker v-model="value2" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"></el-date-picker>
  </div>
</template>

<script>
export default {
  name: "ele5_DataPicker",
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      value1: "",
      value2: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
