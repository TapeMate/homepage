<template>
  <div class="popup">
    <div class="popup-inner">
      <slot />
      <button class="popup-close">Close Popup</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
};
</script>

<style></style>
