<template>
  <div class="gallery">
    <div class="gallery-container test">
      <a href="../assets/garden03.jpg"></a>
      <!-- <img src="../assets/garden01.jpg" alt="" /> -->
    </div>
    <!-- <div class="gallery-container">
      <img src="../assets/garden02.jpg" alt="" />
    </div>
    <div class="gallery-container">
      <img src="../assets/garden03.jpg" alt="" />
    </div> -->
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
  width: 100%;
  gap: 10px;
}

.test {
  background-image: url(../assets/garden03.jpg);
  background-size: cover;
}
.gallery-container {
  height: 300px;
  width: 100%;
}
img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;

  /* vertical-align: middle; */
}
</style>
