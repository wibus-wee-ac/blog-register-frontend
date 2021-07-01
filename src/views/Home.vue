<template>
  <el-card style="margin-bottom: 8px">
    <h2>“学生博客联盟”公约 （2021年6月12日第一次拟定）试行</h2>
    <p>
      在加入学生博客联盟之起请您阅读本条约，如果本公约触犯了你的某些权益，那就请勿申请。本公约在你加入联盟即日起生效，请遵守条约。
    </p>
    <h3>第一条 总则</h3>
    <p>
      “学生博客联盟”由一代学生接管的联盟组织，本联盟是一个非盈利的博客联盟。但与其他联盟不同的是我们只对学生开放申请；由于是学生为主，我们会开展一系列的活动，以培养同学们的写作、交际、领导、思考等能力，所以这也是一项非常有意义的活动。
    </p>
    <h3>第二条 申请条件</h3>
    <div>
      <p>
        1、需要具有独立域名，域名的注册和使用符合ICANN 的要求。例如：.com
        .cn等，谢绝使用二级分发域名，同时你必须有你博客主域名的所有权。
      </p>
      <p>2、备案要求：不限制是否备案，你们如果18+的话能备案则备案，备案信息拒绝代理备案，因为代理备案具有一切不稳定性。</p>
      <p>
        3、内容要求：博客不得含有违反中国大陆相关法律法规的内容。文章类型不限，但有8篇以上的原创内容，不包括转载文章。内容比较推荐学习笔记、生活记录、教程分享等。整体原创文章需进行转载申明，原创文章请注释为原创。
      </p>
    </div>
  </el-card>
  <el-alert title="如遇问题 , 请联系 QQ 1351083056" type="info" :closable="false" show-icon style="margin-bottom: 8px">
  </el-alert>
  <el-alert
    title="请妥善保存提交成功后的回执Key以便查询审核状态"
    type="warning"
    :closable="false"
    show-icon
    style="margin-bottom: 8px"
  >
  </el-alert>
  <el-card class="box-card">
    <template #header>
      <span>登记处</span>
    </template>
    <el-form :model="mainForm" ref="mainFormRef" :rules="formRules">
      <el-row :gutter="10">
        <el-col :span="20" :xs="24">
          <el-form-item label="昵称" prop="name">
            <el-input v-model="mainForm.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4" :xs="24">
          <el-form-item label="性别" prop="sex">
            <el-radio v-model="mainForm.sex" label="false">男</el-radio>
            <el-radio v-model="mainForm.sex" label="true">女</el-radio>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="6" :xs="24">
          <el-form-item label="博客名" prop="blogName">
            <el-input v-model="mainForm.blogName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="18" :xs="24">
          <el-form-item label="博客地址" prop="blogUrl">
            <el-input v-model="mainForm.blogUrl"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="12" :xs="24">
          <el-form-item label="QQ" prop="qq">
            <el-input v-model="mainForm.qq"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12" :xs="24">
          <el-form-item label="Email" prop="email">
            <el-input v-model="mainForm.email"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4" :xs="24">
          <el-form-item label="是否学生" prop="isStudent">
            <el-switch v-model="mainForm.isStudent"></el-switch>
          </el-form-item>
        </el-col>
        <el-col :span="8" :xs="24">
          <el-form-item label="年级" prop="grade">
            <el-select v-model="mainForm.grade" placeholder="请选择" :disabled="!gradeAvailable">
              <el-option v-for="item in gradeOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="10" :xs="24">
          <el-form-item label="参与开发" prop="doDev">
            <el-switch v-model="mainForm.doDev"></el-switch>
          </el-form-item>
        </el-col>
      </el-row>
      <el-collapse-transition>
        <el-row :gutter="10" v-show="mainForm.doDev">
          <el-col :span="6" :xs="24">
            <el-form-item label="Github用户名" prop="github">
              <el-input v-model="mainForm.github"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="18" :xs="24">
            <el-form-item label="技术栈" prop="devStack">
              <el-input v-model="mainForm.devStack" placeholder="例如: python , php , javascript , c++ , java..."></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-collapse-transition>
      <el-row>
        <el-col :span="14" :offset="10">
          <el-form-item>
            <el-button type="primary" @click="submitForm()">提交</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-card>
  <el-dialog title="提交成功" v-model="dialog.visible" width="30%" :before-close="reloadPage">
    <span>您的回执Key是</span>
    <span style="font-weight: bolder">{{ dialog.content }}</span>
    <br />
    <span>请妥善保存以便查询审核状态</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="copyReceiptKey" :disabled="copyButton.disabled">{{ copyButton.content }}</el-button>
        <el-button type="primary" @click="reloadPage">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { sendMainForm } from '../api';
