<template>
  <div class="gallery">
    <div class="gallery-container">
      <img src="../assets/garden01.jpg" alt="" />
    </div>
    <div class="gallery-container">
      <img src="../assets/garden02.jpg" alt="" />
    </div>
    <div class="gallery-container">
      <img src="../assets/garden03.jpg" alt="" />
    </div>
    <div class="gallery-container">
      <img src="../assets/garden04.jpg" alt="" />
    </div>
    <div class="gallery-container">
      <img src="../assets/garden05.jpg" alt="" />
    </div>
    <div class="gallery-container">
      <img src="../assets/garden06.jpg" alt="" />
    </div>
    <div class="gallery-container">
      <img src="../assets/garden07.jpg" alt="" />
    </div>
    <div class="gallery-container">
      <img src="../assets/garden08.jpg" alt="" />
    </div>
    <div class="gallery-container">
      <img src="../assets/garden09.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
};
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  padding: 10px;
}
.gallery-container {
  position: relative;
  height: 300px;
  /* width: 200px; */
  overflow: hidden;
}
img {
  height: 100%;
  width: auto;
  object-fit: cover;
}
</style>
