<template>
    <div>
        <button @click="change('-')">-</button>
        <span>{{this.$store.state.app.count}}</span>
        <button @click="change('+')">+</button>
    </div>
</template>

<script>
export default {
  name: "StoreView",
  mounted() {
    // console.log(this.$store);
  },
  methods: {
    change(type) {
      //   this.$store.commit("app/changeNum", { payload: type }); // "app/changeNum" => 使用命名空间后 必须具体指定到模块中的东西

      //   this.$store.dispatch("app/changeAsync", { payload: type });

      this.$store
        .dispatch({
          type: "app/changeAsync",
          payload: type
        })
        .then(res => {
          console.log("完成");
        });
    }
  }
};
</script>

<style>
</style>
