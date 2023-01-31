import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import News from "../views/News.vue";
import std from "../views/std.vue";
import addDrop from "../views/addDrop.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/news",
      name: "News",
      component: News,
    },
    {
      path: "/std",
      name: "Std",
      component: std,
    },
    {
      path: "/adddrop",
      name: "addDrop",
      component: addDrop,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
