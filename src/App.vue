<template>
  <el-container>
    <el-header>
      <el-menu mode="horizontal" :default-active="$route.path" router>
        <el-menu-item index="/">注册申请</el-menu-item>
        <el-menu-item index="/inquiry">申请查询</el-menu-item>
        <el-menu-item index="/admin">管理员后台</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style></style>
