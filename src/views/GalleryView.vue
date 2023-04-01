<template>
  <div class="gallery-wrapper">
    <Gallery />
  </div>
</template>

<script>
import Gallery from "../components/Gallery.vue";

export default {
  name: "GalleryView",
  components: {
    Gallery,
  },
};
</script>

<style scoped>
.gallery-wrapper {
  display: flex;
  justify-content: center;
  background: rgb(209, 204, 198);
}
</style>
