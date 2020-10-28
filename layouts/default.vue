<template>
  <el-container>
    <el-header height="160px" class="s-p-0 bg-white h">
      <div class="bjcolor">
        <s-herder></s-herder>
      </div>
      <searchLogo></searchLogo>
    </el-header>
    <el-main class="middlecontainer">
      <nuxt />
    </el-main>
    <el-footer class="container">Footer</el-footer>
  </el-container>
</template>

<script>
import sHerder from "@/components/herder/sHerder";
import searchLogo from "@/components/search/searchLogo";
export default {
  head: {
    titleTemplate: "好看商城",
    meta: [
      { hid: "description", name: "description", content: "啥都卖" },
      { hid: "keywords", name: "keywords", content: "好货进到这里来" },
    ],
  },
  data() {
    return {};
  },
  components: {
    sHerder,
    searchLogo,
  },
};
</script>
<style lang="scss" scoped>
 .h{
  box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.1);
  .bjcolor {
    width: 100%;
    height: 45px !important;
    background-color: #17233d;
    line-height: 45px;
  }
}
.middlecontainer {
  overflow: hidden;
}
</style>
