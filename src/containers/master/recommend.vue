<template>
  <div class="recom-wrap">
    <!-- swiper -->
    <div class="big-box">
      <div class="swiper-wrap">
        <swiper>
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
    <!-- <h3 class="h2-tag">
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
    </div>-->
    <div>
      <button @click="changeNum('+')">+</button>
      <span>{{this.$store.state.app.count}}</span>
      <button @click="changeNum('-')">-</button>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

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
      recom: [
        {
          img:
            "http://p1.music.126.net/D8WtHCFUKZso67Oj81-KtA==/109951163749745817.jpg",
          title: "别沮丧，别过早的放弃要相信自己"
        },
        {
          img:
            "https://p1.music.126.net/Z5BP-7deN9ETkPAIUHINgw==/19033645788985302.jpg",
          title: "声控特辑｜性感男声 开口即心动"
        },
        {
          img:
            "https://p1.music.126.net/_WKAVvPOn-9CsA1z0jnLSg==/109951163069485958.jpg",
          title: "心中有丘壑，眉目作山河"
        },
        {
          img:
            "https://p2.music.126.net/ntiJbNZUENLqA3o4Ji1ZjA==/109951163079774185.jpg",
          title: "韩语：未来科技，流行时尚的新潮节奏"
        },
        {
          img:
            "https://p1.music.126.net/0f6yducZVMVChgykvv8hUQ==/109951163530693777.jpg",
          title: "生如夏花之绚烂。"
        },
        {
          img:
            "https://p2.music.126.net/d4v_g9Z0sAf7gVUTccdlDA==/6061607604044607.jpg",
          title: "郭德纲单口相声精品集"
        }
      ]
    };
  },
  mounted() {
    console.log(this.$store);
  },
  methods: {
    changeNum(type) {
      // this.$store.commit("changeNum", { payload: type });
      this.$store.commit({
        type: "changeNum",
        payload: type
      });
    }
  }
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
.big-box {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #242424;
  flex-shrink: 0;
}
.swiper-wrap {
  width: 98%;
  height: auto;
  border-radius: 5px;
}
.swiper-wrap img {
  width: 100%;
  border-radius: 5px;
}
.nav-list {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  margin-top: 50px;
  flex-shrink: 0;
}
.nav-list > li {
  width: 25%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  align-items: center;
  color: #666;
}
.nav-list > li > .img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: #242424;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-list > li > .img > img {
  width: 24px;
}
.nav-list > li > span {
  margin-top: 6px;
}
.h2-tag {
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  padding: 0 5px;
  box-sizing: border-box;
  color: #242424;
  font-size: 16px;
  flex-shrink: 0;
}
.h2-tag > img {
  width: 20px;
}
.recom-list {
  width: 100%;
  padding: 0 5px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.recom-list > dl {
  width: 32%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
}
.recom-list > dl > dt {
  width: 100%;
  height: auto;
}
.recom-list > dl > dt > img {
  width: 100%;
}
.recom-list > dl > dd {
  width: 100%;
  font-size: 14px;
  /**/
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
