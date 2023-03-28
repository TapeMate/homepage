<template>
  <div class="gallery">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="gallery-container"
    >
      <img :src="image" alt="" />
      <div v-if="overlay == true" class="overlay">
        <div class="content">{{ content[index] }}</div>
      </div>
    </div>
  </div>
</template>

<!-- Add modal function  -->

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
      overlay: true,
      content: [
        "content overlay 01",
        "content overlay 02",
        "content overlay 03",
        "content overlay 04",
        "content overlay 05",
        "content overlay 06",
        "content overlay 07",
        "content overlay 08",
        "content overlay 09",
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
  max-width: 1400px;
}
.gallery-container {
  position: relative;
  height: 350px;
  /* width: 200px; */
  overflow: hidden;
  border-radius: 5px;
}
.gallery-container:hover .overlay {
  opacity: 0.7;
}
img {
  display: block;
  height: 100%;
  width: auto;
  object-fit: cover;
  /* border: 3px solid white;*/
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: rgb(94, 204, 94);
  border-radius: 5px;
}

.content {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
</style>
