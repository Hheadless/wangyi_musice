<template>
	<div class="account-wrap">
		<AloneHeader :h2="h2"/>
		<div class="userInfo-wrap">
			<div class="user-wrap">
				<div class="left">
					<img :src="userInfo.img" alt="">
					<div class="nick-name">
						<label>{{userInfo.nick}}</label>
						<i>Lv.{{userInfo.lv}}</i>
					</div>
				</div>
				<div class="right">
					<img src="../../assets/金币.png">
					<span>签到</span>
				</div>
			</div>
			<div class="info-wrap">
				<li>
					<span>动态</span>
					<b>{{userInfo.dynamic}}</b>
				</li>
				<li>
					<span>关注</span>
					<b>{{userInfo.follow}}</b>
				</li>
				<li>
					<span>粉丝</span>
					<b>{{userInfo.fans}}</b>
				</li>
				<li>
					<img src="../../assets/铅笔 (1).png" alt="">
					<label>我的资料</label>
				</li>
			</div>
		</div>
		<AccountList v-for="(v,k) in list" :key="k" :list="v"/>
		<li class="exist">退出登录</li>
	</div>
</template>

<script>
import AloneHeader from "@/components/aloneHeader";
import AccountList from "@/components/accountList";
import axios from "axios";

export default {
  name: "Account",
  components: {
    AloneHeader,
    AccountList
  },
  data() {
    return {
      h2: "账号",
      userInfo: {
        img: require("../../../static/4.jpg"),
        lv: 6,
        nick: "张小宇",
        dynamic: 3,
        follow: 2,
        fans: 1
      },
      list: {
        o1: [
          {
            title: "我的消息",
            icon: require("../../assets/信封.png")
          }
        ],
        o2: [
          {
            title: "会员中心",
            icon: require("../../assets/会员.png")
          },
          {
            title: "商城",
            icon: require("../../assets/购物车.png")
          },
          {
            title: "游戏推荐",
            icon: require("../../assets/游戏.png")
          },
          {
            title: "在线听歌免流量",
            icon: require("../../assets/收音机.png")
          }
        ],
        o3: [
          {
            title: "设置",
            icon: require("../../assets/设置.png")
          },
          {
            title: "扫一扫",
            icon: require("../../assets/扫一扫.png")
          },
          {
            title: "换肤",
            icon: require("../../assets/换肤.png")
          },
          {
            title: "夜间模式",
            icon: require("../../assets/灯泡.png")
          },
          {
            title: "定时关闭",
            icon: require("../../assets/定时.png")
          },
          {
            title: "音乐闹钟",
            icon: require("../../assets/闹钟.png")
          },
          {
            title: "驾驶模式",
            icon: require("../../assets/汽车.png")
          },
          {
            title: "亲子频道",
            icon: require("../../assets/亲子.png")
          },
          {
            title: "小冰电台",
            icon: require("../../assets/冰棍.png")
          },
          {
            title: "优惠劵",
            icon: require("../../assets/优惠券.png")
          }
        ],
        o4: [
          {
            title: "加入网易音乐人",
            icon: require("../../assets/音乐.png")
          },
          {
            title: "分享网易云音乐",
            icon: require("../../assets/分享.png")
          },
          {
            title: "关于",
            icon: require("../../assets/关于.png")
          }
        ]
      }
    };
  }
};
</script>

<style>
.account-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.userInfo-wrap {
  width: 100%;
  height: auto;
  border-bottom: 10px solid #eee;
}
.userInfo-wrap > .user-wrap {
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  flex-shrink: 0;
}
.userInfo-wrap > .user-wrap > .left {
  width: 50%;
  height: 70%;
  display: flex;
  align-items: center;
}
.userInfo-wrap > .user-wrap > .left > img {
  width: 55px;
  height: 55px;
  border-radius: 50%;
}
.userInfo-wrap > .user-wrap > .left > .nick-name {
  height: 100%;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.userInfo-wrap > .user-wrap > .left > .nick-name > label {
  font-size: 16px;
  color: #000;
  height: 28px;
}
.userInfo-wrap > .user-wrap > .left > .nick-name > i {
  color: #999;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 12px;
  text-align: center;
  display: inline;
  width: 40px;
}
.userInfo-wrap > .user-wrap > .right {
  color: #242424;
  border-radius: 13px;
  padding: 2px 5px;
  border: 1px solid #666;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.userInfo-wrap > .user-wrap > .right > img {
  width: 20px;
}
.userInfo-wrap > .info-wrap {
  width: 100%;
  padding: 6px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.userInfo-wrap > .info-wrap > li {
  width: 25%;
  height: 100%;
  border-right: 1px solid #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.userInfo-wrap > .info-wrap > li:last-child {
  border: none;
}
.userInfo-wrap > .info-wrap > li > span {
  font-size: 14px;
  color: #999;
}
.userInfo-wrap > .info-wrap > li > b {
  color: #333;
  font-size: 14px;
}
.userInfo-wrap > .info-wrap > li > img {
  width: 20px;
}
.userInfo-wrap > .info-wrap > li > label {
  color: #666;
  font-size: 14px;
}
.exist {
  width: 100%;
  line-height: 44px;
  text-align: center;
  border-bottom: 9px solid #eee;
}
</style>
