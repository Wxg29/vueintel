<template>
  <div class="box" :class="animateClass">
    <van-sticky :offset-top="0">
      <Header title="首页"></Header>
    </van-sticky>

    <!-- banner轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(val,i) in obj.banner" :key="i">
        <img class="h-bannerimg" :src="val.webPhoto" alt />
      </van-swipe-item>
    </van-swipe>

    <!-- 直播视频   --- 有视频数据 -->
    <van-tabs v-model="active" title-active-color="#007aff" color="#007aff" animated>
      <van-tab title="直播视频">
        <div class="h-video">
          <div class="video-v">
            <div class="video-item" v-for="(v,i) in obj.videos" :key="i">
              <img @click="watchLive(v)" class="video-pic" :src="v.file1" alt />
              <p>{{v.title}}</p>
            </div>
          </div>
        </div>
      </van-tab>

      <!-- 直播报名 --- 没有视频数据 -->
      <van-tab title="直播报名">
        <div class="h-live">
          <!-- <div class="live-title"> -->
          <!-- <h3>直播报名</h3> -->
          <!-- <p @click="gotoVideo">更多></p> -->
          <!-- </div> -->
          <div class="live-video">
            <div class="video-list" v-for="(video,i) in obj.apply" :key="i">
              <img @click="watchBaoming(video)" class="video-img" :src="video.image" alt />
              <p>{{video.subject}}</p>
              <p>嘉宾:{{video.host}}</p>
            </div>
          </div>
        </div>
      </van-tab>

      <van-tab title="Online">
        <div class="h-live">
          <div class="live-video">
            <div class="video-list" v-for="(video,i) in obj.online" :key="i">
              <img @click="watchOnline(video)" class="video-img" :src="video.file1" alt />
              <p>{{video.title}}</p>
            </div>
          </div>
        </div>
      </van-tab>

      <van-tab title="在线培训">
        <div class="h-live">
          <div class="live-video">
            <div class="video-list" v-for="(video,i) in obj.study" :key="i">
              <img @click="watchZaixian(video)" class="video-img" :src="video.file1" alt />
              <p>{{video.title}}</p>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>


<script>
import { animate } from "@/utils";

import { mapState, mapActions } from "vuex";

export default {
  mixins: [animate],

  data() {
    return {
      bannerList: {},
      liveList: {},
      videoList: {},
      onlineList: {},
      zaixianList: {},
      active: 0
    };
  },
  props: {
    flag: Boolean
  },
  computed: {
    ...mapState(["obj"])
  },
  methods: {
    ...mapActions([
      "getHomeBanner",
      "getHomeVideo",
      "getHomeApply",
      "getHomeOnline",
      "getHomeStudy"
    ]),
    // 直播
    watchLive(v) {
      if (v.sourceLink) {
        this.$router.push({
          name: "watchvideo",
          params: { sourceLink: v.sourceLink }
        });
      }
    },
    // 报名
    watchBaoming(video) {
      if (video.sourceLink) {
        this.$router.push({
          name: "watchvideo",
          params: { sourceLink: video.sourceLink }
        });
      }
    },
    // online
    watchOnline(video) {
      if (video.sourceLink) {
        this.$router.push({
          name: "watchvideo",
          params: { sourceLink: video.sourceLink }
        });
      }
    },
    // 在线培训
    watchZaixian(video) {
      if (video.sourceLink) {
        this.$router.push({
          name: "watchvideo",
          params: { sourceLink: video.sourceLink }
        });
      }
    }
  },
  mounted() {
    //获取轮播图的axios
    this.getHomeBanner();
    // this.$axios.get("/intel/activities/getWeb").then(res => {
    //   this.bannerList = res.data;
    // });

    //直播视频
    this.getHomeVideo();
    // this.$store.dispatch("getHomeVideo");
    // this.$axios
    //   .get(
    //     "/intel/videos/getHome?videoTypeId=a84bfc00-ba42-11e8-b064-d77e6f2f1ad6&source=9"
    //   )
    //   .then(res => {
    //     this.videoList = res.data;
    //   });

    //获取直播报名视频
    this.getHomeApply();
    // this.$axios.post("/intel/lives/findLive").then(res => {
    //   this.liveList = res.data.data;
    // });

    //Online
    this.getHomeOnline();
    // this.$axios
    //   .get(
    //     "/intel/videos/getHome?videoTypeId=1332ef10-f05d-11e8-bfd0-0be039df7995&source=9"
    //   )
    //   .then(res => {
    //     this.onlineList = res.data;
    //   });

    //在线培训
    this.getHomeStudy();
    // this.$axios
    //   .get(
    //     "/intel/videos/getHome?videoTypeId=c9fb1c2a-c361-11e6-acb5-3fea19ef1fee&source=9"
    //   )
    //   .then(res => {
    //     this.zaixianList = res.data;
    //   });
  }
};
</script>


<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background: #fff;
  .h-bannerimg {
    width: 100%;
    height: 180px;
  }

  .h-live {
    padding: 10px 15px;

    .live-title {
      display: flex;
      justify-content: space-between;
      justify-items: center;
      h3 {
        font-size: 18px;
        text-align: left;
        padding: 30px 0px 10px 0px;
      }
      p {
        padding: 34px 0px 10px 0;
        color: #007aff;
      }
    }

    .live-video {
      width: 100%;
      display: flex;
      // flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;

      .video-list {
        width: 45%;
        margin-bottom: 30px;
        .video-img {
          width: 100%;
          height: 100px;
          padding-bottom: 5px;
        }
        p {
          padding: 3px 5px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
  .h-video {
    padding: 10px 15px;
    .video-v {
      width: 100%;
      display: flex;
      // flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;
      .video-item {
        width: 40%;
        margin-bottom: 30px;
        .video-pic {
          width: 100%;
          height: 100px;
          padding-bottom: 5px;
        }
      }
    }
  }
}
</style>