import { RuleItem } from 'async-validator';

interface gradeOption {
  value: number;
  label: string;
}
type gradeOptions = gradeOption[];

interface CustomRuleItem extends RuleItem {
  trigger: string;
}
type CustomRule = CustomRuleItem | CustomRuleItem[];
type CustomRules = Record<string, CustomRule>;

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

interface Dialog {
  visible: boolean;
  content: string;
}

interface CopyButton {
  content: string;
  disabled: boolean;
}

export default defineComponent({
  name: 'Home',
  setup() {
    // 动态生成年级选择器
    const gradeOptions = ref<gradeOptions>([
      { value: 0, label: '初一' },
      { value: 1, label: '初二' },
      { value: 2, label: '初三' },
      { value: 3, label: '高一' },
      { value: 4, label: '高二' },
      { value: 5, label: '高三' },
      { value: 6, label: '大一' },
      { value: 7, label: '大二' },
      { value: 8, label: '大三' },
      { value: 9, label: '大四' },
      { value: 10, label: '其他' },
    ]);
    const formRules = ref<CustomRules>({
      name: [
        { required: true, message: '请输入昵称', trigger: 'blur' },
        { max: 15, message: '长度15个字符之间', trigger: 'blur' },
      ],
      sex: { required: true, message: '请选择性别', trigger: 'blur' },
      blogName: [
        { required: true, message: '请输入博客名', trigger: 'blur' },
        { min: 3, max: 25, message: '长度在3到25之间', trigger: 'blur' },
      ],
      blogUrl: [
        { required: true, message: '请输入博客地址', trigger: 'blur' },
        {
          pattern: /^https:\/\/([a-zA-Z0-9-]+\.)+[a-zA-Z]+$/,
          message: '请输入网址(务必添加 https 协议头 , 结尾勿添加 / )',
          trigger: 'change',
        },
        { max: 60, message: '长度小于60个字符', trigger: 'blur' },
      ],
      qq: [
        { required: true, message: '请输入QQ', trigger: 'blur' },
        { pattern: /^\d{1,}$/, message: '请输入合法的QQ帐号', trigger: 'change' },
        { min: 7, max: 20, message: '长度在7到20之间', trigger: 'blur' },
      ],
      email: [
        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
        { type: 'email', message: '请输入合法的邮箱地址', trigger: 'change' },
        { min: 3, max: 50, message: '长度在3到50之间', trigger: 'blur' },
      ],
      grade: { required: true, message: '请选择年级', trigger: 'change' },
      github: { max: 30, message: '长度在30个字符内', trigger: 'change' },
      devStack: { max: 50, message: '长度在50个字符内', trigger: 'change' },
    });
    const mainFormRef = ref<any>(null);
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
    const dialog = ref<Dialog>({
      visible: false,
      content: '',
    });
    const copyButton = ref<CopyButton>({
      content: '一键复制',
      disabled: false,
    });
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
    // 提交表单
    const submitForm = () => {
      mainFormRef.value.validate(async (valid: unknown) => {
        if (valid) {
          const {
            data: { receipt_key },
          } = await sendMainForm({
            name: mainForm.value.name,
            sex: mainForm.value.sex,
            blog_name: mainForm.value.blogName,
            blog_url: mainForm.value.blogUrl,
            qq: mainForm.value.qq,
            email: mainForm.value.email,
            is_student: mainForm.value.isStudent,
            grade: mainForm.value.grade,
            do_dev: mainForm.value.doDev,
            github: mainForm.value.github,
            dev_stack: mainForm.value.devStack,
          });
          // 显示弹窗
          dialog.value.content = receipt_key;
          dialog.value.visible = true;
        }
      });
    };
    // 一键复制回执Key
    const copyReceiptKey = async () => {
      await navigator.clipboard.writeText(dialog.value.content);
      copyButton.value.content = '已复制';
      copyButton.value.disabled = true;
    };
    // 关闭弹窗刷新页面
    const reloadPage = () => {
      location.reload();
    };
    return {
      formRules,
      mainFormRef,
      mainForm,
      gradeAvailable,
      submitForm,
      dialog,
      copyButton,
      copyReceiptKey,
      reloadPage,
      gradeOptions,
    };
  },
});
</script>
