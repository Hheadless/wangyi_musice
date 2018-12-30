<template>
    <div>
        <div>this is child01 page</div>
        <Childtwo/>
    </div>
</template>

<script>
import Childtwo from "./childtwo";

export default {
  name: "Childone",
  components: {
    Childtwo
  }
};
</script>

<style>
</style>
