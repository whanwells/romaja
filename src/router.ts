import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/results",
      component: () => import("./pages/ResultPage.vue"),
    },
  ],
});
