<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ContentMain msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import ContentMain from "@/components/ContentMain.vue";

export default {
  name: "HomeView",
  components: {
    ContentMain,
  },
};
</script>
