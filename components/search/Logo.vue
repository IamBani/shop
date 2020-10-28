<template>
  <div>
      <el-image
          style="width: 100px; height: 100px"
          :src="url"
          :fit="fit"></el-image>
  </div>
</template>
<script>
import logo from "@/assets/image/logo.jpg"
export default {
  name:'Logo',
  data(){
    return{
      url:logo,
      fit:'cover'
    }
  }
}
</script>
<style>

</style>
