<template>
	<div class="station-wrap">
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
		<!-- 今日优选 -->
		<div class="today-recom">
			<h3>今日优选</h3>
			<span>换一换</span>
		</div>
		<div class="today-list">
			<dl v-for="(v,k) in today" :key="k">
				<dt>
					<img :src="v.img" alt="">
				</dt>
				<dd>
					<h4>{{v.title}}</h4>
					<p>{{v.des}}</p>
				</dd>
			</dl>
		</div>
		<!-- 精品 -->
		<div class="bout-wrap">
			<div class="h4">
				<h4>精品推荐</h4>
				<span>你值得拥有的优质内容</span>
			</div>
		</div>
	</div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import axios from "axios";

export default {
  name: "Station",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      imgs: [
        " https://p1.music.126.net/DXMj3tHSqRcgmo25LZA7HA==/109951163751984031.jpg",
        "https://p1.music.126.net/6iR74oXosg9vPLPYOAlh6A==/109951163751925195.jpg",
        "https://p1.music.126.net/3FAubLoTACnQPX0--rc_2Q==/109951163749719226.jpg"
      ],
      nav: [
        {
          icon: require("@/assets/video.png"),
          txt: "电台分类"
        },
        {
          icon: require("@/assets/icon.png"),
          txt: "电台排行"
        },
        {
          icon: require("@/assets/discover.png"),
          txt: "dj电音"
        },
        {
          icon: require("@/assets/audio.png"),
          txt: "小小电台"
        }
      ],
      swipeOption: {
        autoplay: true,
        loop: true
      },
      today: [],
      bout: []
    };
  },
  mounted() {
    axios.get("/station").then(res => {
      this.today = JSON.parse(res.data).today;
      this.bout = JSON.parse(res.data).bout;
    });
  }
};
</script>

<style>
.station-wrap {
  width: 100%;
  height: 100%;
}
.today-recom {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  box-sizing: border-box;
}
.today-recom > h3 {
  color: #242424;
  font-size: 16px;
}
.today-recom > span {
  color: #666;
  font-size: 12px;
}
.today-list {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.today-list > dl {
  width: 100%;
  height: 80px;
  padding: 0 5px;
  box-sizing: border-box;
  display: flex;
  border-bottom: 1px solid #eee;
  align-items: center;
}
.today-list > dl > dt {
  width: 60px;
}
.today-list > dl > dt img {
  border-radius: 6px;
}
.today-list > dl > dd {
  width: 70%;
  height: 100%;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.today-list > dl > dd > h4 {
  color: #242424;
  height: 30px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.today-list > dl > dd > p {
  font-size: 14px;
}
.bout-wrap {
  width: 100%;
  height: 280px;
  background: #eee;
}
.bout-wrap > .h4 {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.bout-wrap > .h4 > h4 {
  color: #fff;
}
.bout-wrap > .h4 > span {
  color: #ccc;
  font-size: 14px;
}
</style>
