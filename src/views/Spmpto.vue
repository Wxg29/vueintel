<template>
  <div class="box">
    <van-sticky :offset-top="0">
      <Header :show="true" title="论坛"></Header>
    </van-sticky>

    <div class="spmp">
      <div class="spmpitem" v-for="(v,i) in spmpList" :key="i">
        <img @click="watchPmp(v)" :src="v.coverImg" alt />
        <p>{{v.name}}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      sid: "",
      spmpList: {}
    };
  },
  mounted() {
    console.log(this.$route);
    this.sid = this.$route.params.id;
    this.$axios.post("/inl/api/summitData/getList?id=" + this.sid).then(res => {
      this.spmpList = res.data.data;
    });
  },
  methods: {
    watchPmp(v) {
      this.$router.push({
        name: "watchpmp",
        params: {
          url: v.url
        }
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.box {
  .spmpitem {
    display: flex;
    img {
      padding: 10px;
      width: 50%;
      height: 120px;
    }
    p {
      padding: 10px 5px;
      width: 50%;
      height: 120px;
      line-height: 120px;
    }
  }
}
</style>