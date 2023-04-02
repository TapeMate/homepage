<template>
  <div class="about">
    <h3>About</h3>
    <About :companyData="companyData" />
  </div>
</template>

<script>
import About from "../components/About.vue";
import config from "../assets/json/config.json";

export default {
  components: {
    About,
  },
  data() {
    return {
      companyData: config.companyInfo,
    };
  },
};
</script>
