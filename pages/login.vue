<template>
  <el-container class="bj">
    <el-main class="container s-m-t-100">
      <el-row :gutter="0">
        <el-col :span="3">
          <logo />
        </el-col>
        <el-col :span="8" :offset="13">
          <div class="bg-white size">
            <div class="top aligner aligner--centerVertical">
              <span
                class="aligner--grow aligner aligner--centerHoritzontal"
                :class="type===0?'active':''"
               @click="type=0,removalResult()"
              >账号密码</span>
              <span
                class="aligner--grow aligner aligner--centerHoritzontal"
                :class="type===1?'active':''"
                 @click="type=1,removalResult()"
              >验证码登录</span>
            </div>
            <el-main class="middle">
              <el-form :model="ruleForm" ref="ruleForm" v-if="type===0" :rules="rules">
                <el-form-item prop="name">
                  <el-input v-model="ruleForm.name" @keyup.enter.native="onSubmit('ruleForm')" placeholder="邮箱/手机号"></el-input>
                </el-form-item>
                <el-form-item prop="pwd" class="s-m-b-0">
                  <el-input type="password" @keyup.enter.native="onSubmit('ruleForm')" placeholder="密码" v-model="ruleForm.pwd"></el-input>
                </el-form-item>
                <div class="aligner aligner--spaceBetween s-m-t-15 s-m-b-5">
                  <el-link href="/register" :underline="false">立即注册</el-link>
                  <el-link type="warning" href="/forget" :underline="false">忘记密码？</el-link>
                </div>
                <el-form-item size="large">
                  <el-button type="primary" @click="onSubmit('ruleForm')">登录</el-button>
                </el-form-item>
              </el-form>
              <el-form :model="mobileruleForm" ref="mobileruleForm" v-if="type===1" :rules="mobilerules">
                <el-form-item prop="tell">
                  <el-row :gutter="0">
                    <el-col :span="6">
                      <el-button disabled class="prefix">+86</el-button>
                    </el-col>
                    <el-col :span="18">
                      <el-input v-model="mobileruleForm.tell"  @keyup.enter.native="onSubmit('mobileruleForm')" class="tel" placeholder="请输入手机号"></el-input>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item prop="verification">
                  <el-row :gutter="0">
                    <el-col :span="16">
                      <el-input
                        placeholder="验证码"
                        class="verification"
                        v-model.number="mobileruleForm.verification"
                        @keyup.enter.native="onSubmit('mobileruleForm')"
                      ></el-input>
                    </el-col>
                    <el-col :span="8">
                      <el-button class="send" @click="send">发送验证码</el-button>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item size="large">
                  <el-button type="primary" @click="onSubmit('mobileruleForm')">登录</el-button>
                </el-form-item>
              </el-form>
            </el-main>
            <div class="bottom">
              <el-divider>其他方式登录</el-divider>
              <div class="text-center">
                <nuxt-link to="/qq">
                  <img src="@/assets/image/qq.png" alt="qq" />
                </nuxt-link>
               <nuxt-link to="/micro-blog" class="s-p-l-10">
                  <img :src="microBlog" alt="micro-blog" />
                </nuxt-link>
                <nuxt-link to="/alipay" class="s-p-l-10">
                  <img :src="alipay" alt="alipay" />
                </nuxt-link>
                <nuxt-link to="/wechar" class="s-p-l-10">
                  <img :src="wechar" alt="wechar" />
                </nuxt-link>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-main>
    <el-footer class="container">Footer</el-footer>
  </el-container>
</template>

<script>
// import { mapGetters, mapState } from "vuex";
import logo from "@/components/search/Logo.vue";
import microBlog from "@/assets/image/micro-blog.png";
import alipay from "@/assets/image/alipay.png";
import wechar from "@/assets/image/wechar.png";
export default {
  name: "login",
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
  asyncData(context) {
    return {
      title: 123,
    };
  },
  data() {
   let tel=/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/;
    return {
      microBlog:microBlog,
      alipay:alipay,
      wechar:wechar,
      type: 0,
      email:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      ruleForm: {
        name: "",
        pwd: "",
      },
      rules:{
        name:[{ validator:(rule, value, callback)=>{
            if(value === ""){
              callback(new Error('请输入账号'));
            }else if(this.email.test(value) || tel.test(value)){
              callback(new Error('请输入正确的邮箱和手机号'))
            }else{
              callback()
            }
        },trigger: 'blur'}],
        pwd:[{validator:(rule,value,callback)=>{
          if(value === ""){
            callback(new Error('请输入密码'))
          }else{
            callback()
          }
        }},{ min: 6, max: 18, message: '长度在 6 到 18 个字符',trigger:'blur'}]
      },
      mobileruleForm: {
        verification: "",
        tell: "",
      },
      mobilerules:{
        tell:[
          {required: true,message: "请输入手机号", trigger: "blur" },
          {pattern:tel,message:'请输入正确的手机号',trigger:"blur"}
        ],
        verification:[
           {required: true,message: "请输入验证码", trigger: "blur" },
            {
              type: "number",
              message: "验证码为数字",
              trigger: ["blur"],
            },
        ]
      },
      totalPrice: this.$store.state.totalPrice,
    };
  },
  computed: {
    // ...mapGetters([
    //   "test1State", //页面配置信息
    // ]),
  },
  created() {
    
  },
  mounted(){
    this.removalResult();
  },
  methods: {
    onSubmit() {},
    removalResult(){
      if(this.$refs.mobileruleForm){
         this.$refs.mobileruleForm.clearValidate();
      }
      if(this.$refs.ruleForm){
         this.$refs.ruleForm.clearValidate();
      }
    },
    send() {
      this.$refs.mobileruleForm.validateField("tell", (tellError) => {
        if (!tellError) {
          alert("手机号验证通过!");
        } else {
          console.log("手机号验证失败");
          return false;
        }
      });
    },
    onSubmit(ruleForm){
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  components: {
    logo,
  },
};
</script>

<style lang="scss" scoped>
.bj {
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("../assets/image/b.jpg");
  width: 100%;
  height: 100%;
  .size {
    height: 350px;
    width: 350px;
    border-radius: 4px;
    .top {
      height: 50px;
      cursor: pointer;
      color: #999;
      font-size: 16px;
      border-bottom: 1px solid #d7dae2;
    }
    .active {
      color: #333;
    }
  }
  .middle {
    /deep/.el-button {
      width: 100%;
    }
    .prefix {
      cursor: auto;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .tel {
      /deep/ .el-input__inner {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
    .verification {
      /deep/ .el-input__inner {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
  .bottom {
    /deep/ .el-divider {
      margin: 0 0 18px;
    }
  }
  .send {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>