<template>
  <div class="about">
    <h3>About</h3>
    <About />
  </div>
</template>

<script>
import About from "../components/About.vue";

export default {
  components: {
    About,
  },
};
</script>

<style scoped>
.about {
  padding: 1rem;
}
h3 {
  padding: 2rem;
  font-weight: bold;
}
h5 {
  padding: 1rem;
  font-weight: bold;
}
p {
  line-height: 1;
}
</style>
