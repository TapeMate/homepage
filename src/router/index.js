import { createRouter, createWebHashHistory } from "vue-router";
import MenuView from "../views/MenuView.vue";
import HomeView from "../views/HomeView.vue";
import GalleryView from "../views/GalleryView.vue";
import ContactView from "../views/ContactView.vue";

import DevView from "../views/DevView.vue";

const routes = [
  {
    path: "/",
    name: "menu",
    component: MenuView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/gallery",
    name: "gallery",
    component: GalleryView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/dev",
    name: "dev",
    component: DevView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
