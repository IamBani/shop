<template>
   <div class="container">
      <el-row :gutter="20" class="s-h-110 aligner aligner--centerVertical">
          <el-col :span="6"><Logo></Logo></el-col>
          <el-col :span="12"><search></search></el-col>
      </el-row>
    </div>
</template>

<script>
import Logo from './Logo'
import search from './search'
export default {
    name:'searchLogo',
    components:{
        Logo,
        search
    }
}
</script>

<style>

</style>