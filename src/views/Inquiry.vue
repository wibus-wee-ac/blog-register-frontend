<template>
  <el-input v-model="key" style="margin-bottom: 16px">
    <template #prepend>回执Key</template>
    <template #append>
      <el-button icon="el-icon-search"></el-button>
    </template>
  </el-input>
  <el-descriptions border :column="4">
    <el-descriptions-item label="昵称"> 荆棘Justin </el-descriptions-item>
    <el-descriptions-item label="性别">
      <el-tag type="info">男</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="是否学生">
      <el-tag type="success">是</el-tag>
      <el-tag type="danger">否</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="年级">
      <el-tag>高一</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="博客名"> 螓首蛾眉 </el-descriptions-item>
    <el-descriptions-item label="博客地址" :span="3"> jsun969.cn </el-descriptions-item>
    <el-descriptions-item label="QQ" :span="2"> 1351083056 </el-descriptions-item>
    <el-descriptions-item label="Email" :span="2"> i@jsun969.cn </el-descriptions-item>
    <el-descriptions-item label="Github用户名" :span="2"> jsun969 </el-descriptions-item>
    <el-descriptions-item label="技术栈" :span="2"> null </el-descriptions-item>
    <el-descriptions-item label="审核状态">
      <el-tag type="success">已通过</el-tag>
      <el-tag type="danger">未通过</el-tag>
      <el-tag type="info">审核中</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="原因" :span="3"> idk </el-descriptions-item>
  </el-descriptions>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Inquiry',
  setup() {
    const key = ref<string>('');
    return { key };
  },
});
</script>
