import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/SearchPeopleView.vue"),
    },
    {
      path: "/graph",
      name: "graph",
      component: () => import("@/views/PeopleRelationshipGraphView.vue"),
    },
  ],
});

export default router;
