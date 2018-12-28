<template>
  <div>
    <!--        使用 vuex 的辅助方法，传递的参数 为 同/异步 接收的第二参数 -->
    <button @click="change({payload:'-'})">-</button>
    <span>{{count}}</span>
    <button @click="change({payload:'+'})">+</button>
    <b>{{comp}}</b>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
// 推荐使用辅助方法。避免影响store中的其他模块

export default {
  name: "StoreView",
  computed: {
    ...mapState({ count: state => state.app.count }), // 返回的是一个对象
    ...mapGetters({ comp: "app/comp" })
  },
  mounted() {
    // console.log(this.$store);
  },
  methods: {
    ...mapMutations("app", { changeNum: "changeNum" }),
    ...mapActions({ changeAsync: "app/changeAsync" }),
    change(type) {
      //   this.$store.commit("app/changeNum", { payload: type }); // "app/changeNum" => 使用命名空间后 必须具体指定到模块中的东西
      //   this.$store.dispatch("app/changeAsync", { payload: type });
      // this.$store
      //   .dispatch({
      //     type: "app/changeAsync",
      //     payload: type
      //   })
      //   .then(res => {
      //     console.log("完成");
      //   });

      // 如果想使用 actions 的 promise ,定义一个其他方法 来调用 acions 即可
      this.changeAsync(type).then(res => {
        console.log("success");
      });
    }
  }
};
</script>

<style>
</style>
