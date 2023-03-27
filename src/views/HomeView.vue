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
      src1="https://images.pexels.com/photos/2781760/pexels-photo-2781760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      src2="https://images.pexels.com/photos/1382393/pexels-photo-1382393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      src3="https://images.pexels.com/photos/122429/leaf-nature-green-spring-122429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
