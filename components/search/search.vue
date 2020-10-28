<template>
     <el-autocomplete
     id="input"
      class="s-btn"
      v-model.lazy="value"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入内容"
      :popper-append-to-body="false"
      placement="bottom"
     @select="handleSelect"
    > 
     <el-button slot="append" type="primary" icon="el-icon-search"></el-button>
    </el-autocomplete>
</template>

<script>
export default {
    name:'search',
    data(){
        return{
            value:'',
            list:[],
            hotdata:[
                { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
                { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
                { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
                { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
            ],
        }
    },
    methods:{
         querySearchAsync(queryString, cb){
             let restaurants=queryString===""?this.hotdata:this.searchdata(queryString);
             cb(restaurants);
         },
         searchdata(queryString){
             console.log(queryString);
             return[ { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
                { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
                { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },]
         },
        handleSelect(item){
            document.getElementById('input').blur();
            console.log(item);
             const newpage = this.$router.resolve({path: '/login', params: {id: item.value}})
             window.open(newpage.href,)
            // this.$router.push({path:'/login'})
        },
    }
}
</script>

<style lang="scss" scoped>
.s-btn{
    display: block;
    .el-button--primary {
        border-bottom-left-radius:0;
        border-top-left-radius:0 ;
        color: #FFF;
        background-color: #409EFF;
        border-color: #409EFF;
    }
}

</style>