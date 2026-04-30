import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    component: () => import("../views/HomeView.vue"),
    meta: { layout: "default" },
  },
  {
    path: "/about",
    component: () => import("../views/AboutView.vue"),
    meta: { layout: "default" },
  },
  {
    path: "/services",
    component: () => import("../views/ServicesView.vue"),
    meta: { layout: "default" },
  },
  {
    path: "/projects",
    component: () => import("../views/ProjectsView.vue"),
    meta: { layout: "default" },
  },
  {
    path: "/contact",
    component: () => import("../views/ContactView.vue"),
    meta: { layout: "default" },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router