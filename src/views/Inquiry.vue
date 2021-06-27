<template>
  <el-input v-model="key" style="margin-bottom: 16px" @keyup.enter="queryInfo">
    <template #prepend>回执Key</template>
    <template #append>
      <el-button icon="el-icon-search" @click="queryInfo"></el-button>
    </template>
  </el-input>
  <transition name="el-zoom-in-top">
    <el-descriptions border :column="4" v-show="displayQuery">
      <el-descriptions-item label="昵称"> {{ user.name }} </el-descriptions-item>
      <el-descriptions-item label="性别">
        <el-tag type="info">{{ user.sex }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="是否学生" :span="user.isStudent ? 1 : 2">
        <el-tag type="success" v-if="user.isStudent">是</el-tag>
        <el-tag type="danger" v-else>否</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="年级" v-if="user.isStudent">
        <el-tag>{{ user.grade }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="博客名">{{ user.blogName }}</el-descriptions-item>
      <el-descriptions-item label="博客地址" :span="3">{{ user.blogUrl }}</el-descriptions-item>
      <el-descriptions-item label="QQ" :span="2">{{ user.qq }}</el-descriptions-item>
      <el-descriptions-item label="Email" :span="2">{{ user.email }}</el-descriptions-item>
      <el-descriptions-item label="Github用户名" :span="2" v-if="user.doDev">{{ user.github }}</el-descriptions-item>
      <el-descriptions-item label="技术栈" :span="2" v-if="user.doDev">{{ user.devStack }}</el-descriptions-item>
      <el-descriptions-item label="审核状态">
        <el-tag :type="['success', 'danger', 'info'][user.isPass]">{{ ['已通过', '未通过', '审核中'][user.isPass] }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="原因" :span="3" v-if="user.isPass === 1"> {{ user.refuseReason }} </el-descriptions-item>
    </el-descriptions>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { getUserByReceipt } from '../api';

interface UserInfo {
  name: string;
  sex: string;
  blogName: string;
  blogUrl: string;
  qq: string;
  email: string;
  isStudent: boolean;
  grade: string;
  doDev: boolean;
  github: string;
  devStack: string;
  isPass: number;
  refuseReason: string;
}

export default defineComponent({
  name: 'Inquiry',
  setup() {
    const key = ref<string>('');
    const displayQuery = ref<boolean>(false);
    const user = ref<UserInfo>({
      name: '',
      sex: '',
      blogName: '',
      blogUrl: '',
      qq: '',
      email: '',
      isStudent: false,
      grade: '',
      doDev: false,
      github: '',
      devStack: '',
      isPass: 0,
      refuseReason: '',
    });
    const queryInfo = async () => {
      const { data } = await getUserByReceipt(key.value);
      if (data) {
        displayQuery.value = true;
        const {
          name,
          sex,
          blog_name,
          blog_url,
          qq,
          email,
          is_student,
          grade,
          do_dev,
          github,
          dev_stack,
          is_pass,
          refuse_reason,
        } = data;
        user.value.name = name;
        user.value.sex = sex ? '女' : '男';
        user.value.blogName = blog_name;
        user.value.blogUrl = blog_url;
        user.value.qq = qq;
        user.value.email = email;
        user.value.isStudent = is_student;
        user.value.grade = ['初一', '初二', '初三', '高一', '高二', '高三', '大一', '大二', '大三', '大四', '其他'][grade];
        user.value.doDev = do_dev;
        user.value.github = github;
        user.value.devStack = dev_stack;
        if (is_pass) {
          user.value.isPass = 0;
        } else {
          if (refuse_reason === '') {
            user.value.isPass = 2;
          } else {
            user.value.isPass = 1;
          }
        }
        user.value.refuseReason = refuse_reason;
      } else {
        displayQuery.value = false;
      }
    };
    return { key, displayQuery, queryInfo, user };
  },
});
</script>
