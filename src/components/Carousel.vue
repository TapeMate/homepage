<template>
  <div class="wrapper">
    <div
      id="carouselExampleDark"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
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
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="4000">
          <img :src="src1" class="d-block w-100" :alt="alt1" />
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ label1 }}</h5>
            <p>{{ content1 }}</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <img :src="src2" class="d-block w-100" :alt="alt2" />
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ label2 }}</h5>
            <p>{{ content2 }}</p>
          </div>
        </div>
        <div class="carousel-item">
          <img :src="src3" class="d-block w-100" :alt="alt3" />
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ label3 }}</h5>
            <p>{{ content3 }}</p>
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
    label1: String,
    label2: String,
    label3: String,
    content1: String,
    content2: String,
    content3: String,
    src1: String,
    src2: String,
    src3: String,
    alt1: String,
    alt2: String,
    alt3: String,
  },
};
</script>

<style scoped>
img {
  height: 400px;
  object-fit: cover;
  opacity: 0.5;
}
.wrapper {
  margin: 20px 0;
}
</style>
