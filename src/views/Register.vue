<template>
  <div class="box">
    <Header title="注册" :show="true" :search="true"></Header>
    <van-form class="register-form" @submit="onSubmit">
      <van-field
        v-model="register.username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="register.mobile"
        name="mobile"
        label="电话"
        placeholder="电话"
        :rules="[{ required: true, message: '请填写电话号码' }]"
      />
      <van-field
        v-model="register.password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="register.repassword"
        type="password"
        name="repassword"
        label="重复密码"
        placeholder="重复密码"
        :rules="[{ required: true, message: '请再次填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      register: {}
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      this.$axios.post("/vue/register", this.register).then(res => {
        if (res.data.type) {
          this.$router.push({ name: "login" });
        }
      });
    }
  }
};
</script>










<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background: #fff;
  .register-form {
    padding: 20px 0 0 0;
  }
}
</style>