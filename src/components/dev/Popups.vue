<template>
  <main>
    <h1>Vue Popups</h1>
    <button>Open Popup</button>
    <Popup>
      <h2>MyPopup</h2>
    </Popup>
  </main>
</template>

<script>
import Popup from "./Popup";

export default {
  name: "Popups",
  setup() {
    return {
      Popup,
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
</style>
