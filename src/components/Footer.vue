<template>
  <div class="container">
    <span>
      <code>粤ICP备</code>
      <el-link href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank"> 2021069486号-1 </el-link>
    </span>
    <el-divider direction="vertical"></el-divider>
    <span class="main-name">学生博客联盟</span>
    <el-divider direction="vertical"></el-divider>
    <span>
      <code><img src="../assets/备案图标.png" alt="备案图标" />蒙公网安备</code>
      <el-link href="http://www.beian.gov.cn/portal/registerSystemInfo" target="_blank"> 15012102000207号 </el-link>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
});
</script>

<style>
.container {
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-name {
  font-size: 15px;
}
.container code {
  margin-right: 4px;
  padding: 5px;
  font-size: 85%;
  border-radius: 3px;
  word-break: break-word;
  background-size: 20px 20px;
  background-color: rgba(186, 204, 209, 0.877);
}
.container img {
  margin-right: 5px;
  margin-bottom: -5px;
}
</style>
