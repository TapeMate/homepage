<template>
  <div class="popup">
    <div class="popup-inner">
      <slot />
      <button class="popup-close" @click="TogglePopup()">Close Popup</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
  props: ["TogglePopup"],
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background: rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-inner {
  background: white;
  padding: 32px;
}
</style>
