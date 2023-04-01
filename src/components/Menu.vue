<template>
  <div class="menu-main">
    <div class="menu-main-wrapper">
      <h2 class="menu-main-header">{{ header }}</h2>
      <div
        v-for="(item, index) in menuItems"
        :key="index"
        class="menu-main-element"
      >
        <div class="menu-main-container">
          <h5 class="menu-element-header">{{ item.header }}</h5>
          <router-link class="menu-element-link" :to="item.rout">{{
            item.name
          }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    header: String,
    menuItems: Array,
  },
};
</script>

<style>
.menu-main {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.85);
  padding: 7rem;
}
.menu-main-wrapper {
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.menu-main-header {
  grid-column: 1 / end;
  color: white;
}
.menu-main-element {
  width: 100%;
  height: 50vh;
  cursor: pointer;
}
.menu-main-container {
  width: 100%;
  height: 100%;
  background: tomato;
  border: 1px solid black;
  transition: 0.5s;
}
.menu-main-container:hover {
  background: rgb(255, 53, 18);
}
.menu-element-header {
  color: black;
  transition: 0.5s;
}
.menu-element-link {
  text-decoration: none;
  color: white;
  font-weight: bold;
  height: 100%;
  width: 100%;
}
</style>
