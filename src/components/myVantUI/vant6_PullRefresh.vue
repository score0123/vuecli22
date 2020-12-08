<template>
  <div class="vant6_PullRefresh">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="下拉出来的东西">
      <p>刷新次数: {{ count }}</p>
    </van-pull-refresh>
  </div>
</template>

<script>
import {Toast,PullRefresh} from 'vant'

export default {
  name: 'vant6_PullRefresh',
  data () {
    return {
      count: 0,
      isLoading: false,
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.van-pull-refresh{
  height:1000px;
}
</style>
