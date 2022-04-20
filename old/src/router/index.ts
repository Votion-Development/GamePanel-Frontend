import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/servers",
      name: "servers",
      component: () => import("@/views/ServerList.vue")
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("@/views/admin/index.vue"),
      children: [
        {
          path: "",
          component: () => import("@/views/admin/servers/ServerOverview.vue")
        },
        {
          path: "create-servers",
          component: () => import("@/views/admin/servers/CreateServer.vue")
        }
      ]
    }
  ]
});

export default router;
