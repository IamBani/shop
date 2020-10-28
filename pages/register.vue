<template>
  <el-container class="bg-white">
    <el-header height="60px" class="s-p-0 bg-white bord">
      <div class="container">
        <el-row :gutter="0" class="head">
          <el-col :span="4">
            <nuxt-link to="/">
              <logo class="logo" />
            </nuxt-link>
          </el-col>
          <el-col
            :span="4"
            :offset="16"
            class="login-block aligner aligner--centerVertical aligner--centerHoritzontal"
          >
            已有账号？
            <nuxt-link to="/login">
              <el-button type="primary" size="small">登录</el-button>
            </nuxt-link>
          </el-col>
        </el-row>
      </div>
    </el-header>
    <el-main class="container s-m-t-10">
      <el-row :gutter="0">
        <el-col :span="10">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item prop="email" label="邮箱">
              <el-row>
                <el-col :span="16">
                  <el-input v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
                </el-col>
                <el-col :span="7" class="s-m-l-16">
                  <el-button @click="send">{{verification}}</el-button>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item prop="captcha" label="验证码">
              <el-input v-model.number="ruleForm.captcha" placeholder="请输入验证码"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" placeholder="请确认密码"></el-input>
            </el-form-item>
            <el-form-item prop="resource">
              <el-checkbox v-model="ruleForm.resource"><nuxt-link to="/login">已阅读并同意用户协议和隐私政策</nuxt-link></el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                :disabled="!ruleForm.resource"
                @click="submitForm('ruleForm')"
              >注册</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-main>
    <el-footer class="container">Footer</el-footer>
  </el-container>
</template>

<script>
import logo from "@/components/search/Logo.vue";
export default {
  name: "register",
  layout: "blankspace",
  head() {
    return {
      title: "登录",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description",
        },
      ],
    };
  },
  data() {
    return {
      ruleForm: {
        email: "",
        captcha: "",
        pass: "",
        checkPass: "",
        resource: true,
      },
      rules: {
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { type: "email", message: "请输入正确的邮箱", trigger: ["blur"] },
        ],
        captcha: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          {
            type: "number",
            message: "验证码为数字",
            trigger: ["blur", "change"],
          },
        ],
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "长度在 6 到 18 个字符",
            trigger: "blur",
          },
        ],
        checkPass: [
          { required: true, message: "请确认密码", trigger: "blur" },
          {
            validator: (rule, value, callback) => {
              if (value !== this.ruleForm.pass) {
                callback(new Error("两次输入密码不一致!"));
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
        ],
      },
      verification: "发送验证码",
    };
  },
  components: {
    logo,
  },
  created(){
   
  },
  methods: {
    submitForm(ruleForm) {
      if (!this.ruleForm.resource) {
        alert("请勾选协议");
        return;
      }
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    send() {
      this.$refs.ruleForm.validateField("email", (emailError) => {
        if (!emailError) {
          alert("邮箱验证通过!");
        } else {
          console.log("邮箱验证失败");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.bord {
  border-bottom: 1px solid #eee;
  .head {
    .logo {
      /deep/.el-image {
        height: 59px !important;
        width: 60px !important;
      }
    }
    .login-block {
      height: 60px;
    }
  }
}
</style>