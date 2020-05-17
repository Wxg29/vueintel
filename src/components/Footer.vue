<template>
  <div>
    <van-tabbar v-model="active" :route="true">
      <van-tabbar-item
        v-for="(val,i) in foots"
        :key="i"
        :to="{name:val.name}"
        :badge="i == 2?'3':''"
      >
        <span>{{val.txt}}</span>
        <template #icon="props">
          <i class="iconfont" v-html="val.icon"></i>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>



<script>
import { foots } from "@/utils";
export default {
  data() {
    return {
      foots,
      active: 0
    };
  }
};
</script>


<style lang="scss" scoped>
.iconfont {
  font-size: 20px;
}
</style>