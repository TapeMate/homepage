<template>
  <NavbarMain title="Navigation" />
  <router-view />
  <Footer :companyData="footerData" />
</template>

<script>
import NavbarMain from "./components/NavbarMain.vue";
import Footer from "./components/Footer.vue";
import config from "./assets/json/config.json";

export default {
  name: "App",
  components: {
    NavbarMain,
    Footer,
  },
  data() {
    return {
      footerData: config.companyInfo,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
