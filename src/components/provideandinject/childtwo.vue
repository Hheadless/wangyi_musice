<template>
  <div>
    <div>this is child02 page</div>
    <b>{{foo}}-----</b>
  </div>
</template>

<script>
export default {
  name: "Childtwo",
  inject: ["foo"] // inject相当于强化版props
};
</script>

<style>
</style>
