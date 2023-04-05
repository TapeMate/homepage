<template>
  <Popups />
  <!-- <ReadFromArray :data="items" /> -->
</template>

<script>
import Popups from "../components/dev/Popups.vue";
// import ReadFromArray from "../components/dev/ReadFromArray.vue";

// import data:
import data from "../assets/json/config.json";

export default {
  name: "DevView",
  components: {
    Popups,
    // ReadFromArray,
  },
  data() {
    return {
      items: data.menuItems,
    };
  },
};
</script>

<style></style>
