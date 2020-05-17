<template>
  <div class="box">
    <van-sticky :offset-top="0">
      <Header :show="true" title="资讯"></Header>
    </van-sticky>

    <div class="w-content">
      <h3>{{content.title}}</h3>
      <p v-html="content.content"></p>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      id: "",
      content: ""
    };
  },
  mounted() {
    console.log(this.$route);
    this.id = this.$route.params.id;
    this.$axios.get("/inl/api/news/getNews?id=" + this.id).then(res => {
      this.content = res.data;
    });
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background: #ffffff;
  .w-content {
    h3 {
      font-size: 18px;
      padding: 10px 20px;
      //   overflow: hidden;
      //   text-overflow: ellipsis;
      //   white-space: nowrap;
    }
    p {
      padding: 0 15px;
      font-size: 13px;
    }
  }
}
</style>