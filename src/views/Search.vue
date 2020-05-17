<template>
  <div>
    <Header title="搜索" :show="true" :search="true"></Header>
    <form class="search" action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
  </div>
</template>


<script>
// import { Toast } from "vant";

export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch(val) {
      console.log(val);
    },
    onCancel() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>