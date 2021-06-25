<template>
  <el-container>
    <el-header>
      <el-menu mode="horizontal" :default-active="topMenuIndex">
        <el-menu-item index="1">注册申请</el-menu-item>
        <el-menu-item index="2">申请记录</el-menu-item>
        <el-menu-item index="3">管理员后台</el-menu-item>
      </el-menu>
    </el-header>
    <el-main> Main </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const topMenuIndex = ref<string>('1');
    return { topMenuIndex };
  },
});
</script>

<style></style>
