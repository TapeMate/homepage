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
      src1="https://dummyimage.com/600x200/eee/fff"
      src2="https://dummyimage.com/600x200/ccc/fff"
      src3="https://dummyimage.com/600x200/aaa/fff"
      alt1="#"
      alt2="#"
      alt3="#"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import ContentMain from "@/components/ContentMain.vue";
import Carousel from "@/components/Carousel.vue";

export default {
  name: "HomeView",
  components: {
    ContentMain,
    Carousel,
  },
};
</script>
