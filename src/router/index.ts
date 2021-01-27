import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Projects from "../views/Projects.vue";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/",
    name: "Home",
    component: Home
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
