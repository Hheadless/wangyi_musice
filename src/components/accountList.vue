<template>
    <div class="account-list">
        <li v-for="(v,k) in list" :key="k" @click="toPage(v.title)">
            <img :src="v.icon" alt="" class="icon">
            <div class="text-list">
                <span>{{v.title}}</span>
                <img src="../assets/更多.png" alt="">
            </div>
        </li>
    </div>
</template>

<script>
export default {
  name: "AccountList",
  props: ["list"],
  methods: {
    toPage(type) {
      switch (type) {
        case "会员中心": {
          this.$router.push("/vipcenter");
          break;
        }
        default:
          break;
      }
    }
  }
};
</script>

<style>
.account-list {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  border-bottom: 9px solid #eee;
  flex-shrink: 0;
}
.account-list > li {
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}
.account-list > li > .icon {
  width: 20px;
  margin: 0 8px 0 10px;
}
.account-list > li > .text-list {
  flex: 1;
  height: 100%;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.account-list > li > .text-list > img {
  width: 20px;
  margin-right: 10px;
}
.account-list > li > .text-list > span {
  font-size: 16px;
}
</style>
