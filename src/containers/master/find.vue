<template>
  <div class="find-wrap">
    <Header :list='navList'/>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import Header from "@/components/header";

export default {
  name: "Find",
  data() {
    return {
      navList: [
        {
          path: "/find/recommend",
          text: "个性推荐"
        },
        {
          path: "/find/station",
          text: "主播电台"
        }
      ]
    };
  },
  components: {
    Header
  }
};
</script>

<style>
.find-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.find-wrap > section{
  width: 100%;
  flex: 1;
  overflow-y: auto;
}
</style>
