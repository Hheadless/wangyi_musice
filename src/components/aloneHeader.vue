<template>
  <div class="alone-header">
    <span>{{h2}}</span>
    <img src="@/assets/audio.png" alt="">
  </div>
</template>

<script>
export default {
  name: "AloneHeader",
  props: ["h2"]
};
</script>

<style>
.alone-header {
  width: 100%;
  height: 44px;
  background: #242424;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}
.alone-header > span {
  color: #eee;
}
.alone-header > img {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 25px;
}
</style>
