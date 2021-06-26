<template>
  <el-container>
    <el-header>
      <el-menu mode="horizontal" :default-active="topMenuIndex" router="true">
        <el-menu-item index="home">注册申请</el-menu-item>
        <el-menu-item index="user">申请记录</el-menu-item>
        <el-menu-item index="admin">管理员后台</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const topMenuIndex = ref<string>('home');
    return { topMenuIndex };
  },
});
</script>

<style></style>
