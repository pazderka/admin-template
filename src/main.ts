import { createApp } from "vue";
import "./scss/main.scss";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("./pages/AdminPage.vue") },
    {
      path: "/products/:id",
      component: () => import("./pages/AdminProductDetailPage.vue"),
    },
  ],
});

app.use(router);
app.mount("#app");
