<template>
    <div>
        <div>this is parent page</div>
        <Childone/>
    </div>
</template>

<script>
import Childone from "./childone";

export default {
  name: "Parent",
  provide: {
    foo: "hahaha"
  },
  components: {
    Childone
  }
};
</script>

<style>
</style>
