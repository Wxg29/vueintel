<template>
  <div class="box">
    <van-sticky :offset-top="0">
      <Header :show="true" title="视频"></Header>
    </van-sticky>

    <video :src="video" width="100%" height="320px" controls="controls"></video>
  </div>
</template>


<script>
export default {
  data() {
    return {
      video: ""
    };
  },
  mounted() {
    console.log(this.$route.params.sourceLink);
    this.video = this.$route.params.sourceLink;
  }
};
</script>


<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background: #fff;
}
</style>