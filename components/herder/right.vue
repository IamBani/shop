<template>
  <div class="user-login">
    <el-row>
      <el-col :span="4">
        <nuxt-link to="/register">注册</nuxt-link>
      </el-col>
      <el-col :span="4">
        <nuxt-link to="/login">登录</nuxt-link>
      </el-col>
      <el-col :span="8">
        <el-badge :value="100" :max="10" class="dge">
            <nuxt-link to="/login">
                消息通知
            </nuxt-link>
        </el-badge>
      </el-col>
      <el-col :span="8" class="shopcart">
        <nuxt-link to="/login" class="cart">
          <i class="el-icon-shopping-cart-1"></i>
          <span>购物车</span>
          <span>({{num}})</span>
        </nuxt-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "right",
  data() {
    return {
      num: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.user-login {
    .dge{
        line-height:normal;
        vertical-align:baseline;
    }
  .shopcart {
    height: 45px;
    &:hover {
      background-color: #ffffff;
    }
  }
}
</style>