<template>
  <div class="box" :class="animateClass">
    <Header title="个人中心" :show="false" :search="true"></Header>

    <div class="avatar">
      <div class="a-top">
        <Uploadimg class="touxinag" ref="one"></Uploadimg>
        <div class="top-info" @click="gotoLogin">
          <p>
            用户名:
            <span>{{user}}</span>
          </p>

          <p>
            电话:
            <span>{{mobile}}</span>
          </p>
        </div>
      </div>

      <div class="a-center">
        <ul>
          <li>
            <van-icon name="coupon" size="45px" color="#44cef6" />
            <p>钱包</p>
          </li>
          <li>
            <van-icon name="underway" size="45px" color="#f47983" />
            <p>订单</p>
          </li>
          <li>
            <van-icon name="browsing-history" size="45px" color="#cca4e3" />
            <p>足迹</p>
          </li>
        </ul>
      </div>

      <div class="a-bottom">
        <div class="bottom-list">
          <van-cell title="收藏" is-link />
        </div>
        <div class="bottom-list">
          <van-cell title="优惠券" is-link />
        </div>
        <div class="bottom-list">
          <van-cell title="视频课" is-link />
        </div>
        <div class="bottom-list">
          <van-cell title="大本营" is-link />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { baseURL } from "@/utils/axios";
import { animate } from "@/utils";
export default {
  mixins: [animate],
  data() {
    return {
      userinfo: {},
      token: sessionStorage.token || "未登录",
      user: localStorage.username,
      mobile: localStorage.mobile,
      show: false
    };
  },
  methods: {
    gotoLogin() {
      this.$router.push({ name: "login" });
    },
    showPopup() {
      this.show = true;
    }
  },
  mounted() {
    this.$axios.get("/vue/getuserinfo").then(res => {
      if (res.data.type) {
        this.userinfo = res.data.result;
        if (res.data.result.avatar) {
          this.$refs.one.pic = res.data.result.avatar.replace(
            /public/,
            baseURL
          );
        }
      }
    });
  }
};
</script>



<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background: #fff;

  .a-top {
    display: flex;
    padding: 20px 15px 30px 15px;
    background: #bacac6;
    .top-info {
      font-size: 20px;
      padding: 15px 10px;
      text-align: left;
      p {
        font-size: 16px;
        padding: 5px 0;
        span {
          font-size: 18px;
          color: lightseagreen;
        }
      }
    }
  }

  .a-center {
    margin-bottom: 30px 0;
    ul {
      display: flex;
      justify-content: space-around;
      border-top: 0.1px solid lightgray;
      border-bottom: 0.1px solid lightgray;
      padding: 20px 0;
      li {
        font-size: 13px;
      }
    }
  }
  .a-bottom {
    text-align: left;
    padding-bottom: 50px;
    .bottom-list {
      padding: 2px 5px;
      font-size: 14px;
      border-bottom: 0.1px solid lightgray;
    }
  }
}
</style>