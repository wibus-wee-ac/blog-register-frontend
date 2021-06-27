<template>
  <el-table :data="memberData" border lazy>
    <el-table-column prop="name" label="昵称"> </el-table-column>
    <el-table-column prop="blog_name" label="博客名"> </el-table-column>
    <el-table-column prop="blog_url" label="博客地址"> </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { getPassedUsers } from '../api';

export default defineComponent({
  name: 'Members',
  setup() {
    const memberData = ref([]);
    onMounted(async () => {
      const { data } = await getPassedUsers();
      memberData.value = data;
    });
    return { memberData };
  },
});
</script>
