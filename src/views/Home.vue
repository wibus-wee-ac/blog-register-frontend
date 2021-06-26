<template>
  <el-card class="box-card">
    <template #header>
      <span>登记处</span>
    </template>
    <el-form :model="mainForm">
      <el-row :gutter="10">
        <el-col :span="20">
          <el-form-item label="昵称" prop="name">
            <el-input v-model="mainForm.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="性别" prop="sex">
            <el-radio v-model="mainForm.sex" label="false">男</el-radio>
            <el-radio v-model="mainForm.sex" label="true">女</el-radio>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="6">
          <el-form-item label="博客名" prop="blogName">
            <el-input v-model="mainForm.blogName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item label="博客地址" prop="blogUrl">
            <el-input v-model="mainForm.blogUrl"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="12">
          <el-form-item label="QQ" prop="qq">
            <el-input v-model="mainForm.qq"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Email" prop="email">
            <el-input v-model="mainForm.email"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">
          <el-form-item label="是否学生" prop="isStudent">
            <el-switch v-model="mainForm.isStudent"></el-switch>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="年级" prop="grade">
            <el-select v-model="mainForm.grade" placeholder="请选择" :disabled="!gradeAvailable">
              <el-option :value="0" label="初一"> </el-option>
              <el-option :value="1" label="初二"> </el-option>
              <el-option :value="2" label="初三"> </el-option>
              <el-option :value="3" label="高一"> </el-option>
              <el-option :value="4" label="高二"> </el-option>
              <el-option :value="5" label="高三"> </el-option>
              <el-option :value="6" label="大一"> </el-option>
              <el-option :value="7" label="大二"> </el-option>
              <el-option :value="8" label="大三"> </el-option>
              <el-option :value="9" label="大四"> </el-option>
              <el-option :value="10" label="其他"> </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="开发意向" prop="doDev">
            <el-switch v-model="mainForm.doDev"></el-switch>
          </el-form-item>
        </el-col>
      </el-row>
      <el-collapse-transition>
        <el-row :gutter="10" v-show="mainForm.doDev">
          <el-col :span="6">
            <el-form-item label="Github用户名" prop="github">
              <el-input v-model="mainForm.github"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="18">
            <el-form-item label="技术栈" prop="devStack">
              <el-input v-model="mainForm.devStack" placeholder="例如: python , php , javascript , c++ , java..."></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-collapse-transition>
      <el-row>
        <el-col :span="14" :offset="10">
          <el-form-item>
            <el-button type="primary" @click="submit">提交</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

interface Form {
  name: string;
  sex: boolean | null;
  blogName: string;
  blogUrl: string;
  qq: string;
  email: string;
  isStudent: boolean;
  grade: number | null;
  doDev: boolean;
  github: string;
  devStack: string;
}

export default defineComponent({
  name: 'Home',
  setup() {
    const mainForm = ref<Form>({
      name: '',
      sex: null,
      blogName: '',
      blogUrl: '',
      qq: '',
      email: '',
      isStudent: true,
      grade: null,
      doDev: false,
      github: '',
      devStack: '',
    });
    const gradeAvailable = ref<boolean>(true);
    // 不是学生则 年级 改为 其他
    watch(
      () => mainForm.value.isStudent,
      () => {
        if (mainForm.value.isStudent) {
          mainForm.value.grade = null;
          gradeAvailable.value = true;
        } else {
          mainForm.value.grade = 10;
          gradeAvailable.value = false;
        }
      }
    );
    return { mainForm, gradeAvailable };
  },
});
</script>
