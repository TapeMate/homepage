<template>
  <footer>{{ text }}</footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    text: String,
  },
};
</script>

<style scoped>
footer {
  width: 100%;
  height: 200px;
  background: rgb(235, 235, 235);
}
</style>
