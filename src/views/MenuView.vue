<template>
  <Menu
    header="Main Menu"
    :menuOptions="menuOptions"
    :rout="routs"
    :routName="routNames"
  />
</template>

<script>
import Menu from "../components/Menu.vue";

export default {
  name: "MenuView",
  data() {
    return {
      menuOptions: ["Menu Option 1", "Menu Option 2", "Menu Option 3"],
      routs: ["/gallery", "/home", "/contact"],
      routNames: ["Gallery", "Home", "Contac"],
    };
  },
};
</script>

<style></style>
