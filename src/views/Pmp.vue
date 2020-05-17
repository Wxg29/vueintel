<template>
  <div class="box" :class="animateClass">
    <Header title="项目管理"></Header>
    <van-tabs v-model="active" title-active-color="#007aff" color="#007aff" animated>
      <van-tab title="成功案例">
        <div class="spmp">
          <div class="spmp-title" v-for="(v,i) in spmpList" :key="i" @click="gotospmp2(v)">
            <img :src="v.coverImg" alt />
          </div>
        </div>
      </van-tab>
      <van-tab title="高峰论坛">
        <div class="spmp">
          <div class="spmp-title" v-for="(v,i) in pmpList" :key="i" @click="gotospmp2(v)">
            <img :src="v.coverImg" alt />
          </div>
        </div>
      </van-tab>
      <van-tab title="解决方案">
        <van-empty description="暂无最新方案" />
      </van-tab>
    </van-tabs>
  </div>
</template>



<script>
import { animate } from "@/utils";
export default {
  mixins: [animate],
  data() {
    return {
      active: 0,
      spmpList: {},
      pmpList: {}
    };
  },
  mounted() {
    // 成功案例
    this.$axios.post("/inl/api/caseData/getList").then(res => {
      this.spmpList = res.data.data;
    });
    // 高峰论坛
    this.$axios.post("/inl/api/summits/getList").then(res => {
      this.pmpList = res.data.data;
    });
  },
  methods: {
    gotospmp2(v) {
      this.$router.push({
        name: "spmpto",
        params: {
          id: v.id
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background: #ffffff;
  .spmp {
    .spmp-title {
      width: 100%;
      height: 220px;
      margin: 0 0 30px 0;
      img {
        width: 100%;
        height: 220px;
      }
    }
  }
}
</style>