<template>
  <div class="home">
    <ContentMain header="Welcome to Your Homepage" />
    <Carousel
      label1="First slide label"
      label2="Second slide label"
      label3="Third slide label"
      content1="Some representative placeholder content for the first slide."
      content2="Some representative placeholder content for the second slide."
      content3="Some representative placeholder content for the third slide."
      :src1="sliderImg1"
      :src2="sliderImg2"
      :src3="sliderImg3"
      alt1="slider Image 1"
      alt2="slider Image 2"
      alt3="slider Image 3"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import ContentMain from "@/components/ContentMain.vue";
import Carousel from "@/components/Carousel.vue";

// importing slider images:
import sliderImg1 from "../assets/slider/slider01.jpg";
import sliderImg2 from "../assets/slider/slider02.jpg";
import sliderImg3 from "../assets/slider/slider03.jpg";

export default {
  name: "HomeView",
  components: {
    ContentMain,
    Carousel,
  },
  data() {
    return {
      sliderImg1,
      sliderImg2,
      sliderImg3,
    };
  },
};
</script>
