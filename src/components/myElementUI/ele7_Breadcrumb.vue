<template>
  <div class="ele7_Breadcrumb">
    <el-breadcrumb separator="/"> <!-- / 号 分隔 -->
    <!-- <el-breadcrumb separator-class="el-icon-arrow-right">   可以换为 > 分割符 间隔   -->   
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
<!--  <el-breadcrumb-item>        <a href="/">首页</a></el-breadcrumb-item> -->
      <el-breadcrumb-item :to="{path:'/myElementUI'}">myElementUI页面</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/myMintUI'}">myMintUI页面</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/myVant'}">myVant页面</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/myElementUI/ele1_InputNumber'}">计数器</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'ele7_Breadcrumb',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
