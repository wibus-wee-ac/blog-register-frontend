<template>
  <el-footer>
    <code>ICP</code>&nbsp;&nbsp;浙B2-20080101&nbsp;&nbsp;|&nbsp;&nbsp;<span class="main_name">学生博客联盟</span
    >&nbsp;&nbsp;|&nbsp;&nbsp;<code>公安</code> 11010502030143
  </el-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
});
</script>

<style>
.el-footer {
  font-family: -apple-system, 'Noto Sans', 'Helvetica Neue', Helvetica, 'Nimbus Sans L', Arial, 'Liberation Sans', 'PingFang SC',
    'Hiragino Sans GB', 'Noto Sans CJK SC', 'Source Han Sans SC', 'Source Han Sans CN', 'Microsoft YaHei', 'Wenquanyi Micro Hei',
    'WenQuanYi Zen Hei', 'ST Heiti', SimHei, 'WenQuanYi Zen Hei Sharp', sans-serif;
  font-size: 14px;
  display: flex;
  border-radius: 13px;
  background: #e0e0e0;
  box-shadow: 5px 5px 5px #bebebe;
  justify-content: center;
  align-items: center;
}
.main_name {
  font-size: 15px;
  font-family: -apple-system, serif, Segoe UI, Roboto, Helvetica Neue, Arial, 'Noto Serif SC', PingFang SC, Microsoft Yahei UI,
    Microsoft Yahei;
}
.el-footer code {
  margin: 0;
  padding: 5px;
  font-size: 85%;
  border-radius: 3px;
  font-family: mononoki, Consolas, Liberation Mono, Menlo, Courier, monospace, Apple Color Emoji, Segoe UI Emoji,
    Noto Color Emoji, Segoe UI Symbol, Android Emoji, EmojiSymbols;
  word-break: break-word;
  background-size: 20px 20px;
  white-space: pre-wrap;
  background-color: rgba(186, 204, 209, 0.877);
}
</style>
