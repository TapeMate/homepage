<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <h1>{{ header }}</h1>
</template>

<script>
export default {
  name: "ContentMain",
  props: {
    header: String,
    logo: String,
    alt: String,
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
