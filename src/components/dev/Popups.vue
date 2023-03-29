<template>
  <main>
    <h1>Vue Popups</h1>
    <button @click="() => TogglePopup('buttonTrigger')">Open Popup</button>
    <Popup
      v-if="popupTriggers.buttonTrigger"
      :TogglePopup="() => TogglePopup('buttonTrigger')"
    >
      <h2>My Button Popup</h2>
    </Popup>
    <Popup
      v-if="popupTriggers.timedTrigger"
      :TogglePopup="() => TogglePopup('timedTrigger')"
    >
      <h2>My Timed Popup</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        quisquam, expedita similique iure ipsa corporis doloremque sequi
        inventore nulla delectus unde id dolorum modi labore consectetur
        dolores! Beatae, facere reiciendis!
      </p>
    </Popup>
  </main>
</template>

<script>
import { ref } from "vue";
import Popup from "./Popup";

export default {
  name: "Popups",
  setup() {
    const popupTriggers = ref({
      buttonTrigger: false,
      timedTrigger: false,
    });

    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };

    setTimeout(() => {
      popupTriggers.value.timedTrigger = true;
    }, 3000);

    return {
      Popup,
      popupTriggers,
      TogglePopup,
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
