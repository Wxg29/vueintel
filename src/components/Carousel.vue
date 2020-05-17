<template>
  <div class="swpier-container" :id="id">
    <div class="swiper-wrapper">
      <slot>
        <p>这是banner 没有传内容的插槽</p>
      </slot>
    </div>
    <div class="swiper-pagination"></div>
    <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

export default {
  props: {
    id: String,
    swiperOptions: {
      type: Object,
      default: {}
    }
  },
  mounted() {
    // Swiper 实例化
    // 死数据
    let mySwiper = new Swiper("#" + this.id, this.swiperOptions);
  },
  updated() {
    // 异步数据
    let mySwiper = new Swiper("#" + this.id, this.swiperOptions);
  }
};
</script>