<template>
 <div>
  <swiper></swiper>
  <scontent></scontent>
 </div>
</template>

<script>
import swiper from "@/components/swiper/swiper"
import scontent from "@/components/scontent/scontent"
import api from '@/assets/api';
export default {
  name:'index',
//  async asyncData(context) {
//     let response= await api(context,"/about",{q:'你好'});
//     return{
//       title:response
//     }
//   },
  data(){
    return{
      title:''
    }
  },
  components:{
    swiper,
    scontent
  }
}
</script>

<style>

</style>
