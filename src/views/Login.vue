<template>
  <div class="box">
    <Header title="登陆" :show="true" :search="true"></Header>
    <van-form class="login-form" @submit="onSubmit">
      <van-field
        v-model="login.mobile"
        name="mobile"
        label="电话"
        placeholder="电话"
        :rules="[{ required: true, message: '请填写电话' }]"
      />
      <van-field
        v-model="login.password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>

    <van-divider class="login-register" @click="gotoRegister" content-position="right">点击注册</van-divider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {}
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      this.$axios.post("/vue/login", this.login).then(res => {
        if (res.data.type) {
          localStorage.mobile = this.login.mobile;
          localStorage.username = res.data.data.username;
          localStorage.isLogin = true;
          this.$router.push({ name: "mine" });
          //后端传过来的token 要存进sessionStorage
          sessionStorage.token = res.data.token;
        }
      });
    },
    gotoRegister() {
      this.$router.push({ name: "register" });
    }
  }
};
</script>


<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background: #fff;
  .login-form {
    padding: 20px 0 0 0;
  }
  .login-register {
    margin: 30px 0 0 0;
  }
}
</style>