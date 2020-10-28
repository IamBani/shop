<template>
    <div class="container">
      <el-row :gutter="20">
          <el-col :span="18"><left></left></el-col>
          <el-col :span="6"><right></right></el-col>
      </el-row>
    </div>
</template>

<script>
import left from './left'
import right from './right'
export default {
    name:'sHerder',
    data(){
        return{

        }
    },
    components:{
        left,
        right
    }
}
</script>

<style>

</style>