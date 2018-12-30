<template>
    <div class="vip-wrap">
        <header>
            <img src="../../assets/返回.png" alt="" class="back">
            <span>会员中心</span>
            <div class="head-right">
                <img src="../../assets/我的.png" alt="">
                <img src="../../assets/噪音.png" alt="">
            </div>
        </header>
        <div class="type-wrap" ref="scrollbox">
            <div>
                <li v-for="(v,k) in scroll" :key="k">
                    <img :src="v" alt="">
                </li>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "VipCenter",
  data() {
    return {
      scroll: [
        "https://p1.music.126.net/mlqWka1SwUrIHYQZ5iiivA==/109951163748935305.jpg",
        "https://p1.music.126.net/Jp6yvwYLiY_1NaaY-bmgiQ==/109951163747807381.jpg"
      ]
    };
  },
  methods: {
    initScroll() {
      new BScroll(this.$refs.scrollbox, {
        scrollX: true,
        click: true
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initScroll();
    });
  }
};
</script>

<style>
.vip-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.vip-wrap > header {
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #eee;
  position: relative;
}
.vip-wrap > header img {
  width: 23px;
}
.vip-wrap > header > span {
  font-size: 18px;
  color: #242424;
}
.vip-wrap > header > .head-right > img {
  margin-left: 18px;
  width: 20px;
}
.vip-wrap > header > .back {
  position: absolute;
  left: 10px;
  top: 10px;
}
.vip-wrap > header > .head-right {
  position: absolute;
  right: 10px;
  top: 10px;
}
.type-wrap {
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
}
.type-wrap > div {
  width: auto;
  display: flex;
  padding: 10px 20px 0 10px;
  box-sizing: border-box;
}
.type-wrap li {
  width: 320px;
  margin-left: 10px;
}
.type-wrap li img {
  width: 100%;
  border-radius: 16px;
}
</style>
