<template>
  <div>
    <van-nav-bar
      :title="title"
      :left-text="show?'返回':''"
      :left-arrow="show"
      @click-left="onClickLeft"
    >
      <template #right>
        <van-icon v-if="!search" @click="gotoSearch" name="search" size="38" />
      </template>
    </van-nav-bar>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  props: {
    show: Boolean,
    title: String,
    search: Boolean
  },
  methods: {
    onClickLeft() {
      this.show ? this.$router.go(-1) : "";
    },
    gotoSearch() {
      this.$router.push({ name: "search" });
    }
  }
};
</script>