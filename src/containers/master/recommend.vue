<template>
  <div class="recom-wrap">
    <!-- swiper -->
    <div class="big-box">
      <div class="swiper-wrap">
        <swiper :options="swipeOption">
          <swiper-slide v-for="(v,k) in imgs" :key="k">
            <img :src="v" alt="">
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- nav -->
    <div class="nav-list">
      <li v-for="(v,k) in nav" :key="k">
        <div class="img">
          <img :src="v.icon" alt="">
        </div>
        <span>{{v.txt}}</span>
      </li>
    </div>
    <!-- 推荐歌单 -->
    <h3 class="h2-tag">
      <span>推荐歌单</span>
      <img src="../../../static/更多.png" alt="">
    </h3>
    <div class="recom-list">
      <dl v-for="(v,k) in recom" :key="k">
        <dt>
          <img :src="v.img" alt="">
        </dt>
        <dd>{{v.title}}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import axios from "axios";

export default {
  name: "Recommend",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      imgs: [
        "https://p1.music.126.net/mlqWka1SwUrIHYQZ5iiivA==/109951163748935305.jpg",
        "https://p1.music.126.net/Jp6yvwYLiY_1NaaY-bmgiQ==/109951163747807381.jpg",
        "https://p1.music.126.net/GDfHgrRVZqdq2_gVWc-lDw==/109951163749761819.jpg",
        "https://p1.music.126.net/3FAubLoTACnQPX0--rc_2Q==/109951163749719226.jpg"
      ],
      nav: [
        {
          icon: require("@/assets/video.png"),
          txt: "私人FM"
        },
        {
          icon: require("@/assets/icon.png"),
          txt: "每日推荐"
        },
        {
          icon: require("@/assets/discover.png"),
          txt: "歌单"
        },
        {
          icon: require("@/assets/audio.png"),
          txt: "排行榜"
        }
      ],
      recom: [],
      swipeOption: {
        autoplay: true,
        loop: true
      }
    };
  },
  mounted() {
    axios.get("/recom").then(res => {
      this.recom = JSON.parse(res.data);
    });
  },
  methods: {}
};
</script>

<style>
.recom-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
