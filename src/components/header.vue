<template>
  <header>
    <div class="top-wrap">
      <div class="header">
        <img src="@/assets/icon.png" alt="">
        <div class="box">
          <input type="text" placeholder="猜你喜欢  浮生">
        </div>
        <img src="@/assets/audio.png" alt="">
      </div>
      <div class="link">
        <router-link v-for="(v,k) in list" :to="v.path" tag="li">
          <span @click="tabChange(k)">{{v.text}}</span>
        </router-link>
        <em :style="style"></em>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["list"],
  data() {
    return {
      style: "left:25%",
      baif: 0
    };
  },
  methods: {
    tabChange(ind) {
      this.style = `left:${this.baif * (ind + 1 + ind)}%`;
    }
  },
  mounted() {
    this.baif = 100 / this.list.length / 2;
  }
};
</script>

<style>
header {
  width: 100%;
  height: 80px;
}
.top-wrap {
  width: 100%;
  height: 100%;
  background: #242424;
}
.top-wrap > .header {
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
}
.top-wrap > .header > img {
  width: 23px;
}
.top-wrap > .header > .box {
  width: 70%;
  height: 30px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.top-wrap > .header > .box > input {
  width: 60%;
  height: 100%;
  border: 0;
  outline: none;
  background: rgba(0, 0, 0, 0);
  color: #eee;
  text-align: center;
}
.top-wrap > .header > .box > input::-webkit-input-placeholder {
  color: #eee;
}
.top-wrap > .link {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
}
.top-wrap > .link li {
  padding: 0 10px;
  color: #ccc;
}
.top-wrap > .link em {
  display: inline-block;
  width: 13px;
  height: 3px;
  background: #fff;
  border-radius: 30%;
  position: absolute;
  bottom: -3px;
}
</style>
