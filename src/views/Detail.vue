<template>
  <div class="detail">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/about' }">列表数据</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
    </el-breadcrumb>
    <FbPage :schema="schema"/>
  </div>
</template>

<script>
import finbox from 'finbox';
console.log(finbox, 'finbox');
import detail from '../schema/detail';
export default {
  data() {
    return {
      schema: detail,
    };
  },

  components: {
    FbPage: finbox.components.FbPage
  },
};
</script>

<style>
.el-breadcrumb {
  margin-bottom: 20px;
}
</style>