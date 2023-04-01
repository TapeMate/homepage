<template>
  <div class="home">
    <ContentMain header="Welcome to Your Homepage" />
    <Carousel :carouselItems="items" />
  </div>
</template>

<script>
// @ is an alias to /src
import ContentMain from "@/components/ContentMain.vue";
import Carousel from "@/components/Carousel.vue";

// import data:
import config from "../assets/json/config.json";

// importing slider images:
// import sliderImg1 from "../assets/slider/slider01.jpg";
// import sliderImg2 from "../assets/slider/slider02.jpg";
// import sliderImg3 from "../assets/slider/slider03.jpg";

export default {
  name: "HomeView",
  components: {
    ContentMain,
    Carousel,
  },
  data() {
    return {
      items: config.carouselItems,

      // sliderImg1,
      // sliderImg2,
      // sliderImg3,
    };
  },
};
</script>
