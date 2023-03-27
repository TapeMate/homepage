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
  gap: 20px;
  padding: 20px;
  background: rgb(209, 204, 198);
}
.gallery-container {
  position: relative;
  height: 350px;
  /* width: 200px; */
  overflow: hidden;
}
img {
  height: 100%;
  width: auto;
  object-fit: cover;
  /* border: 3px solid white;*/
  border-radius: 5px;
}
</style>
