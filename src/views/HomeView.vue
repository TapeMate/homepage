<template>
  <div class="home">
    <ContentMain header="Welcome to Your Homepage" />
    <Carousel :carouselItems="items" :images="images" />
  </div>
</template>

<script>
// @ is an alias to /src
import ContentMain from "@/components/ContentMain.vue";
import Carousel from "@/components/Carousel.vue";

// import config data:
import config from "../assets/json/config.json";

// importing slider images:
import sliderImg1 from "../assets/slider/slider01.jpg";
import sliderImg2 from "../assets/slider/slider02.jpg";
import sliderImg3 from "../assets/slider/slider03.jpg";
import sliderImg4 from "../assets/slider/slider04.jpg";

export default {
  name: "HomeView",
  components: {
    ContentMain,
    Carousel,
  },
  data() {
    return {
      items: config.carouselItems,
      images: [sliderImg1, sliderImg2, sliderImg3, sliderImg4],
    };
  },
};
</script>
