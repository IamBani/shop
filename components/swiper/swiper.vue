<template>
  <div class="container">
    <el-row :gutter="0">
      <el-col :span="4">
        <ul class="category-nav-container aligner bg-white s-h-433">
          <li
            v-for="(item,index) in classify"
            :key="index"
            class="aligner--grow aligner aligner--spaceBetween aligner--centerVertical nav-li" @mouseenter="enter(index)" @mouseleave="leave"
          >
           <nuxt-link to="/login"  class="aligner aligner--spaceBetween aligner--centerVertical">
                <div class>
                <i :class="item.icon"></i>
                <span>{{item.name}}</span>
                </div>
                <i class="el-icon-arrow-right"></i>
             </nuxt-link>
          </li>
           <div class="more s-h-433" v-show="num !==''" @mouseenter="moreenter" @mouseleave="leave">
               <div class="" v-for="(item) in classifychild" :key="item.id">
                    <h1>{{item.title}}</h1>
                    <ul class="aligner aligner--centerVertical">
                        <li v-for="ele in item.child" :key="ele">
                            <nuxt-link to="/login">{{ele}}</nuxt-link>
                        </li>
                    </ul>
               </div>
           </div>
        </ul>
      </el-col>
      <el-col :span="20">
        <el-carousel trigger="click" height="433px">
          <el-carousel-item v-for="item in list" :key="item.url">
            <nuxt-link :to="item.url">
              <el-image :src="item.image" fit="cover"></el-image>
            </nuxt-link>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import image1 from "@/assets/image/1.jpg";
import image2 from "@/assets/image/2.jpg";
import image3 from "@/assets/image/3.jpg";
import image4 from "@/assets/image/4.jpg";
export default {
  name: "swiper",
  data() {
    return {
        num:'',
      list: [
        { image: image1, url: "/a" },
        { image: image2, url: "/b" },
        { image: image3, url: "/c" },
        { image: image4, url: "/d" },
      ],
      classify: [
        { name: "美食", icon: "el-icon-eleme",children:[{
            id:0,
            title:'川菜',
            child:['鱼香肉丝','麻婆豆腐','酸菜鱼']
        }] },
        { name: "电影", icon: "el-icon-office-building" },
        { name: "学习培训", icon: "el-icon-office-building" },
        { name: "生活娱乐", icon: "el-icon-office-building" },
        { name: "酒店", icon: "el-icon-office-building" },
        { name: "医院", icon: "el-icon-office-building" },
        { name: "景点", icon: "el-icon-office-building" },
        { name: "火车站", icon: "el-icon-office-building" },
        { name: "商场", icon: "el-icon-office-building" },
        { name: "酒吧", icon: "el-icon-office-building" },
        { name: "公园", icon: "el-icon-office-building" },
        { name: "民宿", icon: "el-icon-office-building" },
        { name: "网红打卡点", icon: "el-icon-office-building" },
        { name: "家装", icon: "el-icon-office-building" },
        { name: "好车", icon: "el-icon-office-building" },
      ],
    }
  },
  computed:{
      classifychild(){
          return this.num===""?[]:this.classify[this.num].children
      }
  },
  methods:{
      enter(i){
           clearTimeout(this.shut);
           this.num=i;
      },
      leave(){
         this.shut = setTimeout(()=>{
              this.num='';
          },100)
      },
     moreenter(){
         clearTimeout(this.shut);
     }
  }
};
</script>

<style lang="scss" scoped>
.category-nav-container {
    flex-direction: column;
    position: relative;
    z-index: 100000;
  .nav-li {
    box-sizing: border-box;
    padding: 0 12px;
    color: #646464;
    &:hover{
      background-color:#E6A23C;
    }
    &:hover a{
        color:#fff;
    }
  }
  .more{
      position: absolute;
      left:196px;
      top: 0px;
      width: 400px;
      background-color: #fff;
      z-index: 10000;
      border-left:1px solid #eee;
  }
}
</style>