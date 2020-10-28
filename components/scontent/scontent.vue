<template>
  <div class="container s-m-t-50">
    <div class="aligner--spaceBetween rounded-corners aligner aligner--centerVertical">
      <span class="title">猜你喜欢</span>
      <span class="more">
       <nuxt-link to="/login">更多 <i class="el-icon-arrow-right"></i></nuxt-link></span>
    </div>
    <ul>
      <el-row :gutter="20" class="grid">
        <el-col :span="6" v-for="(o, index) in 14" :key="o" class="card">
          <el-card :body-style="{ padding: '0px' }">
             <el-image
              style="width: 100%;"
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              fit="contain"></el-image>
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <!-- <time class="time">{{ currentDate }}</time> -->
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </ul>
  </div>
</template>

<script>
export default {
  name: "scontent",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-family: "MFShangHei-Regular" !important;
  font-size: 22px;
  line-height: 58px;
  color: #333;
}
.more {
  font-size: 16px;
  line-height: 58px;
}
.grid{
  .card{
    &:nth-child(n+5){
      margin-top: 20px;
    }
  }
}
</style>