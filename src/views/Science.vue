<template>
  <div class="box" :class="animateClass">
    <van-sticky :offset-top="0">
      <Header title="行业资讯"></Header>
    </van-sticky>

    <van-tabs v-model="activeName" title-active-color="#007aff" color="#007aff" animated>
      <van-tab title="综合信息" name="a">
        <div class="newslist" v-for="(news,i) in newsList" :key="i" @click="watchNews(news)">
          <img :src="news.file1" alt />
          <p>{{news.title}}</p>
        </div>
      </van-tab>
      <van-tab title="凌动" name="b">
        <div class="newslist" v-for="(news,i) in newsList" :key="i" @click="watchNews(news)">
          <img :src="news.file1" alt />
          <p>{{news.title}}</p>
        </div>
      </van-tab>
      <van-tab title="酷睿" name="e">
        <div class="newslist" v-for="(news,i) in newsList" :key="i" @click="watchNews(news)">
          <img :src="news.file1" alt />
          <p>{{news.title}}</p>
        </div>
      </van-tab>
      <van-tab title="NUC" name="f">
        <div class="newslist" v-for="(news,i) in newsList" :key="i" @click="watchNews(news)">
          <img :src="news.file1" alt />
          <p>{{news.title}}</p>
        </div>
      </van-tab>
      <van-tab title="夸克" name="g">
        <div class="newslist" v-for="(news,i) in newsList" :key="i" @click="watchNews(news)">
          <img :src="news.file1" alt />
          <p>{{news.title}}</p>
        </div>
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
      activeName: 0,
      newsList: {},
      lindong: {},
      data: {
        newsTypeId: "c9f8ab27-c361-11e6-acb5-3fea19ef1fee",
        limit: 6,
        skip: 0
      }
    };
  },
  methods: {
    watchNews(news) {
      this.$router.push({ name: "watchnews", params: { id: news.id } });
    }
  },
  mounted() {
    //综合
    this.$axios.post("/inl/api/news/findNewsByTypeId").then(res => {
      this.newsList = res.data.data;
    });
    // 凌动
    // this.$axios
    //   .post("/intel/news/findNewsByTypeId", {
    //     headers: {
    //       "Content-Type": "application/json;charset=UTF-8"
    //     },
    //     payload: {
    //       newsTypeId: "c9f8ab27-c361-11e6-acb5-3fea19ef1fee",
    //       limit: 6,
    //       skip: 0
    //     }
    //   })
    //   .then(res => {
    //     this.lindong = res.data.data;
    //   });
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background: #ffffff;
  .newslist {
    display: flex;
    padding: 10px 15px;
    overflow: hidden;
    text-align: left;
    border-bottom: 1px solid whitesmoke;
    img {
      width: 50%;
      height: 100px;
    }
    p {
      width: 40%;
      height: 40px;
      font-size: 14px;
      padding-left: 10px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }
}
</style>