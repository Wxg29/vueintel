<template>
  <div class="box">
    <van-sticky :offset-top="0">
      <Header :show="true" title="视频"></Header>
    </van-sticky>
    <div class="video">
      <iframe :src="video" width="98%" height="320px"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      video: "",
      flag: ""
    };
  },
  mounted() {
    console.log(this.$route.params.url);
    this.video = this.$route.params.url;
  }
};
</script>