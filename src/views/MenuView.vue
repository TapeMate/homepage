<template>
  <Menu header="Menu" :menuItems="items" />
</template>

<script>
import config from "../assets/json/config.json";

export default {
  name: "MenuView",
  data() {
    return {
      items: config.menuItems,
    };
  },
};
</script>

<style></style>
