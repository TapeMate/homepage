<template>
  <div class="gallery">
    <div v-for="image in images" :key="image" class="gallery-container">
      <img :src="image" alt="" />
    </div>
  </div>
</template>

<script>
// importing images for gallery
import gardenImage01 from "../assets/gallery/garden01.jpg";
import gardenImage02 from "../assets/gallery/garden02.jpg";
import gardenImage03 from "../assets/gallery/garden03.jpg";
import gardenImage04 from "../assets/gallery/garden04.jpg";
import gardenImage05 from "../assets/gallery/garden05.jpg";
import gardenImage06 from "../assets/gallery/garden06.jpg";
import gardenImage07 from "../assets/gallery/garden07.jpg";
import gardenImage08 from "../assets/gallery/garden08.jpg";
import gardenImage09 from "../assets/gallery/garden09.jpg";

export default {
  name: "Gallery",
  data() {
    return {
      images: [
        gardenImage01,
        gardenImage02,
        gardenImage03,
        gardenImage04,
        gardenImage05,
        gardenImage06,
        gardenImage07,
        gardenImage08,
        gardenImage09,
      ],
    };
  },
};
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
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
