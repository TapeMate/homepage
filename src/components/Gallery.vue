<template>
  <div class="gallery">
    <div v-for="image in images" :key="image" class="gallery-container">
      <img :src="image" alt="" />
    </div>
  </div>
</template>

<script>
// importing images for gallery
import galleryImg01 from "../assets/gallery/garden01.jpg";
import galleryImg02 from "../assets/gallery/garden02.jpg";
import galleryImg03 from "../assets/gallery/garden03.jpg";
import galleryImg04 from "../assets/gallery/garden04.jpg";
import galleryImg05 from "../assets/gallery/garden05.jpg";
import galleryImg06 from "../assets/gallery/garden06.jpg";
import galleryImg07 from "../assets/gallery/garden07.jpg";
import galleryImg08 from "../assets/gallery/garden08.jpg";
import galleryImg09 from "../assets/gallery/garden09.jpg";

export default {
  name: "Gallery",
  data() {
    return {
      images: [
        galleryImg01,
        galleryImg02,
        galleryImg03,
        galleryImg04,
        galleryImg05,
        galleryImg06,
        galleryImg07,
        galleryImg08,
        galleryImg09,
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
