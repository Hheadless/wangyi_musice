<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
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
