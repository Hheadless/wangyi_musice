<template>
    <div class="master-wrap">
        <section>
            <router-view></router-view>
        </section>
        <footer>
            <router-link v-for="(v,k) in foot" :key="k" :to="v.path" tag="li">
                <div class="li" @click="tabChange(k)">
                    <img :src="active===k?v.selected:v.imgs" alt="">
                    <span :class="{active:active===k?'active':''}">{{v.txt}}</span>
                </div>
            </router-link>
        </footer>
    </div>
</template>

<script>
export default {
  name: "Master",
  data() {
    return {
      foot: [
        {
          path: "/find",
          selected: require("@/assets/discover_active.png"),
          imgs: require("@/assets/discover.png"),
          txt: "发现"
        },
        {
          path: "/video",
          selected: require("@/assets/video_active.png"),
          imgs: require("@/assets/video.png"),
          txt: "视频"
        },
        {
          path: "/mine",
          selected: require("@/assets/my_active.png"),
          imgs: require("@/assets/my.png"),
          txt: "我的"
        },
        {
          path: "/friend",
          selected: require("@/assets/friend_active.png"),
          imgs: require("@/assets/friend.png"),
          txt: "朋友"
        },
        {
          path: "/account",
          selected: require("@/assets/account_active.png"),
          imgs: require("@/assets/account.png"),
          txt: "账号"
        }
      ],
      active: 0
    };
  },
  methods: {
    tabChange(ind) {
      this.active = ind;
    }
  }
};
</script>

<style>
.master-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
section {
  flex: 1;
  width: 100%;
  overflow-y: auto;
}
footer {
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
  background: #fff;
  border-top: 1px solid #eee;
}
footer > li {
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
footer > li > .li {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  box-sizing: border-box;
}
footer > li > .li > img {
  width: 20px;
  height: 20px;
}
footer > li > .li > span {
  font-size: 12px;
  color: #999;
}
footer > li > .li > span.active {
  color: #666;
}
</style>
