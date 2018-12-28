<template>
    <div class="wrap">
        <img src="../../static/1.jpg" alt="">
        <span @click="toLogin">手机号登录</span>
        <span>注册</span>
    </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    toLogin() {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wrap > img {
  width: 25%;
  margin-top: 40%;
  margin-bottom: 20px;
}
.wrap > span {
  width: 70%;
  line-height: 35px;
  border: 1px solid #f33;
  text-align: center;
  border-radius: 20px;
  margin-top: 15px;
}
</style>
