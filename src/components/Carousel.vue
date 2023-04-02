<template>
  <div class="wrapper">
    <div
      id="carouselExampleDark"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <!-- future work with for double loop -->
        <!-- <button
          v-for="(item, index) in carouselItems"
          :key="index"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          :class="item.isActive === true ? 'active' : ''"
          aria-current="true"
          aria-label="Slide 1"
        ></button> -->
        <!-- end of future work -->
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div class="carousel-inner">
        <div
          v-for="(item, index) in carouselItems"
          :key="index"
          class="carousel-item"
          :class="item.isActive === true ? 'active' : ''"
          :data-bs-interval="item.interval"
        >
          <img :src="images[index]" class="d-block w-100" :alt="item.alt" />
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ item.label }}</h5>
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    carouselItems: Array,
    images: Array,
  },
};
</script>

<style scoped>
img {
  height: 400px;
  object-fit: cover;
  opacity: 0.8;
}
.wrapper {
  margin: 20px 0;
}
</style>
