<template>
  <div class="wrap">
    <header>
      <img src="../../static/返回.png" alt="">
      <span>手机号登录</span>
    </header>
    <section>
      <li>
        手机号：
        <input type="text" placeholder="手机号" class="tel" v-model="tel">
      </li>
      <li>
        密码：
        <input type="password" placeholder="密码" class="paw" v-model="paw">
      </li>
      <p class="tips" v-if="isShow">{{tips}}</p>
      <button class="btn" @click="inpChange">登录</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      tel: "",
      paw: "",
      tips: "",
      isShow: false,
      datas: [
        {
          tel: "13935342141",
          paw: "112233"
        },
        {
          tel: "18401449072",
          paw: "112233"
        }
      ]
    };
  },
  methods: {
    inpChange() {
      if (this.tel && this.paw) {
        this.isShow = false;
        const isIn = this.datas.some(v => {
          if (v.tel == this.tel && v.paw == this.paw) {
            return true;
          }
        });
        if (isIn) {
          this.tips = "登录成功";
          this.isShow = true;
          this.$router.push("/master");
        } else {
          this.tips = "请输入正确的密码和手机号";
          this.isShow = true;
        }
      } else {
        this.tips = "请输入手机号和密码";
        this.isShow = true;
      }
    }
  }
};
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 100%;
}
header {
  width: 100%;
  line-height: 44px;
  text-align: center;
  color: #ccc;
  position: relative;
  background: #333;
}
header > img {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 25px;
}
section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
section > .tips {
  width: 100%;
  line-height: 44px;
  text-align: center;
  color: #f33;
  font-size: 16px;
}
section > li {
  width: 100%;
  height: 44px;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  margin-top: 10px;
}
section > li > input {
  width: 60%;
  height: 100%;
  border: 0;
  outline: none;
  margin-left: 10px;
}
.btn {
  width: 60%;
  height: 44px;
  background: #333;
  border-radius: 20px;
  border: 0;
  outline: none;
  color: #ccc;
  font-size: 18px;
  margin-top: 20px;
}
</style>
