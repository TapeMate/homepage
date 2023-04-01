<template>
  <div class="container">
    <div v-for="(item, index) in data" :key="index" class="object">
      full Object: {{ item }}
      <br />
      <span>HEADER: {{ item.header }}</span> <br />

      <span>ROUT: {{ item.rout }}</span> <br />

      <span>NAME: {{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReadFromArray",
  props: {
    data: Array,
  },
};
</script>

<style scoped>
.container {
  background: tomato;
  padding: 3rem;
}
.object {
  background: white;
  padding: 1rem;
  margin-bottom: 10px;
  border: 1px solid black;
}
</style>
